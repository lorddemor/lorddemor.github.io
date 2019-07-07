(function() {

	// Слайдер
	$('#slider').flickity({
		// options
		cellSelector: '.slide',
		cellAlign: 'left',
		contain: true,
		prevNextButtons: false
	});

	// Скролл меню
	$('header nav a').click(function(e) {
		e.preventDefault();
		var link = $(this).attr('data-section');
		scrollTo(link);
	});
	$('header .logo a').click(function(e) {
		e.preventDefault();
		var link = $(this).attr('data-section');
		scrollTo(link);
	});

	// Активация моб. меню
	$('.burger').click(function() {
		if ($(this).hasClass('open')) {
			closeMenu();
		} else {
			openMenu();
		}
	});


	// Получить координаты элемента
	function getCoords(elem) {
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
	};

	// Плавный скролл
	function scrollTo(link) {
		//Скрипт плавного перехода к нужному блоку
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		var top = getCoords(document.getElementById(link)).top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({
			scrollTop: top
		}, 800);
		// Снимем focus с кликнутого элемента
		document.activeElement.blur();
		closeMenu();
	};

	// Анимация открытия моб. меню
	function openMenu() {
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
	};

	// Анимация закрытия моб. меню
	function closeMenu() {
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
	};

}());