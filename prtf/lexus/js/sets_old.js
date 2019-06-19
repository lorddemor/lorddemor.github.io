var sets = {
	phone: '+74991165180', //Телефон во всех ссылках
	ya_metrika: 12345678, // номер счётчика или 0, чтобы отключить
	email_title: 'Заявка на Lexus', // Тема письма с заявкой
	email_addresses: 'cpa.tandem@yandex.ru||mmaarriinnaa@bk.ru||oivanova@tandemadv.ru||context16@tandemadv.ru||OPLexus-Volgogradka@rolf.ru', // Адреса для писем с заявкой. || - разделитель.  
	//email_addresses: 'whiv@ya.ru',
	time_work_from: 8, // Начало работы колл-центра (в часах)
	time_work_to: 22, // Конец работы колл-центра (в часах)
	mapLat: 59.912551,
	colors: [{
		id: 'black',
		name: 'чёрный'
	}, {
		id: 'white',
		name: 'белый'
	}, {
		id: 'grey',
		name: 'светло-серый'
	}, {
		id: 'brown',
		name: 'коричневый'
	}, {
		id: 'beige',
		name: 'бежевый'
	}, {
		id: 'ivory',
		name: 'слоновая кость'
	}, {
		id: 'red',
		name: 'красный'
	}, {
		id: 'reddish-brown',
		name: 'красно-коричневый'
	}, {
		id: 'blue',
		name: 'синий'
	}, {
		id: 'burgundy',
		name: 'бордовый'
	}],
	models: [{
		id: 'es',
		cars: [{
			model: '200',
			complectation: 'Executive',
			colorBody: 'white',
			colorCabin: 'black',
			price: 2235000,
			benefit: 269500
		}, {
			model: '200',
			complectation: 'Comfort +',
			colorBody: 'white',
			colorCabin: 'brown',
			price: 2235000,
			benefit: 249600
		}, {
			model: '250',
			complectation: 'Premium +',
			colorBody: 'grey',
			colorCabin: 'black',
			price: 2560000,
			benefit: 288500
		}, {
			model: '250',
			complectation: 'Premium +',
			colorBody: 'black',
			colorCabin: 'brown',
			price: 2538000,
			benefit: 288000
		}, {
			model: '250',
			complectation: 'Premium +',
			colorBody: 'black',
			colorCabin: 'black',
			price: 2538000,
			benefit: 288000
		}, {
			model: '250',
			complectation: 'Premium +',
			colorBody: 'brown',
			colorCabin: 'beige',
			price: 2538000,
			benefit: 288000
		}, {
			model: '250',
			complectation: 'Comfort +',
			colorBody: 'white',
			colorCabin: 'black',
			price: 2258000,
			benefit: 266500
		}, {
			model: '250',
			complectation: 'Comfort +',
			colorBody: 'black',
			colorCabin: 'brown',
			price: 2237000,
			benefit: 265000
		}, {
			model: '250',
			complectation: 'Premium +',
			colorBody: 'brown',
			colorCabin: 'brown',
			price: 2538000,
			benefit: 288000
		}]
	}, {
		id: 'rx',
		cars: [{
			model: '350',
			complectation: 'Premium',
			colorBody: 'grey',
			colorCabin: 'black',
			price: 3713000,
			benefit: 193000
		}, {
			model: '200t',
			complectation: 'Premium',
			colorBody: 'grey',
			colorCabin: 'black',
			price: 2775000,
			benefit: 193000
		}, {
			model: '350',
			complectation: 'Premium',
			colorBody: 'black',
			colorCabin: 'burgundy',
			price: 3713000,
			benefit: 193000
		}, {
			model: '450H',
			complectation: 'Exclusive',
			colorBody: 'red',
			colorCabin: 'burgundy',
			price: 4650000,
			benefit: 295000
		}]

	}, {
		id: 'gx',
		cars: [{
			model: '460',
			complectation: 'Executive 5',
			colorBody: 'brown',
			colorCabin: 'black',
			price: 4096000,
			benefit: 270000
		}, {
			model: '460',
			complectation: 'Executive 5 Sport',
			colorBody: 'white',
			colorCabin: 'black',
			price: 4270000,
			benefit: 277000
		}]
	}, {
		id: 'lx',
		cars: [{
			model: '570',
			complectation: 'Luxury +',
			colorBody: 'grey',
			colorCabin: 'black',
			price: 6306000,
			benefit: 529000
		}, {
			model: '570',
			complectation: 'Luxury 21+',
			colorBody: 'grey',
			colorCabin: 'reddish-brown',
			price: 6330000,
			benefit: 533000
		}, {
			model: '570',
			complectation: 'Superior',
			colorBody: 'grey',
			colorCabin: 'black',
			price: 6530000,
			benefit: 572000
		}, {
			model: '570',
			complectation: 'Luxury 21+',
			colorBody: 'black',
			colorCabin: 'ivory',
			price: 6330000,
			benefit: 533000
		}, {
			model: '570',
			complectation: 'Superior',
			colorBody: 'blue',
			colorCabin: 'reddish-brown',
			price: 6530000,
			benefit: 572000
		}, {
			model: '570',
			complectation: 'Luxury 21+',
			colorBody: 'white',
			colorCabin: 'ivory',
			price: 6355000,
			benefit: 532000
		}, {
			model: '570',
			complectation: 'Superior',
			colorBody: 'blue',
			colorCabin: 'reddish-brown',
			price: 6530000,
			benefit: 572000
		}, {
			model: '450D',
			complectation: 'Executive 2',
			colorBody: 'white',
			colorCabin: 'black',
			price: 6384000,
			benefit: 473000
		}, {
			model: '450D',
			complectation: 'Executive 2',
			colorBody: 'blue',
			colorCabin: 'black',
			price: 6009000,
			benefit: 527000
		}]
	}, {
		id: 'nx',
		cars: [{
			model: '200 AWD',
			complectation: 'Progressive',
			colorBody: 'brown',
			colorCabin: 'black',
			price: 2275000,
			benefit: 295000
		}, {
			model: '200 AWD',
			complectation: 'Progressive',
			colorBody: 'white',
			colorCabin: 'black',
			price: 2305000,
			benefit: 287500
		}, {
			model: '200 AWD',
			complectation: 'Progressive',
			colorBody: 'brown',
			colorCabin: 'black',
			price: 2275000,
			benefit: 295000
		}, {
			model: '200 AWD',
			complectation: 'Progressive',
			colorBody: 'blue',
			colorCabin: 'black',
			price: 2275000,
			benefit: 295000
		}, {
			model: '200 AWD',
			complectation: 'Progressive',
			colorBody: 'white',
			colorCabin: 'beige',
			price: 2305000,
			benefit: 287500
		}, {
			model: '200 AWD',
			complectation: 'Progressive',
			colorBody: 'black',
			colorCabin: 'black',
			price: 2275000,
			benefit: 295000
		}, {
			model: '200 AWD',
			complectation: 'Progressive',
			colorBody: 'black',
			colorCabin: 'red',
			price: 2275000,
			benefit: 295000
		}, {
			model: '200 AWD',
			complectation: 'Progressive',
			colorBody: 'red',
			colorCabin: 'beige',
			price: 2275000,
			benefit: 295000
		}, {
			model: '200 AWD',
			complectation: 'Luxury',
			colorBody: 'black',
			colorCabin: 'red',
			price: 2442000,
			benefit: 310000
		}, {
			model: '200 AWD',
			complectation: 'Progressive',
			colorBody: 'white',
			colorCabin: 'black',
			price: 2305000,
			benefit: 287500
		}, {
			model: '200 AWD',
			complectation: 'Luxury',
			colorBody: 'grey',
			colorCabin: 'black',
			price: 2275000,
			benefit: 295000
		}, {
			model: '300',
			complectation: 'F SPORT Luxury',
			colorBody: 'blue',
			colorCabin: 'red',
			price: 2967000,
			benefit: 356000
		}, {
			model: '300',
			complectation: 'Exclusive 2',
			colorBody: 'black',
			colorCabin: 'black',
			price: 2896320,
			benefit: 349680
		}, {
			model: '300',
			complectation: 'F SPORT Luxury',
			colorBody: 'black',
			colorCabin: 'red',
			price: 2967000,
			benefit: 356000
		}, {
			model: '300',
			complectation: 'Exclusive 2',
			colorBody: 'brown',
			colorCabin: 'brown',
			price: 2896000,
			benefit: 350000
		}, {
			model: '300',
			complectation: 'Premium',
			colorBody: 'white',
			colorCabin: 'black',
			price: 2570000,
			benefit: 309500
		}]
	}]
}