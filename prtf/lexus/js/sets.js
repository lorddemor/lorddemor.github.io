var sets = {
	phone: '+74991165180', //Телефон во всех ссылках
	ya_metrika: 0, // номер счётчика или 0, чтобы отключить
	email_title: 'Заявка на Lexus', // Тема письма с заявкой
	email_addresses: 'mbimanager@gmail.com||mbimanager@gmail.com', // Адреса для писем с заявкой. || - разделитель.  ПОЧТА КЛИЕНТА: OPLexus-Volgogradka@rolf.ru
	//email_addresses: 'whiv@ya.ru',
	time_work_from: 8, // Начало работы колл-центра (в часах)
	time_work_to: 22, // Конец работы колл-центра (в часах)
	mapLat: 59.912551,
	months: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
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
		disclaimer_sup: '1',
		disclaimer: 'Вы можете стать обладателем Lexus ES по специальной цене с учетом преимущества 200 000 рублей по программе Lexus Trade-in. С 29 декабря 2017 года по 31 января 2018 года при условии сдачи автомобиля (а/м) с пробегом по программе Lexus Trade-in (программа обмена а/м с пробегом на новые) при покупке а/м Lexus ES 200, ES 250 2017 года выпуска в любой из существующих комплектаций предоставляется выгода 200 000 рублей. Выгода достигается посредством предоставления скидки от максимальной цены перепродажи (МЦП) а/м. Количество а/м ограниченно.',
		cars: [{
			model: '250',
			complectation: 'Premium +',
			colorBody: 'white',
			colorCabin: 'black',
			price: 2749500,
			benefit: 200000
		}, {
			model: '250',
			complectation: 'Comfort',
			colorBody: 'black',
			colorCabin: 'black',
			price: 2403000,
			benefit: 200000
		}, {
			model: '250',
			complectation: 'Comfort +',
			colorBody: 'white',
			colorCabin: 'black',
			price: 2425500,
			benefit: 200000
		}, {
			model: '250',
			complectation: 'Comfort',
			colorBody: 'white',
			colorCabin: 'black',
			price: 2425500,
			benefit: 200000
		}]
	}, {
		id: 'rx',
		disclaimer_sup: '2',
		disclaimer: 'Получите выгоду при покупке в размере 150 000 рублей, обменяв ваш текущий автомобиль на Lexus RX по программе Lexus Trade-in. Дисклеймер:Трейд-ин. При условии сдачи а/м с пробегом по программе Lexus Trade-in (программа обмена а/м с пробегом на новые) при покупке а/м Lexus RX 2017 года выпуска в любой из существующих комплектаций предоставляется выгода 150 000 рублей. Выгода достигается посредством предоставления скидки от МЦП а/м. Количество а/м ограниченно.',
		cars: [{
			model: '350',
			complectation: 'Premium',
			colorBody: 'grey',
			colorCabin: 'burgundy',
			price: 3845000,
			benefit: 150000
		}, {
			model: '350',
			complectation: 'Exclusive',
			colorBody: 'black',
			colorCabin: 'black',
			price: 4314000,
			benefit: 150000
		}, {
			model: '350',
			complectation: 'Premium',
			colorBody: 'grey',
			colorCabin: 'burgundy',
			price: 3807000,
			benefit: 150000
		}, {
			model: '350',
			complectation: 'Premium',
			colorBody: 'white',
			colorCabin: 'burgundy',
			price: 3883000,
			benefit: 150000
		}, {
			model: '200T AWD',
			complectation: 'Executive',
			colorBody: 'black',
			colorCabin: 'black',
			price: 3166000,
			benefit: 150000
		}, {
			model: '200T AWD',
			complectation: 'Executive',
			colorBody: 'black',
			colorCabin: 'burgundy',
			price: 3166000,
			benefit: 150000
		}, {
			model: '200T AWD',
			complectation: 'Executive',
			colorBody: 'white',
			colorCabin: 'beige',
			price: 3204000,
			benefit: 150000
		}, {
			model: '200T AWD',
			complectation: 'Executive',
			colorBody: 'white',
			colorCabin: 'black',
			price: 3204000,
			benefit: 150000
		}, {
			model: '200T AWD',
			complectation: 'Executive',
			colorBody: 'white',
			colorCabin: 'burgundy',
			price: 3204000,
			benefit: 150000
		}, {
			model: '200T AWD',
			complectation: 'Executive',
			colorBody: 'red',
			colorCabin: 'black',
			price: 3166000,
			benefit: 150000
		}, {
			model: '200T AWD',
			complectation: 'Executive Plus',
			colorBody: 'black',
			colorCabin: 'black',
			price: 3435000,
			benefit: 150000
		}, {
			model: '200T AWD',
			complectation: 'Executive Plus',
			colorBody: 'white',
			colorCabin: 'black',
			price: 3473000,
			benefit: 150000
		}, {
			model: '200T AWD',
			complectation: 'F SPORT Executive',
			colorBody: 'white',
			colorCabin: 'red',
			price: 3368000,
			benefit: 150000
		}, {
			model: '200T AWD',
			complectation: 'F SPORT Executive',
			colorBody: 'grey',
			colorCabin: 'black',
			price: 3368000,
			benefit: 150000
		}, {
			model: '200T AWD',
			complectation: 'F SPORT Executive',
			colorBody: 'grey',
			colorCabin: 'red',
			price: 3368000,
			benefit: 150000
		}, {
			model: '200T AWD',
			complectation: 'Executive Plus',
			colorBody: 'grey',
			colorCabin: 'beige',
			price: 3435000,
			benefit: 150000
		}]

	}, {
		id: 'gx',
		disclaimer_sup: '3',
		disclaimer: 'Получите преимущество в размере 200 000 рублей при покупке Lexus GX в обмен на ваш текущий автомобиль по программе Lexus Trade-in. Дислеймер: Трейд-ин. С 29 декабря 2017 года по 31 января 2018 года при условии сдачи автомобиля (а/м) с пробегом по программе Lexus Trade-in (программа обмена а/м с пробегом на новые) при покупке а/м Lexus GX 460 2017 года выпуска в любой из существующих комплектаций предоставляется выгода 200 000 рублей. Выгода достигается посредством предоставления скидки от МЦП (максимальной цены перепродажи а/м). Количество а/м ограниченно.',
		cars: [{
			model: '460',
			complectation: 'Executive 5',
			colorBody: 'black',
			colorCabin: 'brown',
			price: 4271000,
			benefit: 200000
		}]
	}, {
		id: 'lx',
		disclaimer_sup: '4',
		disclaimer: 'При покупке Lexus LX в обмен на ваш текущий автомобиль по программе Lexus Trade-in вам будет предоставлено преимущество в размере 300 000 рублей. Трейд-ин. С 29 декабря 2017 года по 31 января 2018 года года при условии сдачи автомобиля (а/м) с пробегом по программе Lexus Trade-in (программа обмена а/м с пробегом на новые) при покупке а/м Lexus LX 2017 года выпуска в любой из существующих комплектаций предоставляется выгода 300 000 рублей. Выгода достигается посредством предоставления скидки от максимальной цены перепродажи а/м. Количество а/м ограниченно.',
		cars: [{
			model: '570',
			complectation: 'Superior',
			colorBody: 'black',
			colorCabin: 'black',
			price: 6903000,
			benefit: 300000
		}, {
			model: '570',
			complectation: 'Superior',
			colorBody: 'black',
			colorCabin: 'reddish-brown',
			price: 6903000,
			benefit: 300000
		}, {
			model: '570',
			complectation: 'Luxury 21+',
			colorBody: 'black',
			colorCabin: 'black',
			price: 6664000,
			benefit: 300000
		}, {
			model: '450D',
			complectation: 'Executive 2',
			colorBody: 'black',
			colorCabin: 'reddish-brown',
			price: 6168000,
			benefit: 300000
		}]
	}, {
		id: 'nx',
		disclaimer_sup: '5',
		disclaimer: 'Получите преимущество в размере 100 000 рублей при покупке Lexus NX в обмен на ваш текущий автомобиль по программе Lexus Trade-in. Дисклеймер: Трейд-ин. При условии сдачи а/м с пробегом по программе Lexus Trade-in (программа обмена а/м с пробегом на новые) при покупке а/м:<br>- Lexus NX 200 AWD в комплектации (N1) Progressive (Прогрессив), произведенного в августе 2017 года<br>- Lexus NX 300 AWD в комплектации Premium (Премиум), произведенного в августе 2017 года<br>- Lexus NX 200, NX 200 AWD, NX 300 AWD, NX 300h AWD в любой из существующих комплектаций, произведенных начиная с сентября 2017 года предоставляется выгода 100 000 рублей. Выгода достигается посредством предоставления скидки от МЦП а/м. Количество а/м ограниченно.',
		cars: [{
			model: '300',
			complectation: 'Premium',
			colorBody: 'black',
			colorCabin: 'black',
			price: 2758000,
			benefit: 100000
		}, {
			model: '300',
			complectation: 'Premium',
			colorBody: 'grey',
			colorCabin: 'black',
			price: 2758000,
			benefit: 100000
		}, {
			model: '300',
			complectation: 'Premium',
			colorBody: 'red',
			colorCabin: 'black',
			price: 2758000,
			benefit: 100000
		}, {
			model: '300',
			complectation: 'Premium',
			colorBody: 'white',
			colorCabin: 'black',
			price: 2780500,
			benefit: 100000
		}, {
			model: '300',
			complectation: 'Premium',
			colorBody: 'blue',
			colorCabin: 'black',
			price: 2758000,
			benefit: 100000
		}, {
			model: '300',
			complectation: 'Exclusive 2 Safety',
			colorBody: 'black',
			colorCabin: 'red',
			price: 3326000,
			benefit: 100000
		}, {
			model: '300',
			complectation: 'Premium',
			colorBody: 'grey',
			colorCabin: 'black',
			price: 2758000,
			benefit: 100000
		}, {
			model: '300',
			complectation: 'Premium',
			colorBody: 'black',
			colorCabin: 'black',
			price: 2758000,
			benefit: 100000
		}, {
			model: '300',
			complectation: 'Premium',
			colorBody: 'white',
			colorCabin: 'black',
			price: 2780500,
			benefit: 100000
		}, {
			model: '300',
			complectation: 'F Sport Luxury',
			colorBody: 'blue',
			colorCabin: 'black',
			price: 3224000,
			benefit: 100000
		}, {
			model: '300',
			complectation: 'Progressive',
			colorBody: 'red',
			colorCabin: 'red',
			price: 2605000,
			benefit: 100000
		}, {
			model: '200',
			complectation: 'Progressive',
			colorBody: 'grey',
			colorCabin: 'black',
			price: 2375000,
			benefit: 100000
		}, {
			model: '200 AWD',
			complectation: 'Progressive',
			colorBody: 'grey',
			colorCabin: 'black',
			price: 2471000,
			benefit: 100000
		}, {
			model: '200 AWD',
			complectation: 'Progressive',
			colorBody: 'black',
			colorCabin: 'red',
			price: 2471000,
			benefit: 100000
		}, {
			model: '200 AWD',
			complectation: 'Progressive',
			colorBody: 'red',
			colorCabin: 'black',
			price: 2471000,
			benefit: 100000
		}, {
			model: '200 AWD',
			complectation: 'Progressive',
			colorBody: 'white',
			colorCabin: 'black',
			price: 2493500,
			benefit: 100000
		}, {
			model: '200 AWD',
			complectation: 'Progressive',
			colorBody: 'white',
			colorCabin: 'red',
			price: 2493500,
			benefit: 100000
		}, {
			model: '200 AWD',
			complectation: 'Progressive',
			colorBody: 'grey',
			colorCabin: 'black',
			price: 2471000,
			benefit: 100000
		}, {
			model: '200 AWD',
			complectation: 'Progressive',
			colorBody: 'black',
			colorCabin: 'black',
			price: 2471000,
			benefit: 100000
		}, {
			model: '200 AWD',
			complectation: 'Progressive',
			colorBody: 'black',
			colorCabin: 'red',
			price: 2471000,
			benefit: 100000
		}, {
			model: '200 AWD',
			complectation: 'Progressive',
			colorBody: 'red',
			colorCabin: 'black',
			price: 2471000,
			benefit: 100000
		}, {
			model: '200 AWD',
			complectation: 'Progressive',
			colorBody: 'blue',
			colorCabin: 'black',
			price: 2471000,
			benefit: 100000
		}]
	}]
}