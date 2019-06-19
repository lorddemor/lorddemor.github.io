// Функция преобразования номера в формат +7 (000) 000-00-00
function phoneLocal(phone) {
	return phone.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3-$4-$5');
}

// Компонент шаблона вставки телефоннного номера везде (кастомный тег <my-phone>)
Vue.component('my-phone', {
	template: '<span class="phone call_phone_1"><a href="tel:' + sets.phone + '" title="Позвонить по ' + phoneLocal(sets.phone) + '">' + phoneLocal(sets.phone) + '</a></span>'
})

Vue.directive('input-mask', {
	bind: function(el, obj, vModel) {
		$(el).inputmask();
	}
})

// Шаблон Яндекс-метрики (конец скрипта)
new Vue({
	el: '#ya-metrika',
	data: {
		ya_metrika: sets.ya_metrika
	},
	template: '<noscript v-if="ya_metrika != 0"><div><img src="https://mc.yandex.ru/watch/' + sets.ya_metrika + '" style="position:absolute; left:-9999px;" alt="" /></div></noscript>'
})

new Vue({
	el: '#app',
	data: {
		data: sets,
		phoneSended: 'not',
		inputtedPhone: '',
		inputtedName: '',
		placeholderPhone: '+7 (___) ___-__-__',
		popupIsOpen: false,
		workingHours: false,
		popupAgreement: false,
		roomType: 'rooms',
		pickedFloor: 14,
		pickedRoom: 1,
		decoration: true,
		pickedTransport: 'parking',
		popupType: 0,
		checkedAgreement: true
	},
	methods: {
		changeRoomType: function(roomType) {
			this.roomType = roomType;
			if (roomType === 'rooms' && this.pickedFloor < 8) {
				this.pickedFloor = 8;
			}
			if (roomType === 'apartments') {
				this.decoration = true;
				if (this.pickedRoom === 3) {
					this.pickedRoom = 1;
				}
				if (this.pickedFloor > 7) {
					this.pickedFloor = 3;
				}
			}
		},
		changeFloor: function(floor) {
			this.pickedFloor = floor;
			if (floor < 8) {
				this.changeRoomType('apartments');
			} else {
				this.changeRoomType('rooms');
			}
		},
		changeRoom: function(room) {
			if (this.roomType === 'apartments' && room !== 3) {
				this.pickedRoom = room;
			} else if (this.roomType === 'rooms') {
				this.pickedRoom = room;
			}
		},
		changeDecoration: function(parameter) {
			if (this.roomType !== 'apartments') {
				this.decoration = parameter;
			}
		},
		//Скрипт плавного перехода к нужному блоку
		scrollTo: function(link) {
			//Скрипт плавного перехода к нужному блоку
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			var top = this.getCoords(document.getElementById(link)).top;
			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({
				scrollTop: top
			}, 800);
			// Снимем focus с кликнутого элемента
			document.activeElement.blur();
			this.closeMenu();
		},
		// Устаревший метод получения координат элемента в документе, не конфликтует с трубкой CallKeeper на моб. устр-вах
		getCoords: function(elem) {
			var top = 0,
				left = 0;

			while (elem) {
				top = top + parseInt(elem.offsetTop);
				left = left + parseInt(elem.offsetLeft);
				elem = elem.offsetParent;
			}

			return {
				top: top,
				left: left
			};
		},
		// Находим максимальное из чисел
		maximum: function(array, parameter) {
			var max = Number(array[0][parameter]);
			$.each(array, function(key, data) {
				$.each(data, function(index, value) {
					if (index == parameter && Number(value) > max) {
						max = Number(value);
					}
				});
			});
			return max;
		},
		minimum: function(array, parameter) {
			var min = Number(array[0][parameter]);
			$.each(array, function(key, data) {
				$.each(data, function(index, value) {
					if (index == parameter && Number(value) < min) {
						min = Number(value);
					}
				});
			});
			return min;
		},
		// Добавляем пробелы в разряды чисел
		localeNumber: function(number) {
			output = Number(number);
			return output.toLocaleString();
		},
		openFlyform: function(type) {
			this.ios();
			if (type === 'agreement') {
				this.popupAgreement = true;
			}
			this.popupIsOpen = true;
			document.body.style.overflow = 'hidden';
			document.ontouchmove = function(e) {
				e.preventDefault();
			};
			if (type !== 'agreement') {
				//Цель отправки заявки
				if (sets.ya_metrika !== 0 && this.phoneSended === 'not' && this.popupType === 0) {
					// Fix для режима инкогнито Mozilla
					if (window['yaCounter' + this.data.ya_metrika] !== undefined) {
						window['yaCounter' + sets.ya_metrika].reachGoal('lead');
					}
				}
			}
			var popupBody = document.getElementById('flyform');
			var self = this;
			popupBody.addEventListener('mouseup', function(e) {
				if (e.target === popupBody) {
					self.closePopup();
				}
			});
		},
		closePopup: function() {
			clearInterval(window.flyformChange);
			this.popupIsOpen = false;
			this.popupAgreement = false;

			var popupBody = document.getElementById('popup');
			document.body.style.overflowX = 'hidden';
			document.body.style.overflowY = 'inherit';
			document.ontouchmove = function(e) {
				return true;
			};
			var el = document.getElementsByTagName('html')[0];
			el.classList.remove('ios');
			el = document.getElementsByTagName('body')[0];
			el.classList.remove('ios');
			this.phoneSended = 'not';
			if (this.popupType != 0) {
				this.popupType = 0;
			}
		},
		ios: function() {
			// Проверка на iOS
			var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
			if (iOS == true) {
				var el = document.getElementsByTagName('html')[0];
				el.className += " ios";
				el = document.getElementsByTagName('body')[0];
				el.className += " ios";
			}
		},
		toggleMenu: function() {
			if ($('div.burger').hasClass('open')) {
				this.closeMenu();
			} else {
				this.openMenu();
			}
		},
		openMenu: function() {
			$('div.burger').addClass('open');
			$('.nav').addClass('open');
			$('div.x, div.y, div.z').addClass('collapse');

			setTimeout(function() {
				$('div.y').hide();
				$('div.x').addClass('rotate30');
				$('div.z').addClass('rotate150');
			}, 70);
			setTimeout(function() {
				$('div.x').addClass('rotate45');
				$('div.z').addClass('rotate135');
			}, 120);
		},
		closeMenu: function() {
			$('div.burger').removeClass('open');
			$('.nav').removeClass('open');
			$('div.x').removeClass('rotate45').addClass('rotate30');
			$('div.z').removeClass('rotate135').addClass('rotate150');

			setTimeout(function() {
				$('div.x').removeClass('rotate30');
				$('div.z').removeClass('rotate150');
			}, 50);
			setTimeout(function() {
				$('div.y').show();
				$('div.x, div.y, div.z').removeClass('collapse');
			}, 70);
		},
		//Метод отправки формы
		sendForm: function() {
			$('.circle-loader').removeClass('checking');

			//console.log(this.inputtedPhone);


			var phoneCheck = this.checkForm(this.inputtedPhone);
			//console.log(phoneCheck);

			if (phoneCheck['check'] != false && this.checkedAgreement != false) {
				this.placeholderPhone = '+7 (___) ___-__-__';
				this.phoneSended = 'sending';
				//Цель отправки заявки
				if (this.data.ya_metrika != 0) {
					// Fix для режима инкогнито Mozilla
					if (window['yaCounter' + this.data.ya_metrika] !== undefined) {
						window['yaCounter' + this.data.ya_metrika].reachGoal('final_lead');
					}
				}

				//Цель Google Analytics
				// ga('send', 'event', 'form', 'send');

				var phone = phoneCheck['number'];
				// if ($('input[name="phone"]').length > 0) {
				// 	var name = $('input[name="name"]', $form).val();
				// };
				//console.log('phone to cbh: ' + phone);

				// Автозвонок CallBackHunter
				try {
					CBHCore.api.sendCall({
						phone: phone,
						call_asap: 1
					});
				} catch (e) {
					CBHCore.helpers.logError('CATCH JS ERROR: ' + e.name + '; ' + e.message);
				}

				var fd = new FormData();
				fd.append('phone', phoneCheck['number']);
				fd.append('name', this.inputtedName);
				fd.append('email_title', this.data.email_title);
				fd.append('email_addresses', this.data.email_addresses);
				fd.append('call_value', window.call_value);

				var self = this;
				$.ajax({
					type: "POST",
					url: "send.php",
					data: fd,
					processData: false,
					contentType: false,
					dataType: "json",
					complete: function(msg) {
						// Скроем клавиатуру на мобильном устройстве
						document.activeElement.blur();

						setTimeout(function() {
							if (!self.popupIsOpen) {
								self.openPopup();
							}
							self.phoneSended = 'sended';
						}, 3000);
						// self.phoneSended = 'sended';
					}
				});
			} else {
				this.placeholderPhone = 'Укажите Ваш телефон';
				this.inputtedPhone = '';
				// $('input[type="tel"]').each(function() {
				// 	//$(this).val('');
				// 	$(this).addClass('redput');
				// });
			}
			return false;
		},
		checkForm: function(phone) {

			var checker = true;

			console.log(phone);
			if (phone.substring(0, 1) != '+') {
				phone = '+7' + phone;
			}

			console.log(phone);

			var checkResult = phoneNumberParser(phone);

			console.log(checkResult['parsingResult']);
			//console.log(checkResult['errorDescription']);
			//console.log(checkResult['isPossibleNumber']);
			//console.log(checkResult['isValidNumber']);
			//console.log(checkResult['eFormat']);


			if (checkResult['parsingResult'] == 'error' || checkResult['isPossibleNumber'] == false || checkResult['isValidNumber'] == false || checkResult['eFormat'] == 'invalid') {
				// $form.find("input[name='phone']").addClass("redput");
				// $form.find("input[name='phone']").val("");
				// $form.find("input[name='phone']").attr("placeholder", "Укажите Ваш телефон");
				// $form.find("input[name='phone']").closest('#popup').removeClass("flipInY");
				// $form.find("input[name='phone']").closest('#popup').addClass("shake");
				// setTimeout(function() {
				// 	$form.find("input[name='phone']").closest('#popup').removeClass("shake");
				// }, 3000);
				checker = false;
				var errorData = new FormData();
				errorData.append('inputtedData', phone);
				errorData.append('email_title', sets.email_title);
				errorData.append('parsingResult', checkResult['parsingResult']);
				errorData.append('errorDescription', checkResult['errorDescription']);
				errorData.append('isPossibleNumber', checkResult['isPossibleNumber']);
				errorData.append('notPossibleReason', checkResult['notPossibleReason']);
				errorData.append('isValidNumber', checkResult['isValidNumber']);
				errorData.append('eFormat', checkResult['eFormat']);
				// Высылаем письмо о результате теста только, если что-то ввели, а не просто нажали кнопку
				if (checkResult['parsingResult'] != 'error') {
					$.ajax({
						type: "POST",
						url: "send_wrong_number.php",
						data: errorData,
						processData: false,
						contentType: false,
						dataType: "json",
						complete: function() {
							//console.log('Письмо об ошибке отправлено успешно');
						}
					});
				}
			} else {
				// $form.find("input[name='phone']").removeClass("redput");
			}

			if (checker != true) {
				return {
					'check': false
				}
			} else {
				return {
					'check': true,
					'number': checkResult['eFormat']
				}
			}
		}
	},
	computed: {
		// Размер экрана
		screenSize: function() {
			var w = window,
				d = document,
				e = d.documentElement,
				g = d.getElementsByTagName('body')[0],
				x = w.innerWidth || e.clientWidth || g.clientWidth,
				y = w.innerHeight || e.clientHeight || g.clientHeight;
			return {
				x: x,
				y: y
			}
		}
	},
	created: function() {
		// Узнаем текущий час дня для текста с благодарностью
		var h = new Date().getHours();
		if (h >= this.data.time_work_from && h <= this.data.time_work_to) {
			this.workingHours = true;
		}

		// Возьмём GET-параметры страницы в глобальный массив params (будет доступен из любой функции)
		var strGET = window.location.search.replace('?', '');
		window.params = window
			.location
			.search
			.replace('?', '')
			.split('&')
			.reduce(
				function(p, e) {
					var a = e.split('=');
					p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
					return p;
				}, {}
			);

		var self = this;
		// Определим тип страницы
		switch (window.params['flyform']) {
			case '1':
				self.popupType = 1;
				setTimeout(function() {
					self.openFlyform();
				}, 1500);
				window.flyformChange = setInterval(function() {
					if (self.popupType < 4) {
						self.popupType = self.popupType + 1;
					} else {
						self.popupType = 1;
					}
				}, 10000);
				break;
			case '2':
				self.popupType = 2;
				setTimeout(function() {
					self.openFlyform();
				}, 1500);
				window.flyformChange = setInterval(function() {
					if (self.popupType < 4) {
						self.popupType = self.popupType + 1;
					} else {
						self.popupType = 1;
					}
				}, 10000);
				break;
			case '3':
				self.popupType = 3;
				setTimeout(function() {
					self.openFlyform();
				}, 1500);
				window.flyformChange = setInterval(function() {
					if (self.popupType < 4) {
						self.popupType = self.popupType + 1;
					} else {
						self.popupType = 1;
					}
				}, 10000);
				break;
			case '4':
				self.popupType = 4;
				setTimeout(function() {
					self.openFlyform();
				}, 1500);
				window.flyformChange = setInterval(function() {
					if (self.popupType < 4) {
						self.popupType = self.popupType + 1;
					} else {
						self.popupType = 1;
					}
				}, 10000);
				break;
		}
	},
	mounted: function() {
		var roomSlider = document.getElementById('rooms-slider');
		window.flkty1 = new Flickity(roomSlider, {
			// options
			cellAlign: 'left',
			contain: true,
			cellSelector: '.slide',
			pageDots: false,
			prevNextButtons: true,
			wrapAround: true,
			percentPosition: false,
			autoPlay: false
		});

		// $('#gallery-slider').flickity({
		// 	// options
		// 	cellAlign: 'left',
		// 	contain: true,
		// 	cellSelector: '.slide',
		// 	pageDots: false,
		// 	prevNextButtons: true,
		// 	wrapAround: true,
		// 	percentPosition: false,
		// 	autoPlay: false,
		// 	asNavFor: '#gallery-thumbs'
		// });

		// $('#gallery-thumbs').flickity({
		// 	// options
		// 	asNavFor: '#gallery-slider',
		// 	// cellAlign: 'left',
		// 	contain: true,
		// 	// cellSelector: '.slide',
		// 	pageDots: false,
		// 	prevNextButtons: false,
		// 	// wrapAround: true,
		// 	percentPosition: false,
		// 	// autoPlay: false
		// });

		var aboutSlider = document.getElementById('about-gallery');
		window.flkty2 = new Flickity(aboutSlider, {
			// options
			cellAlign: 'left',
			contain: true,
			cellSelector: '.slide',
			pageDots: true,
			prevNextButtons: false,
			wrapAround: true,
			percentPosition: false,
			autoPlay: 3000
		});

		if (this.screenSize.x < 992) {
			var transportSlider = document.getElementById('transport-slider');
			window.flkty3 = new Flickity(transportSlider, {
				// options
				cellAlign: 'center',
				contain: true,
				cellSelector: '.slide',
				pageDots: false,
				prevNextButtons: true,
				wrapAround: true,
				percentPosition: false,
				autoPlay: false
			});
		}

		if (this.screenSize.x < 768) {
			var mortgageSlider = document.getElementById('mortgage').getElementsByClassName('tiles')[0];
			window.flkty4 = new Flickity(mortgageSlider, {
				// options
				cellAlign: 'center',
				contain: true,
				cellSelector: '.tile',
				pageDots: false,
				prevNextButtons: true,
				wrapAround: true,
				percentPosition: false,
				autoPlay: false
			});
		}


		// GOOGLE MAP START
		// When the window has finished loading create our google map below
		google.maps.event.addDomListener(window, 'load', init);
		google.maps.event.addDomListener(window, 'load', initPlacement);
		var coordsCenterMap = {
			"lat": this.data.mapLat,
			"long": this.data.mapLong
		};
		var coordsCenterMapPlacement = {
			"lat": this.data.mapLat,
			"long": this.data.mapLong
		};
		var self = this;
		// Map in Contacts
		function init() {
			// Basic options for a simple Google Map
			// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
			var mapOptions = {
				// How zoomed in you want the map to start at (always required)
				zoom: self.data.mapZoom,
				scrollwheel: false,
				// The latitude and longitude to center the map (always required)
				center: new google.maps.LatLng(coordsCenterMap.lat, coordsCenterMap.long),
				// How you would like to style the map. 
				// This is where you would paste any style found on Snazzy Maps.
				styles: [{
					"featureType": "water",
					"stylers": [{
						"visibility": "on"
					}, {
						"color": "#b5cbe4"
					}]
				}, {
					"featureType": "landscape",
					"stylers": [{
						"color": "#efefef"
					}]
				}, {
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [{
						"color": "#83a5b0"
					}]
				}, {
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [{
						"color": "#bdcdd3"
					}]
				}, {
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [{
						"color": "#ffffff"
					}]
				}, {
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [{
						"color": "#e3eed3"
					}]
				}, {
					"featureType": "administrative",
					"stylers": [{
						"visibility": "on"
					}, {
						"lightness": 33
					}]
				}, {
					"featureType": "road"
				}, {
					"featureType": "poi.park",
					"elementType": "labels",
					"stylers": [{
						"visibility": "on"
					}, {
						"lightness": 20
					}]
				}, {}, {
					"featureType": "road",
					"stylers": [{
						"lightness": 20
					}]
				}]
			}
			// Get the HTML DOM element that will contain your map 
			// We are using a div with id="map" seen below in the <body>
			var mapElement = document.getElementById('map');
			// Create the Google Map using our element and options defined above
			var mapContacts = new google.maps.Map(mapElement, mapOptions);

			// Создание иконок для пинов
			var mainIcon = {
				url: 'img/pin.png',
				size: new google.maps.Size(60, 74),
			};

			// Let's also add a marker while we're at it
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(sets.mapLat, sets.mapLong),
				map: mapContacts,
				title: 'ЖК Любовь и голуби',
				icon: mainIcon
			});
		}

		function initPlacement() {
			// Basic options for a simple Google Map
			// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
			var mapOptions = {
				// How zoomed in you want the map to start at (always required)
				zoom: 15,
				scrollwheel: false,
				// The latitude and longitude to center the map (always required)
				center: new google.maps.LatLng(coordsCenterMapPlacement.lat, coordsCenterMapPlacement.long),
				// How you would like to style the map. 
				// This is where you would paste any style found on Snazzy Maps.
				styles: [{
					"featureType": "all",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#736c68"
					}]
				}, {
					"featureType": "landscape.man_made",
					"elementType": "geometry.fill",
					"stylers": [{
						"color": "#e7e6e5"
					}]
				}, {
					"featureType": "landscape.natural",
					"elementType": "all",
					"stylers": [{
						"visibility": "on"
					}, {
						"color": "#d4e4d3"
					}]
				}, {
					"featureType": "poi",
					"elementType": "geometry.fill",
					"stylers": [{
						"visibility": "on"
					}, {
						"color": "#f5f5f5"
					}]
				}, {
					"featureType": "poi.park",
					"elementType": "geometry.fill",
					"stylers": [{
						"color": "#d4e4d3"
					}]
				}, {
					"featureType": "road",
					"elementType": "geometry.fill",
					"stylers": [{
						"color": "#f5f5f5"
					}]
				}, {
					"featureType": "road",
					"elementType": "geometry.stroke",
					"stylers": [{
						"color": "#e7e6e5"
					}, {
						"gamma": "0.65"
					}, {
						"lightness": "0"
					}]
				}, {
					"featureType": "transit",
					"elementType": "labels.text",
					"stylers": [{
						"visibility": "off"
					}]
				}, {
					"featureType": "water",
					"elementType": "all",
					"stylers": [{
						"color": "#aad5df"
					}]
				}]
			}
			// Get the HTML DOM element that will contain your map 
			// We are using a div with id="map" seen below in the <body>
			var mapElement = document.getElementById('map-placement');
			// Create the Google Map using our element and options defined above
			var map = new google.maps.Map(mapElement, mapOptions);

			// Создание иконок для пинов
			var mainIcon = {
				url: 'img/pin.png',
				size: new google.maps.Size(60, 74),
			};
			var metroIcon = {
				url: 'img/icon-metro.png',
				size: new google.maps.Size(60, 74),
			};
			var bankIcon = {
				url: 'img/icon-bank.png',
				size: new google.maps.Size(40, 40),
			};
			var gosIcon = {
				url: 'img/icon-gos.png',
				size: new google.maps.Size(40, 40),
			};
			var shopIcon = {
				url: 'img/icon-shop.png',
				size: new google.maps.Size(40, 40),
			};
			var shcoolIcon = {
				url: 'img/icon-shcool.png',
				size: new google.maps.Size(40, 40),
			};
			var healthIcon = {
				url: 'img/icon-health.png',
				size: new google.maps.Size(40, 40),
			};
			var sportIcon = {
				url: 'img/icon-sport.png',
				size: new google.maps.Size(40, 40),
			};
			var parksIcon = {
				url: 'img/icon-parks.png',
				size: new google.maps.Size(40, 40),
			};

			// var kafeIcon = {
			// 	url: 'img/icon-kafe.png',
			// 	size: new google.maps.Size(40, 40),
			// };

			// var restoraneIcon = {
			// 	url: 'img/icon-restorane.png',
			// 	size: new google.maps.Size(40, 40),
			// };

			// var shcoolIcon = {
			// 	url: 'img/icon-shcool.png',
			// 	size: new google.maps.Size(40, 40),
			// };

			// var sokolnikiIcon = {
			// 	url: 'img/icon-sokolniki.png',
			// 	size: new google.maps.Size(40, 40),
			// };

			// var supermarketIcon = {
			// 	url: 'img/icon-supermarket.png',
			// 	size: new google.maps.Size(40, 40),
			// };

			// var sushiIcon = {
			// 	url: 'img/icon-sushi.png',
			// 	size: new google.maps.Size(40, 40),
			// };



			// Let's also add a marker while we're at it
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(55.863835, 37.535223),
				map: map,
				title: 'ЖК Любовь и голуби',
				icon: mainIcon
			});

			// Второстепенные маркеры
			var secondMarkers = new Array();
			var secondMarkersLocations = [
				['Метро', '', 55.867161, 37.546998, metroIcon],
				['Кредит Европа Банк', '', 55.864269, 37.545182, bankIcon],
				['Сбербанк', '', 55.866853, 37.540385, bankIcon],
				['Участковый Пункт Полиции', '', 55.865243, 37.528099, gosIcon],
				['Отделение межрайонного отдела ГИБДД технического надзора и регистрационно-экзаменационной работы № 2 ГУ МВД России', '', 55.862382, 37.535228, gosIcon],
				['Billa', '', 55.865938, 37.534640, shopIcon],
				['Дикси', '', 55.865808, 37.527599, shopIcon],
				['Детский сад №2665', '', 55.865869, 37.529917, shcoolIcon],
				['Школа № 186', '', 55.864108, 37.540269, shcoolIcon],
				['ЕвроМед А, медицинский центр', '', 55.867752, 37.531543, healthIcon],
				['Клиника Доктор Рядом', '', 55.869462, 37.532788, healthIcon],
				['Детская областная больница', '', 55.868685, 37.523812, healthIcon],
				['ФитКлаб', '', 55.862744, 37.540819, sportIcon],
				['Открытый каток', '', 55.876629, 37.532878, sportIcon],
				['Парк им. Святослава Фёдорова', '', 55.863086, 37.552378, parksIcon],
				['Грачёвский парк', '', 55.866952, 37.505645, parksIcon],
				// ['Лицей №1502 при МЭИ', 'ул. 2-я Бухвостова, д. 6', 55.798247, 37.707498, shcoolIcon],
				// ['Гимназия №1799 «Экополис»', 'ул. Знаменская, д. 12/4', 55.801695, 37.720419, shcoolIcon],
				// ['Гимназия №1404 «Гамма»', 'ул. Большая Оленья, д. 3', 55.803324, 37.689310, shcoolIcon],
				// ['Храм Святителя Николая в Ермолино', 'Ленинский р-н', 55.560672, 37.684806, kafeIcon],
				// ['Храм Великомученика Георгия Победоносца', 'Советский пр-д, 2, строен. 1', 55.554251, 37.708055, kafeIcon]
			];
			var secondMarkersBaloon = new google.maps.InfoWindow();
			var secondMarker, i;

			for (i = 0; i < secondMarkersLocations.length; i++) {
				secondMarker = new google.maps.Marker({
					position: new google.maps.LatLng(secondMarkersLocations[i][2], secondMarkersLocations[i][3]),
					map: map,
					icon: secondMarkersLocations[i][4]
				});

				secondMarkers.push(secondMarker);

				google.maps.event.addListener(secondMarker, 'click', (function(secondMarker, i) {
					return function() {
						secondMarkersBaloon.setContent('<b>' + secondMarkersLocations[i][0] + '</b><br>' + secondMarkersLocations[i][1]);
						secondMarkersBaloon.open(map, secondMarker);
					}
				})(secondMarker, i));
			}
		}
		// GOOGLE MAP END



		// Анимация валидации номера по мере его ввода
		// $('form input[type="tel"]').keyup(function() {
		// 	var vInput = this.value;
		// 	$('.circle-loader').addClass('checking');
		// 	if (vInput.indexOf("_") != -1) {
		// 		$('.checkmark').removeClass('checked');
		// 		$('.circle-loader').removeClass('load-complete');
		// 		$('.circle-loader').removeClass('wrong');
		// 		$('form .btn').removeClass('right');
		// 	} else {
		// 		var checkResult = phoneNumberParser(vInput);
		// 		if (checkResult['parsingResult'] == 'error' || checkResult['isPossibleNumber'] == false || checkResult['isValidNumber'] == false || checkResult['eFormat'] == 'invalid') {
		// 			$('.circle-loader').addClass('load-complete');
		// 			$('.checkmark').removeClass('checked');
		// 			$('.circle-loader').addClass('wrong');
		// 			$('form .btn').removeClass('right');
		// 			$('.circle-loader.wrong').click(function() {
		// 				$(this).parent().find('input').val('');
		// 				document.activeElement.blur();
		// 				$(this).parent().find('input').focus();
		// 			});
		// 		} else {
		// 			$('.circle-loader').addClass('load-complete');
		// 			$('.checkmark').addClass('checked');
		// 			$('.circle-loader').removeClass('wrong');
		// 			$('form .btn').addClass('right');
		// 			$("input[name='phone']").removeClass("redput");
		// 		}
		// 	}
		// });
		// $('form .phone').focusout(function() {
		// 	$('.circle-loader').removeClass('checking');
		// });
	}
})