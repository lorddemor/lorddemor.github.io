// Маска ввода телефона
Vue.directive('input-mask', {
	bind: function(el, obj, vModel) {
		$(el).inputmask();
	}
});

new Vue({
	el: '#app',
	data: {
		sets: {
			geo: ['Москва', 'Санкт-Петербург'],
			counterStart: 357893
		},
		pickedCity: 'Москва',
		showGeo: false,
		showMenu: false,
		inputtedPhone: '',
		placeholderPhone: '+7 (___) ___-__-__',
		inputtedName: '',
		phoneSended: 'not',
		videoIsPlaying: false,
		footerMobileMenu: true
	},
	methods: {
		changeGeo: function(city) {
			this.pickedCity = city;
			this.showGeoPicker();
		},
		showGeoPicker: function() {
			this.showGeo = !this.showGeo;
		},
		showHiddenMenu: function() {
			this.showMenu = !this.showMenu;
		},
		playVideo: function(videoId) {
			var video = document.getElementById(videoId);
			this.videoIsPlaying = true;
			video.play();
			var self = this;
			video.addEventListener('ended', function(e) {
				self.videoIsPlaying = false;
			});
		},
		toggleFooterMobileMenu: function() {
			this.footerMobileMenu = !this.footerMobileMenu;
		},
		sendForm: function() {
			//Обработчик отправки формы
			$('.circle-loader').removeClass('checking');

			var phoneCheck = this.checkForm(this.inputtedPhone);

			if (phoneCheck.check != false) {
				this.placeholderPhone = '+7 (___) ___-__-__';
				this.phoneSended = 'sending';
				var phone = phoneCheck.number;
				console.log('Отправка формы: ' + this.inputtedPhone + ' ' + this.inputtedName);
			} else {
				this.placeholderPhone = 'Укажите Ваш телефон';
				this.inputtedPhone = '';
				console.log('Неверный ввод');
			}
		},
		checkForm: function(phone) {
			// Валидация введённого номера телефона
			var checker = true;

			if (phone.substring(0, 1) != '+') {
				phone = '+7' + phone;
			}

			var checkResult = phoneNumberParser(phone);

			if (checkResult.parsingResult == 'error' || checkResult.isPossibleNumber == false || checkResult.isValidNumber == false || checkResult.eFormat == 'invalid') {
				checker = false;
			}

			if (checker != true) {
				return {
					'check': false
				};
			} else {
				return {
					'check': true,
					'number': checkResult.eFormat
				};
			}
		}
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
				if (checkResult.parsingResult == 'error' || checkResult.isPossibleNumber == false || checkResult.isValidNumber == false || checkResult.eFormat == 'invalid') {
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

		// Счётчик
		var clock = $('#clock').FlipClock(this.sets.counterStart, {
			clockFace: 'Counter'
		});
		setTimeout(function() {
			setInterval(function() {
				clock.increment();
			}, 3000);
		});

		if (document.body.clientWidth < 768) {
			this.footerMobileMenu = false;

			$('#personal-insole .tiles-black').flickity({
				// options
				cellAlign: 'left',
				contain: true,
				// cellSelector: 'tile',
				pageDots: false,
				prevNextButtons: false,
				wrapAround: false,
				percentPosition: false
			});

			$('#personal-insole .tiles-white').flickity({
				// options
				cellAlign: 'left',
				contain: true,
				// cellSelector: 'tile',
				pageDots: false,
				prevNextButtons: false,
				wrapAround: false,
				percentPosition: false
			});


		}
	}
});