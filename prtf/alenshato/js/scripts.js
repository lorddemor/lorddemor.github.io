document.addEventListener('DOMContentLoaded', function(){
	// Fixed Header
	let $header = document.getElementById('header');

	document.addEventListener('scroll', function () {
		if (window.pageYOffset > 100) {
			$header.classList.add('header--fixed');
		} else {
			if (!document.querySelector('html').classList.contains('lock-scroll') &&
				!document.querySelector('main').classList.contains('inner-page'))
					$header.classList.remove('header--fixed');
		}
	});

	// Main menu
	let $mainMenu = document.getElementsByClassName('main-menu')[0],
		$mainMenuHeaderBtn = document.getElementsByClassName('header__menu-btn')[0],
		$mainMenuCloseBtn = document.getElementsByClassName('main-menu__close')[0],
		$mainMenuShadow = document.getElementsByClassName('main-menu__shadow')[0],
		mainMenuListener = function(e) { e.preventDefault(); };

	$mainMenuHeaderBtn.addEventListener('click', function () {
		$mainMenu.classList.add('main-menu--open');

		document.addEventListener('touchmove', mainMenuListener, { passive: false });
	});
	$mainMenuCloseBtn.addEventListener('click', function () {
		$mainMenu.classList.remove('main-menu--open');

		document.removeEventListener('touchmove', mainMenuListener, false);
	});
	$mainMenuShadow.addEventListener('click', function () {
		$mainMenu.classList.remove('main-menu--open');

		document.removeEventListener('touchmove', mainMenuListener, false);
	});

	//Scroll to Block
	let scrollLinks = document.querySelectorAll('[data-scroll-to]');

	for (let i = 0; i < scrollLinks.length; i++) {
		scrollLinks[i].addEventListener('click', function (e) {
			e.preventDefault();
			$mainMenu.classList.remove('main-menu--open');

			document.removeEventListener('touchmove', mainMenuListener, false);

			$([document.documentElement, document.body]).animate({
				scrollTop: $('#' + this.dataset.scrollTo).offset().top
			}, 2000);
		});
	}

	// First Screen Animation
	if (document.getElementById('main-offer')) {
		let $mainOffer = document.getElementsByClassName('main-offer')[0],
			$mainOfferLinkLeft = document.getElementsByClassName('main-offer__link--left')[0],
			$mainOfferLinkRight = document.getElementsByClassName('main-offer__link--right')[0],
			$cursor = document.getElementsByClassName('main-offer__cursor')[0];;

		setTimeout(function () {
			$header.classList.add('header--animated');
			$mainOffer.classList.add('main-offer--animated');
		}, 2000);

		$mainOfferLinkLeft.addEventListener('mouseenter', function () {
			$mainOffer.classList.add('main-offer__hover--left');
		});
		$mainOfferLinkLeft.addEventListener('mouseleave', function () {
			$mainOffer.classList.remove('main-offer__hover--left');
			$cursor.classList.remove('main-offer__cursor--visible', 'main-offer__cursor--left');
		});

		$mainOfferLinkRight.addEventListener('mouseenter', function () {
			$mainOffer.classList.add('main-offer__hover--right');
		});
		$mainOfferLinkRight.addEventListener('mouseleave', function () {
			$mainOffer.classList.remove('main-offer__hover--right');
			$cursor.classList.remove('main-offer__cursor--visible');
		});

		$mainOfferLinkLeft.addEventListener("mousemove", function (e) {
			$cursor.classList.add('main-offer__cursor--visible', 'main-offer__cursor--left');
			$cursor.style.left = (e.pageX - 50) + 'px';
			$cursor.style.top = (e.pageY - 50) + 'px';
		}, false);

		$mainOfferLinkRight.addEventListener("mousemove", function (e) {
			$cursor.classList.add('main-offer__cursor--visible');
			$cursor.style.left = (e.pageX - 50) + 'px';
			$cursor.style.top = (e.pageY - 50) + 'px';
		}, false);
	}

	// Benefits Slider
	let $benefitsSlider = $('.benefits__slider'),
		$benefitsCurrent = $('.benefits__current'),
		$benefitsAll = $('.benefits__all');

	$benefitsSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		let i = (currentSlide ? currentSlide : 0) + 1;
		$benefitsCurrent.text(i < 10 ? '0' + i : i);
		$benefitsAll.text(slick.slideCount < 10 ? '0' + slick.slideCount : slick.slideCount)
	});

	$benefitsSlider.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: false,
		arrows: true,
		dots: false,
		fade: true,
		speed: 900,
		touchThreshold: 100,
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [{
			breakpoint: 990,
			settings: {
				variableWidth: true,
				slidesToShow: 1,
				arrows: true,
				infinite: true,
				fade: false,
				speed: 300,
				cssEase: 'ease'
			}
		}]
	});



	// Actions Slider
	$('.actions__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: false,
		arrows: false,
		dots: true
	});

	// Services Inner Scroll
	if (document.getElementById('services')) {
		let servicesSidebar = new StickySidebar('.services__main', {
			topSpacing: 50,
			bottomSpacing: 0,
			containerSelector: '.services__container',
			innerWrapperSelector: '.services__sidebar'
		});
	}

	// Interior Slider
	$('.interior__photos').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		variableWidth: true,
		arrows: false,
		dots: false,
		// centerMode: true,
		speed: 0,
		autoplay: true,
		autoplaySpeed: 3500,
		pauseOnHover: false,
		swipe: false,
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
	});

	// Instagram Slider
	let $instagramSlider = document.querySelector('.instagram__scroll-area'),
		$instagramProgress = document.querySelector('.instagram__progress');

	$($instagramSlider).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		let calc = ((nextSlide) / (slick.slideCount-1)) * 100;

		$instagramProgress.style.backgroundSize = calc + '% 100%';
	});

	$($instagramSlider).slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		arrows: true,
		dots: false,
		autoplay: false,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
	});

	// Contacts Map
	ymaps.ready(init);
	function init() {
		let myMap = new ymaps.Map('contacts__map', {
			center: [55.564488, 37.487026],
			zoom: 16
		});

		let myGeoObject = new ymaps.GeoObject({
			// Описание геометрии.
			geometry: {
				type: "Point",
				coordinates: [55.564488, 37.487026]
			},
			// Свойства.
			properties: {
				// Контент метки.
				iconContent: 'AlenShato',
				hintContent: 'ул. Александры Монаховой, д. 43 к. 1'
			}
		}, {
			preset: 'islands#blackStretchyIcon',
			draggable: false
		});

		myMap.geoObjects.add(myGeoObject);
		myMap.behaviors.disable('scrollZoom');
		myMap.behaviors.disable('drag');
	}

	// Init Back Call Popup
	let $backCallPopupLinks = document.getElementsByClassName('popup-back-call');

	for (let i = 0; i < $backCallPopupLinks.length; i++) {
		$backCallPopupLinks[i].addEventListener('click', function (e) {
			e.preventDefault();
			window.vm.popup.openPopup();
		});
	}

	// Scroll Top Btn
	let $scrollTopBtn = document.getElementById('scroll-top'),
		scrollTopBtnColors = [
			{
				el: 'main-offer',
				isBlack: false
			}, {
				el: 'benefits',
				isBlack: true
			}, {
				el: 'actions',
				isBlack: true
			}, {
				el: 'services',
				isBlack: false
			}, {
				el: 'interior',
				isBlack: true
			}, {
				el: 'instagram',
				isBlack: true
			}, {
				el: 'inline-form',
				isBlack: true
			}, {
				el: 'contacts',
				isBlack: false
			}, {
				el: 'footer',
				isBlack: false
			}, {
				el: 'pricing',
				isBlack: true
			}
		];

	$scrollTopBtn.addEventListener('click', function () {
		$('html, body').animate({scrollTop: 0}, 1000);
	});

	document.addEventListener('scroll', function () {
		let scroll = window.scrollY,
			btnPosition = $scrollTopBtn.offsetTop + scroll;

		scroll > 300 ? $scrollTopBtn.style.display = 'block' : $scrollTopBtn.style.display = 'none';
		scroll === document.body.clientHeight - window.innerHeight ? $scrollTopBtn.classList.add('scroll-top--bottom') : $scrollTopBtn.classList.remove('scroll-top--bottom');

		for (let i = 0; i < scrollTopBtnColors.length; i++) {
			let $section = document.getElementById(scrollTopBtnColors[i].el);

			if ($section && (btnPosition > $section.offsetTop && btnPosition < $section.offsetTop + $section.offsetHeight)) {
				scrollTopBtnColors[i].isBlack ? $scrollTopBtn.classList.add('scroll-top--black') : $scrollTopBtn.classList.remove('scroll-top--black');
			}
		}
	});

	// Tabs
	let $tabs = document.querySelectorAll('[data-tab]'),
		$tabAreas = document.querySelectorAll('[data-tab-area]');

	for (let i = 0; i < $tabs.length; i++) {
		$tabs[i].addEventListener('click', function () {
			document.querySelector('.tabs__item--active').classList.remove('tabs__item--active');
			this.classList.add('tabs__item--active');

			for (let j = 0; j < $tabAreas.length; j++) {
				if (this.dataset.tab === $tabAreas[j].dataset.tabArea) {
					$tabAreas[j].classList.remove('tab-area--hidden');
				} else {
					$tabAreas[j].classList.add('tab-area--hidden');
				}
			}
		});
	}

	// Prising
	let $pricingItems = document.querySelectorAll('.pricing__item');

	for (let i = 0; i < $pricingItems.length; i++) {
		$pricingItems[i].querySelector('.pricing__hide').addEventListener('click', function () {
			this.classList.toggle('pricing__hide--open');
			$pricingItems[i].classList.toggle('pricing__item--open');

			if (this.classList.contains('pricing__hide--open')) {
				$pricingItems[i].querySelector('.pricing__list').classList.add('pricing__list--open');

				$('html, body').animate({scrollTop: $($pricingItems[i].querySelector('.pricing__list')).offset().top - 100}, 1000);
			} else {
				$pricingItems[i].querySelector('.pricing__list').classList.remove('pricing__list--open');
			}
		});
	}
});

