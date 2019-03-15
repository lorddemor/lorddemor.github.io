sets = {
	phone: '+74954017738', //Телефон во всех ссылках
	mapLat: 55.552255, // Широта центра карты
	mapLong: 37.692716, // Долгота центра карты
	mapZoom: 14, // Коэффициент увеличения карты
	corp4_1: { // Минимальные цены и площади на квартиры по корпусам
		room1: 3519150,
		room2: 5302477,
		room3: 7257879,
		room1scale: 32.3,
		room2scale: 59.7,
		room3scale: 77.5
	},
	corp4_2: {
		room1: 4084256,
		room2: 5985821,
		room3: 8285044,
		room1scale: 38,
		room2scale: 60.4,
		room3scale: 80.5
	},
	corp5_1: {
		room1: 4238424,
		room2: 6139572,
		room3: 8396910,
		room1scale: 43,
		room2scale: 58.6,
		room3scale: 90
	},
	corp5_2: {
		room1: 4441606,
		room2: 6140139,
		room3: 7145934,
		room1scale: 40.1,
		room2scale: 64.1,
		room3scale: 74.6
	},
	corp6_1: {
		room1: 3510820,
		room2: 4898937,
		room3: 6817001,
		room1scale: 38,
		room2scale: 52.91,
		room3scale: 76.95
	},
	corp6_2: {
		room1: 3533916,
		room2: 5079310,
		room3: 7250519,
		room1scale: 39.01,
		room2scale: 58.67,
		room3scale: 85.21
	}
}

function phoneLocal(phone) {
    return phone.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3-$4-$5');
}

Vue.component('my-phone', {
  template: '<span class="call_phone_1"><a href="tel:' + sets.phone + '" class="phone phone_call" title="Позвонить по ' + phoneLocal(sets.phone) + '">' + phoneLocal(sets.phone) + '</a></span>'
})

new Vue({
  el: '#header'
})

new Vue({
  el: '#main-offer',
  data: {
  	room1: Math.min(sets.corp4_1.room1, sets.corp4_2.room1, sets.corp5_1.room1, sets.corp5_2.room1, sets.corp6_1.room1, sets.corp6_2.room1).toLocaleString(),
  	room2: Math.min(sets.corp4_1.room2, sets.corp4_2.room2, sets.corp5_1.room2, sets.corp5_2.room2, sets.corp6_1.room2, sets.corp6_2.room2).toLocaleString(),
  	room3: Math.min(sets.corp4_1.room3, sets.corp4_2.room3, sets.corp5_1.room3, sets.corp5_2.room3, sets.corp6_1.room3, sets.corp6_2.room3).toLocaleString()
  },
  computed: {
  	lastDay: function(){
  		var currentDate = new Date();
  		
  		function getLastDayOfMonth(year, month) {
			var date = new Date(year, month + 1, 0);
			return date.getDate();
		}
  		return getLastDayOfMonth(currentDate.getFullYear(), currentDate.getMonth()) + '.' + (currentDate.getMonth() + 1) + '.' + currentDate.getFullYear();
  	},
  	firstDay: function(){
  		var currentDate = new Date();

  		function getFirstDayOfMonth(year, month) {
			var date = new Date(year, month + 1, 1);
			if(date.getDate() < 10) {
				return '0' + date.getDate();
			}else{
				return date.getDate();
			}
		}
  		return getFirstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth()) + '.' + (currentDate.getMonth() + 1) + '.' + currentDate.getFullYear();
  	}
  }
})

