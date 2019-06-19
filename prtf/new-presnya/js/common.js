$(function() {

	//Chrome Smooth Scroll
	// try {
	// 	$.browserSelector();
	// 	if($("html").hasClass("chrome")) {
	// 		$.smoothScroll();
	// 	}
	// } catch(err) {
	// 	console.log(err);
	// };

	// Плавный скролл
	// $.scrollSpeed(100, 900);
	//jQuery.scrollSpeed(100, 800, 'easeOutCubic');


	// Плавный скролл в меню и лого
	smoothScrollOffset();

	$('nav a').smoothScroll({
		offset: scrollOffset,
		afterScroll: function() {
			$(this).blur();
			closeMenu();
		},
	});

	$('.logo a').smoothScroll({
		offset: scrollOffset,
		afterScroll: function() {
			$(this).blur();
		},
	});

	// Main slider
	if ($(window).width() < 1023) {
		$('#main-slider').fotorama({
			autoplay: 7000,
			arrows: false,
			transition: 'crossfade',
			width: '100%',
			height: '550px',
			loop: true,
			transitionduration: 700,
		});
	} else {
		$('#main-slider').fotorama({
			autoplay: 7000,
			arrows: false,
			transition: 'crossfade',
			width: '100%',
			height: '600px',
			loop: true,
			transitionduration: 700,
		});
	}

	// GOOGLE MAP START
	// When the window has finished loading create our google map below
	google.maps.event.addDomListener(window, 'load', init);

	if ($(window).width() < 768) {
		var coordsCenterMap = {
			"lat": "55.760321",
			"long": "37.517941"
		};
	} else if ($(window).width() < 1023) {
		var coordsCenterMap = {
			"lat": "55.758321",
			"long": "37.525941"
		};
	} else {
		var coordsCenterMap = {
			"lat": "55.758321",
			"long": "37.535941"
		};
	};

	function init() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
				// How zoomed in you want the map to start at (always required)
				zoom: 15,
				scrollwheel: false,
				// The latitude and longitude to center the map (always required)
				center: new google.maps.LatLng(coordsCenterMap.lat, coordsCenterMap.long),
				// How you would like to style the map. 
				// This is where you would paste any style found on Snazzy Maps.
				styles: [{
					"featureType": "all",
					"elementType": "all",
					"stylers": [{
						"hue": "#d1c9c2"
					}, {
						"saturation": "-33"
					}, {
						"lightness": "10"
					}]
				}, {
					"featureType": "administrative.locality",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#d1c9c2"
					}]
				}, {
					"featureType": "landscape.natural.terrain",
					"elementType": "geometry",
					"stylers": [{
						"visibility": "simplified"
					}]
				}, {
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [{
						"visibility": "simplified"
					}]
				}, {
					"featureType": "road.highway",
					"elementType": "labels.text",
					"stylers": [{
						"visibility": "on"
					}]
				}, {
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [{
						"visibility": "simplified"
					}]
				}, {
					"featureType": "transit.line",
					"elementType": "all",
					"stylers": [{
						"visibility": "off"
					}]
				}, {
					"featureType": "water",
					"elementType": "geometry.fill",
					"stylers": [{
						"saturation": "-23"
					}, {
						"gamma": "2.01"
					}, {
						"color": "#d1c9c2"
					}]
				}, {
					"featureType": "water",
					"elementType": "geometry.stroke",
					"stylers": [{
						"saturation": "-14"
					}]
				}]
			}
			// Get the HTML DOM element that will contain your map 
			// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('map');
		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);

		// Создание иконок для пинов
		var mainIcon = {
			url: 'img/pin.png',
			size: new google.maps.Size(60, 60),
		};

		var busIcon = {
			url: 'img/pin_bus.png',
			size: new google.maps.Size(60, 60),
		};

		var poolIcon = {
			url: 'img/pin_pool.png',
			size: new google.maps.Size(60, 60),
		};

		var fitnessIcon = {
			url: 'img/pin_fitness.png',
			size: new google.maps.Size(60, 60),
		};

		var parkIcon = {
			url: 'img/pin_park.png',
			size: new google.maps.Size(60, 60),
		};

		var shopIcon = {
			url: 'img/pin_shop.png',
			size: new google.maps.Size(60, 60),
		};

		var trainIcon = {
			url: 'img/pin_train.png',
			size: new google.maps.Size(60, 60),
		};

		var schoolIcon = {
			url: 'img/pin_school.png',
			size: new google.maps.Size(60, 60),
		};

		var kindergartenIcon = {
			url: 'img/pin_kindergarten.png',
			size: new google.maps.Size(60, 60),
		};

		// Let's also add a marker while we're at it
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(55.760321, 37.517941),
			map: map,
			title: 'ЖК "Новая Пресня"',
			icon: mainIcon
		});

		// Второстепенные маркеры
		var secondMarkers = new Array();
		var secondMarkersLocations = [
			['Университет им. Менделеева', 'Автобусная остановка', 55.760780, 37.519947, busIcon],
			['Университет им. Менделеева', 'Автобусная остановка', 55.760683, 37.520173, busIcon],
			['Бассейн', 'ЖК "Сердце столицы"', 55.761399, 37.513039, poolIcon],
			['World Class', 'Фитнес-центр', 55.751744, 37.532711, fitnessIcon],
			['Fit-n-Go', 'Фитнес-центр', 55.749981, 37.537861, fitnessIcon],
			['Красная Пресня', 'Парк', 55.753741, 37.552048, parkIcon],
			['Некрасовка', 'Парк', 55.747046, 37.539970, parkIcon],
			['Пятёрочка', 'Магазин', 55.757104, 37.518995, shopIcon],
			['Дикси', 'Магазин', 55.759024, 37.521248, shopIcon],
			['Дикси', 'Магазин', 55.754230, 37.533908, shopIcon],
			['Пятёрочка', 'Магазин', 55.761789, 37.537384, shopIcon],
			['Дикси', 'Магазин', 55.757744, 37.538886, shopIcon],
			['Тестовская', 'ЖД станция', 55.754329, 37.531507, trainIcon],
			['ГБОУ Романовская школа', 'Школа', 55.751137, 37.523751, schoolIcon],
			['Детский сад', '№1929', 55.758602, 37.520366, kindergartenIcon],
			['Детский сад', '№809', 55.756319, 37.520723, kindergartenIcon],
			['Детский сад', '№2009', 55.752629, 37.522177, kindergartenIcon]
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
	};
	// GOOGLE MAP END

	// Галерея фотографий
	$('#gallery .gallery-row').flickity({
		cellAlign: 'center',
		wrapAround: true,
		pageDots: false,
		prevNextButtons: true
	});

	$('#gallery .gallery-row .img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><svg class="mfp-prevent-close" viewBox="0 0 100 100"><path class="mfp-prevent-close" d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg></button>',
			tPrev: 'Назад', // title for left button
			tNext: 'Вперёд', // title for right button
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>' // markup of counter
		},
		tClose: 'Закрыть (Esc)',
		callbacks: {
			open: function() {
				document.body.style.overflow = 'hidden';
				document.ontouchmove = function(e) {
					e.preventDefault();
				};
			},
			close: function() {
				document.body.style.overflow = 'inherit';
				document.ontouchmove = function(e) {
					return true;
				}
			}
		}
	});

	// Логика отображения планировок
	// $('#plans .headplan .room').hover(function(){
	// 	var roomType = $(this).attr('data-room');
	// 	$('#plans .headplan .room').each(function(){
	// 		$(this).removeClass('active');
	// 		if ($(this).hasClass(roomType)){
	// 			$(this).addClass('selected');
	// 		}else{
	// 			$(this).removeClass('selected');
	// 		}
	// 	});
	// 	$(this).addClass('active');
	// 	$('#plans .aside .picker li').removeClass('active');
	// 	$('#plans .aside .picker li').each(function(){
	// 		if($(this).hasClass(roomType)){
	// 			$(this).addClass('active');
	// 		}
	// 	});
	// });
	$('#plans .headplans .floor-picker span').click(function() {
		$('#plans .headplans .floor-picker span').removeClass('active');
		var floor = $(this).attr('data-floor');
		$(this).addClass('active');
		$('#plans .headplans .headplan').each(function() {
			if ($(this).attr('data-floor') == floor) {
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});
		$('#plans .room-plans').each(function() {
			if ($(this).attr('data-floor') == floor) {
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});
	});

	// Popup
	$('a[href="#popup"]').magnificPopup({
		key: 'orderCall',
		tClose: 'Закрыть (Esc)',
		callbacks: {
			beforeOpen: function() {
				$('#popup').addClass('flipInY animated');
			},
			open: function() {
				//document.body.style.overflow = 'hidden';
				document.ontouchmove = function(e) {
						e.preventDefault();
					}
					//Первая часть составной цели
				// yaCounter45594519.reachGoal('lead');
			},
			beforeClose: function() {
				$('#popup').removeClass('flipInY animated');
			},
			close: function() {
				//document.body.style.overflow = 'inherit';
				document.ontouchmove = function(e) {
					return true;
				}
			}
		}
	});
	$('#popup .tabs .tab').click(function() {
		$('#popup .tabs .tab').removeClass('active');
		$(this).addClass('active');
	});
	$('#popup input[type="tel"]').mask('+7 (999) 999-99-99', {
		placeholder: "+7 (000) 000-00-00"
	});

	//Отправка формы
	$('form').on('submit', function(e) {
		$form = $(this);
		e.preventDefault();

		//var checkForm = checkForm($form);
		var checkForm1 = checkForm($form.get(0));
		if (checkForm1['check'] != false) {

			//Вторая часть составной цели
			// yaCounter45594519.reachGoal('final_lead');
			// Цель Google Analytics
			// ga('send', 'event', 'form', 'send');

			var phone = checkForm1['number'];
			if ($('input[name="phone"]').length > 0) {
				var name = $('input[name="name"]', $form).val();
			};
			//console.log('phone to cbh: ' + phone);

			/*try {    
		      CBHCore.api.sendCall({phone: phone, call_asap: 1});
		    } catch (e) {    
		      CBHCore.helpers.logError('CATCH JS ERROR: ' + e.name + '; ' + e.message);
		    }*/

			var fd = new FormData();
			fd.append('phone', phone);
			fd.append('name', name);
			fd.append('call_value', window.call_value);

			$.ajax({
				type: "POST",
				url: "send.php",
				data: fd,
				processData: false,
				contentType: false,
				dataType: "json",
				complete: function(msg) {
					//Закроем предыдущий popup во избежание конфликта анимаций
					$.magnificPopup.close();
					//Откроем следующий popup с благодарностью
					thankYouMessage();
				}
			});
		}
		return false;
	});

	// Parallax Effects & animations
	//1st block
	var controller = new ScrollMagic.Controller();
	var tween = new TimelineMax()
		.add([
			TweenMax.fromTo("#main-content .border-block", 1, {
				scale: 1,
				autoAlpha: 1,
				bottom: -100
			}, {
				bottom: 100,
				ease: Linear.easeNone
			}),
		]);
	// build scene
	var scene = new ScrollMagic.Scene({
			triggerElement: "#main-content",
			duration: $(window).height()
		})
		.setTween(tween)
		//.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	// Balloon
	var controller = new ScrollMagic.Controller();
	var tween = new TimelineMax()
		.add([
			TweenMax.fromTo("#main-content .main-text .ballon", 1, {
				scale: 1,
				autoAlpha: 1,
				bottom: -200
			}, {
				bottom: 300,
				ease: Linear.easeNone
			}),
		]);
	// build scene
	var scene = new ScrollMagic.Scene({
			triggerElement: "#main-content .main-text p",
			duration: $(window).height()
		})
		.setTween(tween)
		//.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	// Presentation
	var controller = new ScrollMagic.Controller();
	var tween = new TimelineMax()
		.add([
			TweenMax.fromTo("#presentation .presentation-img", 1, {
				scale: 1,
				autoAlpha: 1,
				bottom: -50
			}, {
				bottom: 200,
				ease: Linear.easeNone
			}),
		]);
	// build scene
	var scene = new ScrollMagic.Scene({
			triggerElement: "#presentation",
			duration: $(window).height()
		})
		.setTween(tween)
		//.addIndicators() // add indicators (requires plugin)
		.addTo(controller);

	// Mortgage
	var controller = new ScrollMagic.Controller();
	var tween = new TimelineMax()
		.add([
			TweenMax.fromTo("#mortgage .border-block", 1, {
				scale: 1,
				autoAlpha: 1,
				bottom: -150
			}, {
				bottom: 200,
				ease: Linear.easeNone
			}),
		]);
	// build scene
	var scene = new ScrollMagic.Scene({
			triggerElement: "#mortgage",
			duration: $(window).height()
		})
		.setTween(tween)
		//.addIndicators() // add indicators (requires plugin)
		.addTo(controller);

	//Mortgage Banks
	// var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 100}});
	// 	new ScrollMagic.Scene({triggerElement: "#mortgage .border-block h2"})
	// 					.setClassToggle("#mortgage .border-block .banks-row .bank", "bounceInLeft") // add class toggle
	// 					//.addIndicators() // add indicators (requires plugin)
	// 					.addTo(controller);



	// Мобильное меню
	$('.burger').click(function() {
		if (!$(this).hasClass('open')) {
			openMenu();
		} else {
			closeMenu();
		};
	});


}); //End of onLoad jQuery staff