// Phone Mask
Vue.directive('input-mask', {
	bind: function (el, obj, vModel) {
		$(el).inputmask();
	}
});

// Popup
new Vue({
	el: '#popup',
	name: 'Popup',
	data: {
		open: false,
		sent: false,
		form: {
			name: {
				value: '',
				valid: true
			},
			phone: {
				value: '',
				valid: true
			},
			agreement: {
				value: false,
				valid: true
			}
		}
	},
	methods: {
		lockScroll: function() {
			let $html = document.querySelector('html'),
				$body = document.querySelector('body'),
				scrollTop = $html.scrollTop ? $html.scrollTop : $body.scrollTop;

			$html.classList.add('lock-scroll');
			$html.style.top = -scrollTop + 'px';

			document.ontouchmove = function (e) {
				e.preventDefault();
			};
		},
		enableScroll: function() {
			let $html = document.querySelector('html'),
				scrollTop = parseInt($html.style.top);

			$html.classList.remove('lock-scroll');
			$html.scrollTop = -scrollTop;

			document.ontouchmove = function (e) {
				return true;
			};
		},
		openPopup: function (sent) {
			if (sent) this.sent = true;
			this.open = true;

			this.lockScroll();

			let popupBody = this.$el,
				self = this;
			popupBody.addEventListener('mousedown', function (e) {
				if (e.target === popupBody) {
					self.closePopup();
				}
			});
		},
		closePopup: function () {
			this.open = false;
			this.sent = false;
			this.form.name.value = '';
			this.form.name.valid = true;
			this.form.phone.value = '';
			this.form.phone.valid = true;
			this.form.agreement.value = false;
			this.form.agreement.valid = true;

			this.enableScroll();
		},
		checkOnlyLettersSpacesAndDots: function (str) {
			return /^[а-яА-Яa-zA-Z .]+$/.test(str);
		},
		checkPhone: function (phone) {
			return /^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(phone);
		},
		checkForm: function () {
			let check = true;

			if (this.form.name.value.length === 0 || !this.checkOnlyLettersSpacesAndDots(this.form.name.value)) {
				this.form.name.valid = false;
				check = false;
			} else {
				this.form.name.valid = true;
			}

			if (this.form.phone.value.length === 0 || !this.checkPhone(this.form.phone.value)) {
				this.form.phone.valid = false;
				check = false;
			} else {
				this.form.phone.valid = true;
			}

			if (!this.form.agreement.value) {
				this.form.agreement.valid = false;
				check = false;
			} else {
				this.form.agreement.valid = true;
			}

			return check;
		},
		sendForm: function () {
			let self = this;

			if (this.checkForm()) {
				let formData = new FormData();

				formData.append('name', this.form.name.value);
				formData.append('phone', this.form.phone.value);

				// Здесь далее - обработчик отправки на сервер
				// ..


				// В success запроса
				self.sent = true;
			}
		}
	},
	created: function () {
		vm.popup = this;
	},
});

