$(document).ready(function(){
	$('.faq__slider')
		.on('init', function(event, slick){
			$('#faq .slick-prev').hide();
		})
		.on('afterChange', function(event, slick, currentSlide){
			if (currentSlide >= slick.slideCount - slick.options.slidesToShow) {
				$('#faq .slick-next').hide();
			} else {
				$('#faq .slick-next').show();
			}

			if (currentSlide === 0) {
				$('#faq .slick-prev').hide();
			} else {
				$('#faq .slick-prev').show();
			}
		});

	$('.faq__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: false,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [{
			breakpoint: 1300,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 1030,
			settings: {
				slidesToShow: 2
			}
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 1
			}
		}]
	});
});