new Vue({
  el: '#plans',
  data: {
  	corp4_1: {
  		room1: sets.corp4_1.room1.toLocaleString(),
  		room2: sets.corp4_1.room2.toLocaleString(),
  		room3: sets.corp4_1.room3.toLocaleString(),
  		room1scale: sets.corp4_1.room1scale,
  		room2scale: sets.corp4_1.room2scale,
  		room3scale: sets.corp4_1.room3scale
  	},
  	corp4_2: {
  		room1: sets.corp4_2.room1.toLocaleString(),
  		room2: sets.corp4_2.room2.toLocaleString(),
  		room3: sets.corp4_2.room3.toLocaleString(),
  		room1scale: sets.corp4_2.room1scale,
  		room2scale: sets.corp4_2.room2scale,
  		room3scale: sets.corp4_2.room3scale
  	},
  	corp5_1: {
  		room1: sets.corp5_1.room1.toLocaleString(),
  		room2: sets.corp5_1.room2.toLocaleString(),
  		room3: sets.corp5_1.room3.toLocaleString(),
  		room1scale: sets.corp5_1.room1scale,
  		room2scale: sets.corp5_1.room2scale,
  		room3scale: sets.corp5_1.room3scale
  	},
  	corp5_2: {
  		room1: sets.corp5_2.room1.toLocaleString(),
  		room2: sets.corp5_2.room2.toLocaleString(),
  		room3: sets.corp5_2.room3.toLocaleString(),
  		room1scale: sets.corp5_2.room1scale,
  		room2scale: sets.corp5_2.room2scale,
  		room3scale: sets.corp5_2.room3scale
  	},
  	corp6_1: {
  		room1: sets.corp6_1.room1.toLocaleString(),
  		room2: sets.corp6_1.room2.toLocaleString(),
  		room3: sets.corp6_1.room3.toLocaleString(),
  		room1scale: sets.corp6_1.room1scale,
  		room2scale: sets.corp6_1.room2scale,
  		room3scale: sets.corp6_1.room3scale
  	},
  	corp6_2: {
  		room1: sets.corp6_2.room1.toLocaleString(),
  		room2: sets.corp6_2.room2.toLocaleString(),
  		room3: sets.corp6_2.room3.toLocaleString(),
  		room1scale: sets.corp6_2.room1scale,
  		room2scale: sets.corp6_2.room2scale,
  		room3scale: sets.corp6_2.room3scale
  	},
  	corpPicked: 4.1,
  	corpShown: 0,
  	currentPrice: {
  		room1: 1,
  		room2: 1,
  		room3: 1
  	},
  },
  created: function(){
  	if ( $(window).width() < 992 ) {
		this.corpShown = 1;
	}
	// $(window).on('resize', function() {
	// 	if ( $(window).width() < 992 ) {
	// 		//this.corpShown = 1;
	// 		console.log(self.corpShown);
	// 	}
	// });
  },
  methods: {
  	showPlan: function(){
  		this.corpShown = this.corpPicked;
  	},
  	hidePlan: function(){
  		this.corpShown = 0;
  	},
  	pickPlan: function(e){
  		element = e.currentTarget;
  		this.corpPicked = element.getAttribute('data-corp');
  	}
  }
})

new Vue({
  el: '#contacts'
})