// Inline Form
if (document.getElementById('inline-form')) {
	new Vue({
		el: '#inline-form',
		name: 'Inline Form',
		data: {
			form: {
				name: {
					value: '',
					valid: true
				},
				phone: {
					value: '',
					valid: true
				},
				message: {
					value: ''
				},
				agreement: {
					value: false,
					valid: true
				}
			}
		},
		methods: {
			success: function () {
				this.form.name.value = '';
				this.form.name.valid = true;
				this.form.phone.value = '';
				this.form.phone.valid = true;
				this.form.agreement.value = false;
				this.form.agreement.valid = true;
				this.form.message.value = '';

				vm.popup.openPopup(true);
			},
			checkOnlyLettersSpacesAndDots: function (str) {
				return /^[а-яА-Яa-zA-Z .]+$/.test(str);
			},
			checkPhone: function (phone) {
				return /^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(phone);
			},
			checkForm: function () {
				let check = true;

				if (this.form.name.value.length === 0 || !this.checkOnlyLettersSpacesAndDots(this.form.name.value)) {
					this.form.name.valid = false;
					check = false;
				} else {
					this.form.name.valid = true;
				}

				if (this.form.phone.value.length === 0 || !this.checkPhone(this.form.phone.value)) {
					this.form.phone.valid = false;
					check = false;
				} else {
					this.form.phone.valid = true;
				}

				if (!this.form.agreement.value) {
					this.form.agreement.valid = false;
					check = false;
				} else {
					this.form.agreement.valid = true;
				}

				return check;
			},
			sendForm: function () {
				let self = this;

				if (this.checkForm()) {
					let formData = new FormData();

					formData.append('name', this.form.name.value);
					formData.append('phone', this.form.phone.value);
					formData.append('phone', this.form.message.value);

					// Здесь далее - обработчик отправки на сервер
					// ..


					// В success запроса
					self.success();
				}
			}
		},
		created: function () {
			vm.inlineForm = this;
		},
	});
}


