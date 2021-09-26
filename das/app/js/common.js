$(document).ready(function(){
	$('.main-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-aside--left, .slider-aside--right',
		arrows: false,
		dots: true,
		vertical: true,
		speed: 300,
		swipe: false,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					swipe: true
				}
			}
		]
	});

	$('.slider-aside--left').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.main-slider, .slider-aside--right',
		arrows: false,
		dots: false
	})
	.on('click', function () {
		$(this).slick('slickPrev');
	});

	$('.slider-aside--right').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.main-slider, .slider-aside--left',
		arrows: false,
		dots: false
	})
	.on('click', function () {
		$(this).slick('slickNext');
	});

	$('#catalog').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		variableWidth: true,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 1,
					variableWidth: false
				}
			}
		]
	});

	$('.news__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		variableWidth: true,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					variableWidth: false
				}
			}
		]
	});

	$('.brands__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		variableWidth: true,
		autoplay: 3000
	});

	function mobileServicesSlider () {
		$('.services__container').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			variableWidth: true
		});
	}
	let servicesSlider = false;
	if (window.innerWidth < 768) {
		mobileServicesSlider();
		servicesSlider = true;
	}
	window.addEventListener("resize", function() {
		if (window.innerWidth < 768) {
			if (!servicesSlider) {
				mobileServicesSlider();
				servicesSlider = true;
			}
		} else {
			if (servicesSlider) {
				$('.services__container').slick('unslick');
				servicesSlider = false;
			}
		}
	});
});

Vue.directive('input-mask', {
	bind: function(el, obj, vModel) {
		$(el).inputmask();
	}
});

new Vue({
	el: '#tab-panel',
	name: 'Tab Panel',
	data: {
		currentTab: 0,
		form: {
			name: {
				value: '',
				invalid: false
			},
			phone: {
				value: '',
				invalid: false
			},
			email: {
				value: '',
				invalid: false
			},
			files: {
				value: [],
				invalid: false
			}
		}
	},
	methods: {
		changeTab: function (tab) {
			this.currentTab = tab;
		},
		chooseFiles: function () {
			this.$refs.files.click();
			this.form.files.invalid = false;
		},
		addFiles: function () {
			let uploaded = this.$refs.files.files,
				validImageTypes = ['image/jpeg', 'image/png'],
				validSize = 2097152; // 2Мб

			for (let i = 0; i < uploaded.length; i++) {
				if (validImageTypes.includes(uploaded[i]['type']) && uploaded[i]['size'] <= validSize && this.form.files.value.length < 5) {
					this.form.files.value.push(uploaded[i]);
				} else {
					this.form.files.invalid = true;
				}
			}
		},
		deleteFile: function (key) {
			this.form.files.value.splice(key, 1);
		},
		checkEmail: function (email) {
			let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		},
		checkOnlyLettersSpacesAndDots: function(str) {
			return /^[а-яА-Я .]+$/.test(str);
		},
		checkPhone: function(phone) {
			return /^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(phone);
		},
		checkForm: function () {
			let check = true;

			if (this.form.name.value.length === 0 || !this.checkOnlyLettersSpacesAndDots(this.form.name.value)) {
				this.form.name.invalid = true;
				check = false;
			} else {
				this.form.name.invalid = false;
			}

			if (this.form.phone.value.length === 0 || !this.checkPhone(this.form.phone.value)) {
				this.form.phone.invalid = true;
				check = false;
			} else {
				this.form.phone.invalid = false;
			}

			if (this.form.email.value.length !== 0 && !this.checkEmail(this.form.email.value)) {
				this.form.email.invalid = true;
				check = false;
			} else {
				this.form.email.invalid = false;
			}

			return check;
		},
		sendForm: function () {
			if (this.checkForm()) {
				console.log('Success!');

				let formData = new FormData();

				formData.append('name', this.form.name.value);
				formData.append('phone', this.form.phone.value);
				formData.append('email', this.form.email.value);

				for (let i = 0; i < this.form.files.value.length; i++){
					let file = this.form.files.value[i];
					formData.append('files[' + i + ']', file);
				}

				// formData - для отправки на сервер
			}
		}
	},
	mounted: function() {

	}
});