// Функция проверки номера
function checkForm(form1) {
	var $form = $(form1);
	var checker = true;

	var phone = $("input[name='phone']", $form).val();
	//console.log(phone);
	if (phone.substring(0, 1) != '+') {
		phone = '+7' + phone;
	}

	//console.log(phone);

	var checkResult = phoneNumberParser(phone);

	console.log(checkResult['parsingResult']);
	//console.log(checkResult['errorDescription']);
	//console.log(checkResult['isPossibleNumber']);
	//console.log(checkResult['isValidNumber']);
	//console.log(checkResult['eFormat']);


	if (checkResult['parsingResult'] == 'error' || checkResult['isPossibleNumber'] == false || checkResult['isValidNumber'] == false || checkResult['eFormat'] == 'invalid') {
		$form.find("input[name='phone']").addClass("redput");
		$form.find("input[name='phone']").val("");
		$form.find("input[name='phone']").attr("placeholder", "Укажите Ваш телефон");
		$form.find("input[name='phone']").closest('#popup').removeClass("flipInY");
		$form.find("input[name='phone']").closest('#popup').addClass("shake");
		setTimeout(function() {
			$form.find("input[name='phone']").closest('#popup').removeClass("shake");
		}, 3000);
		checker = false;
		var errorData = new FormData();
		errorData.append('inputtedData', phone);
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
		$form.find("input[name='phone']").removeClass("redput");
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


function thankYouMessage() {
	var d = new Date();
	var hours = d.getHours();
	var timeWorkFrom = 10;
	var timeWorkTo = 19;
	if ((hours >= timeWorkFrom) & (hours <= (timeWorkTo - 1))) {
		var popupID = '#tnx-popup';
	} else {
		var popupID = '#tnx-popup-no-one-home';
	};
	$.magnificPopup.open({
		items: {
			src: popupID, // can be a HTML string, jQuery object, or CSS selector
			type: 'inline'
		},
		key: 'thankYouMessage',
		callbacks: {
			beforeOpen: function() {
				/*setTimeout(function () {
					$('.success').addClass('bounceIn animated');	},1500
				);*/
			},
			open: function() {
				document.body.style.overflow = 'hidden';
				document.ontouchmove = function(e) {
					e.preventDefault();
				};
				setTimeout(function() {
					$('.popup .success').addClass('bounceIn animated');
				}, 1500);
			},
			close: function() {
				document.body.style.overflow = 'inherit';
				document.ontouchmove = function(e) {
					return true;
				}
				$('.success').removeClass('bounceIn animated');
			}
		}
	});

};


function smoothScrollOffset() {
	if ($(window).width() < 768) {
		window.scrollOffset = -100;
	} else {
		window.scrollOffset = -90;
	};
};


function openMenu() {

	$('div.burger').addClass('open');
	$('nav').addClass('open');
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

};

function closeMenu() {

	$('div.burger').removeClass('open');
	$('nav').removeClass('open');
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
};