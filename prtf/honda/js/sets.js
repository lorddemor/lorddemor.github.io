var sets = {
	phone: '+78122108843', //Телефон во всех ссылках
	ya_metrika: 0, // номер счётчика или 0, чтобы отключить
	email_title: 'Заявка на Honda', // Тема письма с заявкой
	email_addresses: 'mbimanager@gmail.com||mbimanager@gmail.com', // Адреса для писем с заявкой. || - разделитель.
	time_work_from: 9, // Начало работы колл-центра (в часах)
	time_work_to: 21, // Конец работы колл-центра (в часах)
	mapLat: 59.991557,
	mapLong: 30.254904,
	mapZoom: 16,
	colors: [{
		id: 'black',
		name: 'Crystal Black Pearl'
	}, {
		id: 'white',
		name: 'White Orchid Pearl'
	}, {
		id: 'white-d',
		name: 'White Diamond Pearl'
	}, {
		id: 'titanium',
		name: 'Urban Titanium Metallic'
	}, {
		id: 'brown',
		name: 'Golden Brown Metallic'
	}, {
		id: 'coffee',
		name: 'Kona Coffee Metallic'
	}, {
		id: 'steel',
		name: 'Modern Steel Metallic'
	}, {
		id: 'silver',
		name: 'Alabaster Silver Metallic'
	}, {
		id: 'silver-l',
		name: 'Lunar Silver Metallic'
	}, {
		id: 'metal',
		name: 'Polished Metal Metallic'
	}, {
		id: 'blue',
		name: 'Deep Ocean Blue'
	}, {
		id: 'blue-t',
		name: 'Twilight Blue Metallic'
	}, {
		id: 'blue-o',
		name: 'Obsidian Blue Pearl'
	}, {
		id: 'sunset',
		name: 'Copper Sunset Pearl'
	}, {
		id: 'red',
		name: 'Passion Red Pearl'
	}, {
		id: 'red-r',
		name: 'Rally Red'
	}, {
		id: 'red-b',
		name: 'Basque Red Pearl'
	}, {
		id: 'olive',
		name: 'Dark Olive Metallic'
	}, {
		id: 'gunmetal',
		name: 'Gunmetal Metallic'
	}],
	models: [{
			id: 'cr-v-5',
			name: 'Honda CR-V 2017 5 поколение',
			cars: [{
				complectation: 'CR-V 2.0 Elegance CVT\'17',
				price: 1650000,
				benefit: 219900,
				colors: ['red-b', 'black', 'olive', 'gunmetal', 'silver-l', 'steel', 'blue-o', 'red', 'white-d']
			}, {
				complectation: 'CR-V 2.0 Lifestyle CVT\'17',
				price: 1950000,
				benefit: 209900,
				colors: ['red-b', 'black', 'olive', 'gunmetal', 'silver-l', 'steel', 'blue-o', 'red', 'white-d']
			}, {
				complectation: 'CR-V 2.0 Executive CVT\'17',
				price: 2100000,
				benefit: 199900,
				colors: ['red-b', 'black', 'olive', 'gunmetal', 'silver-l', 'steel', 'blue-o', 'red', 'white-d']
			}, {
				complectation: 'CR-V 2.4 Lifestyle CVT\'17',
				price: 2100000,
				benefit: 199900,
				colors: ['red-b', 'black', 'olive', 'gunmetal', 'silver-l', 'steel', 'blue-o', 'red', 'white-d']
			}, {
				complectation: 'CR-V 2.4 Executive CVT\'17',
				price: 2300000,
				benefit: 249900,
				colors: ['red-b', 'black', 'olive', 'gunmetal', 'silver-l', 'steel', 'blue-o', 'red', 'white-d']
			}, {
				complectation: 'CR-V 2.4 Prestige CVT\'17',
				price: 2400000,
				benefit: 289900,
				colors: ['red-b', 'black', 'olive', 'gunmetal', 'silver-l', 'steel', 'blue-o', 'red', 'white-d']
			}]
		}, {
			id: 'cr-v-4',
			name: 'Honda CR-V 2017 4 поколение',
			cars: [{
				complectation: 'CR-V Elegance 2.0 5AT 4WD',
				price: 1499000,
				benefit: 270900,
				colors: ['black', 'white', 'white-d', 'titanium', 'brown', 'coffee', 'steel', 'silver', 'metal', 'blue', 'blue-t', 'sunset', 'red', 'red-r']
			}, {
				complectation: 'CR-V 2.0 Sport 5AT 4WD',
				price: 1699000,
				benefit: 200900,
				colors: ['black', 'white', 'white-d', 'titanium', 'brown', 'coffee', 'steel', 'silver', 'metal', 'blue', 'blue-t', 'sunset', 'red', 'red-r']
			}, {
				complectation: 'CR-V Sport 2.0 5AT 4WD',
				price: 1699000,
				benefit: 200900,
				colors: ['black', 'white', 'white-d', 'titanium', 'brown', 'coffee', 'steel', 'silver', 'metal', 'blue', 'blue-t', 'sunset', 'red', 'red-r']
			}]
		}, {
			id: 'pilot',
			name: 'Honda Pilot',
			cars: [{
					complectation: 'Pilot 3.0 Premium 6AT 17',
					price: 3300000,
					benefit: 850000,
					colors: ['black', 'blue', 'blue-o', 'steel', 'silver-l', 'olive', 'red', 'white']
				}, {
					complectation: 'Pilot 3.0 Premium 6AT 17',
					price: 3300000,
					benefit: 850000,
					colors: ['black', 'blue', 'blue-o', 'steel', 'silver-l', 'olive', 'red', 'white']
				}, {
					complectation: 'Pilot 3.0 Premium 6AT 17',
					price: 3300000,
					benefit: 850000,
					colors: ['black', 'blue', 'blue-o', 'steel', 'silver-l', 'olive', 'red', 'white']
				}, {
					complectation: 'Pilot 3.0 Premium 6AT 17',
					price: 3300000,
					benefit: 850000,
					colors: ['black', 'blue', 'blue-o', 'steel', 'silver-l', 'olive', 'red', 'white']
				}, {
					complectation: 'Pilot 3.0 Premium 6AT 17',
					price: 3300000,
					benefit: 850000,
					colors: ['black', 'blue', 'blue-o', 'steel', 'silver-l', 'olive', 'red', 'white']
				}, {
					complectation: 'Pilot 3.0 Executive 6AT 17',
					price: 3150000,
					benefit: 860000,
					colors: ['black', 'blue', 'blue-o', 'steel', 'silver-l', 'olive', 'red', 'white']
				}, {
					complectation: 'Pilot 3.0 Executive 6AT 17',
					price: 3150000,
					benefit: 860000,
					colors: ['black', 'blue', 'blue-o', 'steel', 'silver-l', 'olive', 'red', 'white']
				}, {
					complectation: 'Pilot 3.0 Premium 6AT 17',
					price: 3300000,
					benefit: 850000,
					colors: ['black', 'blue', 'blue-o', 'steel', 'silver-l', 'olive', 'red', 'white']
				}, {
					complectation: 'Pilot 3.0 Premium 6AT 17',
					price: 3300000,
					benefit: 850000,
					colors: ['black', 'blue', 'blue-o', 'steel', 'silver-l', 'olive', 'red', 'white']
				}, {
					complectation: 'Pilot 3.0 Executive 6AT 17',
					price: 3150000,
					benefit: 860000,
					colors: ['black', 'blue', 'blue-o', 'steel', 'silver-l', 'olive', 'red', 'white']
				}, {
					complectation: 'Pilot 3.0 Executive 6AT 17',
					price: 3150000,
					benefit: 860000,
					colors: ['black', 'blue', 'blue-o', 'steel', 'silver-l', 'olive', 'red', 'white']
				}

			]
		}

	]
}