$(function() {

	//Установим высоту жёлтого блока в "О проекте"
    var aboutYellowBlockHeight = $('#about .right-column img').height();
    $('head').append('<style>main #about .right-column:before{height:' + (aboutYellowBlockHeight + 40) + 'px;}</style>');


	// Анимация прочих блоков
	var h = $(window).height();
    $(window).scroll(function(){
    	if ( ($(this).scrollTop() + h) >= $("#about h2").offset().top + 200) {
			$('#about h2').addClass('anim');
    	}
    	if ( $(this).scrollTop() == 0 ) {
			$('#about h2').removeClass('anim');
    	}

    	if ( ($(this).scrollTop() + h) >= $("#about .right-column").offset().top + 200) {
			$('#about .right-column').addClass('anim');
    	}
    	if ( $(this).scrollTop() == 0 ) {
			$('#about .right-column').removeClass('anim');
    	}

    	if ( ($(this).scrollTop() + h) >= $("#placement h2").offset().top + 200) {
			$('#placement h2').addClass('anim');
    	}
    	if ( $(this).scrollTop() == 0 ) {
			$('#placement h2').removeClass('anim');
    	}

    	if ( ($(this).scrollTop() + h) >= $("#consultation h2").offset().top + 200) {
			$('#consultation h2').addClass('anim');
    	}
    	if ( $(this).scrollTop() == 0 ) {
			$('#consultation h2').removeClass('anim');
    	}

    	if ( ($(this).scrollTop() + h) >= $("#gallery h2").offset().top + 200) {
			$('#gallery h2').addClass('anim');
    	}
    	if ( $(this).scrollTop() == 0 ) {
			$('#gallery h2').removeClass('anim');
    	}

    	if ( ($(this).scrollTop() + h) >= $("#plans h2").offset().top + 200) {
			$('#plans h2').addClass('anim');
    	}
    	if ( $(this).scrollTop() == 0 ) {
			$('#plans h2').removeClass('anim');
    	}

    	if ( ($(this).scrollTop() + h) >= $("#mortgage h2").offset().top + 200) {
			$('#mortgage h2').addClass('anim');
    	}
    	if ( $(this).scrollTop() == 0 ) {
			$('#mortgage h2').removeClass('anim');
    	}

    	if ( ($(this).scrollTop() + h) >= $("#contacts h2").offset().top + 200) {
			$('#contacts h2').addClass('anim');
    	}
    	if ( $(this).scrollTop() == 0 ) {
			$('#contacts h2').removeClass('anim');
    	}
    });

    // Галерея преимущества
	$('#benefits .benefits-gallery').flickity({
		// options
		cellAlign: 'left',
		contain: true,
		cellSelector: '.benefit',
		pageDots: false,
		prevNextButtons: true,
		wrapAround: true,
		percentPosition: false
	});

	// Галерея фото
	$('#gallery .photogallery').flickity({
		// options
		cellAlign: 'center',
		contain: true,
		cellSelector: '.slide',
		pageDots: false,
		prevNextButtons: true,
		wrapAround: true,
		percentPosition: false
	});
	var flkty = $('#gallery .photogallery').data('flickity');
	$('#gallery .photogallery').on( 'select.flickity', function() {
		$('.thumbs .thumb').removeClass('active');
		$('.thumbs .thumb:eq(' + flkty.selectedIndex + ')').addClass('active');
	});
	$('#gallery .thumbs').on('click', '.thumb', function(){
		var index = $(this).index();
		$('#gallery .photogallery').flickity( 'select', index );
		$('#gallery .thumbs .thumb').removeClass('active');
		$(this).addClass('active');
	});

	// Галерея loyalty
	$('#loyalty .loyalty-gallery').flickity({
		// options
		cellAlign: 'left',
		contain: true,
		cellSelector: '.slide',
		pageDots: false,
		prevNextButtons: true,
		wrapAround: true,
		percentPosition: false
	});

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
    
	// GOOGLE MAP START
	// When the window has finished loading create our google map below
	google.maps.event.addDomListener(window, 'load', init);
	google.maps.event.addDomListener(window, 'load', initContacts);

	var coordsCenterMap = { "lat" : sets.mapLat, "long" : sets.mapLong};

	function init() {
	    // Basic options for a simple Google Map
	    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	    var mapOptions = {
	        // How zoomed in you want the map to start at (always required)
	        zoom: sets.mapZoom,
	        scrollwheel: false,
	        // The latitude and longitude to center the map (always required)
	        center: new google.maps.LatLng(coordsCenterMap.lat, coordsCenterMap.long), 
	        // How you would like to style the map. 
	        // This is where you would paste any style found on Snazzy Maps.
	        styles: [{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":51},{"hue":"#ff0000"},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"},{"color":"#ffd900"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"simplified"},{"color":"#ffe761"}]},{"featureType":"road.local","elementType":"all","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"simplified"},{"color":"#bfbfbf"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"lightness":-25},{"saturation":-97},{"color":"#616161"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100},{"color":"#050505"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]}]
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

	    var familyIcon = {
	    	url: 'img/pin-family.png',
	    	size: new google.maps.Size(60, 60),
	    };

	    var parksIcon = {
	    	url: 'img/pin-parks.png',
	    	size: new google.maps.Size(60, 60),
	    };

	    var waterIcon = {
	    	url: 'img/pin-water.png',
	    	size: new google.maps.Size(60, 60),
	    };

	    var churchIcon = {
	    	url: 'img/pin-church.png',
	    	size: new google.maps.Size(60, 60),
	    };

	    // Let's also add a marker while we're at it
	    var marker = new google.maps.Marker({
	    	position: new google.maps.LatLng(55.542255, 37.712716),
	    	map: map,
	    	title: 'Краски жизни',
	    	icon: mainIcon
	    });

	    // Второстепенные маркеры
	    var secondMarkers = new Array();
	    var secondMarkersLocations = [
	    	['МУ "Дворец спорта Видное"', 'Олимпийская ул., 4', 55.546668, 37.695943, familyIcon],
	    	['Общественный плавательный бассейн "Дельфин"', 'Жуковский пр-д, 10', 55.544796, 37.714727, familyIcon],
	    	['Танцевальный зал "Дэнс Холл"', 'Ольховая ул., 9', 55.542764, 37.724767, familyIcon],
	    	['Школа искусств "HUDOZHKA"', 'Битцевский пр-д, 3', 55.542316, 37.706020, familyIcon],
	    	['Тимоховский парк', 'Олимпийская ул., 4', 55.547046, 37.693521, parksIcon],
	    	['Расторгуевский парк', 'ул. Победы, 46', 55.544333, 37.670641, parksIcon],
	    	['Центральный парк', 'Клубный пер.', 55.558358, 37.707177, parksIcon],
	    	['Булатниковский пруд', 'Спасское', 55.553755, 37.655399, waterIcon],
	    	['Верхний Качаловский пруд', 'Ратная ул.', 55.574500, 37.572397, waterIcon],
	    	['Тимоховский пруд', 'Советская ул.', 55.552867, 37.704775, waterIcon],
	    	['Река Битца', 'Голубинская ул.', 55.597003, 37.525718, waterIcon],
	    	['Екатерининский мужской монастырь', 'Петровский пр-д, 21', 55.536236, 37.665752, churchIcon],
	    	['Храм Святителя Николая в Ермолино', 'Ленинский р-н', 55.560672, 37.684806, churchIcon],
	    	['Храм Великомученика Георгия Победоносца', 'Советский пр-д, 2, строен. 1', 55.554251, 37.708055, churchIcon]
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

		    google.maps.event.addListener(secondMarker, 'click', (function(secondMarker, i){
		    	return function(){
		    		secondMarkersBaloon.setContent('<b>' + secondMarkersLocations[i][0] + '</b><br>' + secondMarkersLocations[i][1]);
		    		secondMarkersBaloon.open(map, secondMarker);
		    	}
		    })(secondMarker, i));
	    }
	};

	// Map in Contacts
	function initContacts() {
	    // Basic options for a simple Google Map
	    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	    var mapOptions = {
	        // How zoomed in you want the map to start at (always required)
	        zoom: sets.mapZoom,
	        scrollwheel: false,
	        // The latitude and longitude to center the map (always required)
	        center: new google.maps.LatLng(coordsCenterMap.lat, coordsCenterMap.long), 
	        // How you would like to style the map. 
	        // This is where you would paste any style found on Snazzy Maps.
	        styles: [{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":51},{"hue":"#ff0000"},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"},{"color":"#ffd900"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"simplified"},{"color":"#ffe761"}]},{"featureType":"road.local","elementType":"all","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"simplified"},{"color":"#bfbfbf"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"lightness":-25},{"saturation":-97},{"color":"#616161"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100},{"color":"#050505"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]}]
	    }
	    // Get the HTML DOM element that will contain your map 
	    // We are using a div with id="map" seen below in the <body>
	    var mapElement = document.getElementById('map-contacts');
	    // Create the Google Map using our element and options defined above
	    var mapContacts = new google.maps.Map(mapElement, mapOptions);

	    // Создание иконок для пинов
	    var mainIcon = {
	    	url: 'img/pin.png',
	    	size: new google.maps.Size(60, 60),
	    };

	     // Let's also add a marker while we're at it
	    var marker = new google.maps.Marker({
	    	position: new google.maps.LatLng(55.542255, 37.712716),
	    	map: mapContacts,
	    	title: 'Краски жизни',
	    	icon: mainIcon
	    });
	}
    // GOOGLE MAP END

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
				document.ontouchmove = function(e){ e.preventDefault(); }
				//Первая часть составной цели
				// yaCounter45921078.reachGoal('lead');
			},
			beforeClose: 
			function() {
				$('#popup').removeClass('flipInY animated');
			},
			close: function() {
				//document.body.style.overflow = 'inherit';
				document.ontouchmove = function(e){ return true; }
			}
		}
	});
	$('#popup .tabs .tab').click(function(){
		$('#popup .tabs .tab').removeClass('active');
		$(this).addClass('active');
	});
	$('#popup input[type="tel"]').mask('+7 (999) 999-99-99', {placeholder:"+7 (000) 000-00-00"});

	//Отправка формы
	$('form').on('submit', function(e) {
		$form = $(this);
		e.preventDefault();
		
		//var checkForm = checkForm($form);
		var checkForm1 = checkForm($form.get(0));
		if (checkForm1['check'] != false) {
			
			//Вторая часть составной цели
			// yaCounter45921078.reachGoal('final_lead');

			// Цель Google Analytics
			ga('send', 'event', 'form', 'send');

			var phone = checkForm1['number'];
			if( $('input[name="phone"]').length > 0 ) {
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

	// Мобильное меню
	$('.burger').click( function(){
		if( !$(this).hasClass('open') ){
			openMenu();
		}else{
			closeMenu();
		};
	});

}); // End of jQuery onLoad staff



function smoothScrollOffset(){
	if ( $(window).width() < 769 ) {
		window.scrollOffset = -70;
	}else{
		window.scrollOffset = -90;
	}
}


function openMenu(){
	$('div.burger').addClass('open');
	$('nav').addClass('open');	
	$('div.x, div.y, div.z').addClass('collapse');
	
	setTimeout(function(){ 
		$('div.y').hide(); 
		$('div.x').addClass('rotate30'); 
		$('div.z').addClass('rotate150'); 
	}, 70);
	setTimeout(function(){
		$('div.x').addClass('rotate45'); 
		$('div.z').addClass('rotate135');  
	}, 120);
}
	
function closeMenu(){
	$('div.burger').removeClass('open');
	$('nav').removeClass('open');
	$('div.x').removeClass('rotate45').addClass('rotate30'); 
	$('div.z').removeClass('rotate135').addClass('rotate150');				
	
	setTimeout(function(){ 			
		$('div.x').removeClass('rotate30'); 
		$('div.z').removeClass('rotate150'); 			
	}, 50);
	setTimeout(function(){
		$('div.y').show(); 
		$('div.x, div.y, div.z').removeClass('collapse');
	}, 70);
}


// Функция проверки номера
function checkForm(form1) {
    var $form = $(form1);
    var checker = true;

    var phone = $("input[name='phone']", $form).val();
    //console.log(phone);
    if (phone.substring(0,1) != '+'){
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
		setTimeout(function(){ 			
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
		if(checkResult['parsingResult'] != 'error'){
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
    		'check' : false
    	} 
    }else{
    	return {
    		'check' : true,
    		'number' : checkResult['eFormat']
    	} 
    }
}


function thankYouMessage() {
	var d = new Date();
	var hours = d.getHours();
	var timeWorkFrom = 10;
	var timeWorkTo = 19;
	if ( (hours >= timeWorkFrom) & (hours <= (timeWorkTo - 1)) ) {
		var popupID = '#tnx-popup';
	}else{
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
				//document.body.style.overflow = 'hidden';
				document.ontouchmove = function(e){ e.preventDefault(); };
				setTimeout(function () {
					$('.popup .success').addClass('bounceIn animated');	},1500
				);
				$('.popup .success').click(function(){
					$.magnificPopup.close();
				});
			},
			close: function() {
				//document.body.style.overflow = 'inherit';
				document.ontouchmove = function(e){ return true; }
				$('.success').removeClass('bounceIn animated');
			}
		}
	});

};