// Функция преобразования номера в формат +7 (000) 000-00-00
function phoneLocal(phone) {
	return phone.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3-$4-$5');
}

// Компонент шаблона вставки телефоннного номера везде (кастомный тег <my-phone>)
Vue.component('my-phone', {
	template: '<span class="phone call_phone"><a href="tel:' + sets.phone + '" title="Позвонить по ' + phoneLocal(sets.phone) + '">' + phoneLocal(sets.phone) + '</a></span>'
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
		placeholderPhone: '+7 (___) ___-__-__',
		popupIsOpen: false,
		workingHours: false,
		tabletBg: ''
	},
	methods: {
		openPopup: function(type) {
			this.ios();
			this.popupIsOpen = true;
			document.body.style.overflow = 'hidden';
			document.ontouchmove = function(e) {
				e.preventDefault();
			};
			if (type !== 'agreement') {
				//Цель отправки заявки
				if (sets.ya_metrika !== 0 && this.phoneSended === 'not') {
					// Fix для режима инкогнито Mozilla
					if (window['yaCounter' + this.data.ya_metrika] !== undefined) {
						window['yaCounter' + sets.ya_metrika].reachGoal('lead');
					}
				}
			}
			var popupBody = document.getElementById('popup');
			var self = this;
			popupBody.addEventListener('mouseup', function(e) {
				if (e.target === popupBody) {
					self.closePopup();
				}
			});
		},
		closePopup: function() {
			this.popupIsOpen = false;
			var popupBody = document.getElementById('popup');
			document.body.style.overflow = 'inherit';
			document.ontouchmove = function(e) {
				return true;
			};
			var el = document.getElementsByTagName('html')[0];
			el.classList.remove('ios');
			el = document.getElementsByTagName('body')[0];
			el.classList.remove('ios');
			this.phoneSended = 'not';
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
		// Добавляем пробелы в разряды чисел
		localeNumber: function(number) {
			output = Number(number);
			return output.toLocaleString();
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
		//Скрипт плавного перехода к нужному блоку
		scrollTo: function(link) {
			window.flkty1.selectCell('#' + link, false, true);
			// Снимем focus с кликнутого элемента
			document.activeElement.blur();
			this.closeMenu();
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
		maximumOf: function() {
			var max = Number(arguments[0]);
			for (var i = 0; i < arguments.length; i++) {
				if (arguments[i] > max) {
					max = arguments[i];
				}
			}
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
		},
		//Метод отправки формы
		sendForm: function() {
			$('.circle-loader').removeClass('checking');

			//console.log(this.inputtedPhone);


			var phoneCheck = this.checkForm(this.inputtedPhone);
			//console.log(phoneCheck);

			if (phoneCheck['check'] != false) {
				this.placeholderPhone = '+7 (___) ___-__-__';
				this.phoneSended = 'sending';
				//Цель отправки заявки
				if (this.data.ya_metrika != 0) {
					// Fix для режима инкогнито Mozilla
					if (window['yaCounter' + this.data.ya_metrika] !== undefined) {
						window['yaCounter' + this.data.ya_metrika].reachGoal('final_lead');
					}
				}

				ga('send', 'event', 'form', 'send');

				var phone = phoneCheck['number'];
				// if ($('input[name="phone"]').length > 0) {
				// 	var name = $('input[name="name"]', $form).val();
				// };
				//console.log('phone to cbh: ' + phone);

				// try {    
				//      CBHCore.api.sendCall({phone: phone, call_asap: 1});
				//    } catch (e) {    
				//      CBHCore.helpers.logError('CATCH JS ERROR: ' + e.name + '; ' + e.message);
				//    }

				var fd = new FormData();
				fd.append('phone', phoneCheck['number']);
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
		minPrice: function() {
			var prices = [];
			for (var i = 0; i < this.data.models.length; i++) {
				prices.push(this.minimum(this.data.models[i].cars, 'price'));
			}
			var min = prices[0];
			for (i = 1; i < prices.length; ++i) {
				if (prices[i] < min) min = prices[i];
			}
			return min;
		},
		maxBenefit: function() {
			var benefits = [];
			for (var i = 0; i < this.data.models.length; i++) {
				benefits.push(this.maximum(this.data.models[i].cars, 'benefit'));
			}
			var max = benefits[0];
			for (i = 1; i < benefits.length; ++i) {
				if (benefits[i] > max) max = benefits[i];
			}
			return max;
		}
	},
	created: function() {
		// Узнаем текущий час дня для текста с благодарностью
		var h = new Date().getHours();
		if (h >= this.data.time_work_from && h <= this.data.time_work_to) {
			this.workingHours = true;
		}

		if (this.screenSize().x > 767) {
			if (this.screenSize().x > 991) {
				this.tabletBg = '-t-h';
			} else {
				this.tabletBg = '-t-v';
			}
		}
		var self = this;
		window.addEventListener("resize", function() {
			if (self.screenSize().x > 767) {
				if (self.screenSize().x > 991) {
					self.tabletBg = '-t-h';
				} else {
					self.tabletBg = '-t-v';
				}
			}
		});
	},
	mounted: function() {
		// Анимация валидации номера по мере его ввода
		$('form input[type="tel"]').keyup(function() {
			var vInput = this.value;
			$('.circle-loader').addClass('checking');
			if (vInput.indexOf("_") != -1) {
				$('.checkmark').removeClass('checked');
				$('.circle-loader').removeClass('load-complete');
				$('.circle-loader').removeClass('wrong');
				$('form .btn').removeClass('right');
			} else {
				var checkResult = phoneNumberParser(vInput);
				if (checkResult['parsingResult'] == 'error' || checkResult['isPossibleNumber'] == false || checkResult['isValidNumber'] == false || checkResult['eFormat'] == 'invalid') {
					$('.circle-loader').addClass('load-complete');
					$('.checkmark').removeClass('checked');
					$('.circle-loader').addClass('wrong');
					$('form .btn').removeClass('right');
					$('.circle-loader.wrong').click(function() {
						$(this).parent().find('input').val('');
						document.activeElement.blur();
						$(this).parent().find('input').focus();
					});
				} else {
					$('.circle-loader').addClass('load-complete');
					$('.checkmark').addClass('checked');
					$('.circle-loader').removeClass('wrong');
					$('form .btn').addClass('right');
					$("input[name='phone']").removeClass("redput");
				}
			}
		});
		$('form .phone').focusout(function() {
			$('.circle-loader').removeClass('checking');
		});

		//Галереи
		var g1 = document.getElementsByTagName('main')[0];
		window.flkty1 = new Flickity(g1, {
			// options
			cellAlign: 'left',
			contain: true,
			cellSelector: 'section',
			pageDots: false,
			prevNextButtons: true,
			wrapAround: true,
			percentPosition: false
		});

		// START TAKING GET-PARAMS (Активация стартового экрана в зависимости от ссылки)
		var strGET = window.location.search.replace('?', '');
		var params = window
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

		// Автоматизируем создание якорных ссылок через GET-запрос формата /?parameter=value
		if (params['model'] != undefined) {
			for (var i = 0; i < this.data.models.length; i++) {
				if (params['model'] == this.data.models[i].id) {
					this.scrollTo(params['model']);
					break;
				}
			}
		}
		// END TAKING GET-PARAMS
	}
})

$(function() {

	//$('body').fadeOut();

});