// Viewer
new Vue({
	el: '#viewer',
	name: 'Viewer',
	data: {
		open: false,
		photos: []
	},
	methods: {
		lockScroll: function() {
			let $html = document.querySelector('html'),
				$body = document.querySelector('body'),
				scrollTop = $html.scrollTop ? $html.scrollTop : $body.scrollTop;

			$html.classList.add('lock-scroll');
			$html.style.top = -scrollTop + 'px';

			document.ontouchmove = function (e) {
				e.preventDefault();
			};
		},
		enableScroll: function() {
			let $html = document.querySelector('html'),
				scrollTop = parseInt($html.style.top);

			$html.classList.remove('lock-scroll');
			$html.scrollTop = -scrollTop;

			document.ontouchmove = function (e) {
				return true;
			};
		},
		openPopup: function (slides, index) {
			this.photos = slides;

			this.$nextTick(function () {
				this.initSlider(index);
			});

			this.open = true;
			this.lockScroll();
		},
		initSlider: function (index) {
			$('.viewer__slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: true,
				arrows: true,
				dots: false,
				autoplay: false,
				infinite: true,
				centerMode: true,
				prevArrow: '<button type="button" class="slick-prev"></button>',
				nextArrow: '<button type="button" class="slick-next"></button>',
			});

			$('.viewer__slider').slick('slickGoTo', index ? index : 0, false);
		},
		closePopup: function () {
			this.open = false;
			this.enableScroll();
			$('.viewer__slider').slick('unslick');
			this.photos = [];
		}
	},
	created: function () {
		vm.viewer = this;
	}
});
