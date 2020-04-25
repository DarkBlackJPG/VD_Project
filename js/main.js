new Vue({
	el: '#treninzi',
	data: {
		currentFilter: 'Svi',
		projects: [
			{title: "Stop Pilates", image: "../../assets/trening2.png", category: 'Pilates', link: "stop_pilates.html"},
			{title: "Reformer Pilates", image: "../../assets/trening3.png", category: 'Pilates', link: "reformer_pilates.html"},
			{title: "Klasicni pilates", image: "../../assets/trening3.png", category: 'Pilates', link: "klasicni_pilates.html"},
			{title: "Trbusnjaci", image: "../../assets/trening4.png", category: 'Core', link: "trbusnjaci.html"},
			{title: "Trening izdrzljivosti", image: "../../assets/trening5.png", category: 'Core', link: "trening_izdrzljivosti.html"},
			{title: "Core Box", image: "../../assets/core-strength-fitness.jpg", category: 'Core', link: "core_box.html"},
			{title: "Sklekovi", image: "../../assets/Working-Out-With-Chalk.jpg", category: 'Core', link: "sklekovi.html"},
			{title: "HIIT", image: "../../assets/a-man-grabs-a-metallic-handle-hanging-from-the-ceiling.jpg", category: 'Cardio', link: "hiit.html"},
			{title: "Trcanje", image: "../../assets/exercise-free-weights.jpg", category: 'Cardio', link: "trcanje.html"},
			{title: "Stepenice", image: "../../assets/training1.png", category: 'Cardio', link: "stepenice.html"},
			{title: "Feng Shui", image: "../../assets/woman-prepares-for-workout.jpg", category: 'Joga', link: "feng_shui.html"},
			{title: "Moderna joga", image: "../../assets/landing.jpg", category: 'Joga', link: "moderna_joga.html"},
			{title: "Stop Joga", image: "../../assets/landing.png", category: 'Joga', link: "stop_joga.html"},

        ],
        descriptions: [
            {category: 'Pilates', description: "Lorem ipsum pilates" },
            {category: 'Core', description: "Lorem ipsum Core" },
            {category: 'Cardio', description: "Lorem ipsum Cardio" },
            {category: 'Joga', description: "Lorem ipsum Joga" },
        ]
	},
	methods: {
		setFilter: function(filter) {
			this.currentFilter = filter;
		}
	}
})


Date.prototype.addDays = function(days, time) {
    var date = new Date(this.valueOf());
	date.setDate(date.getDate() + days);
	let format = ""+date.getFullYear()+"-"+
							( (date.getMonth()+1) < 10 ? "0"+(date.getMonth()+1) : (date.getMonth()+1))
							+"-"+ (date.getDate() < 10 ? "0"+date.getDate() : date.getDate())+
							"T"+time+":00"
    return format;
}


var treninzi = {
		"joga" : [
			{
				'name' : 'feng-shui',
				"data" :
					{
						"rejting" : [
							{
								"user" : "Marko",
								"score" : 4,
								"comment" : "nije bas mnogo kul"
							},
							{
								"user" : "Marko2",
								"score" : 5,
								"comment" : "Bas je mnogo kul"
							},

						],
						"termini" : [
							{
								"datum" : new Date().addDays(0, "21:56"),
								"zakazano" : 5
							},
							{
								"datum" : new Date().addDays(4, "13:00"),
								"zakazano" : 7
							},
							{
								"datum" : new Date().addDays(4, "13:00"),
								"zakazano" : 8
							},
						],
						"maxMesta" : 20,
						"tezina" : 5,
					}

			},
			{
				"name" : "moderna-joga",
				"data" : {
					"rejting" : [
						{
							"user" : "Marko",
							"score" : 4,
							"comment" : "nije bas mnogo kul"
						},
						{
							"user" : "Marko2",
							"score" : 5,
							"comment" : "Bas je mnogo kul"
						},

					],
					"termini" : [
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 5
						},
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 7
						},
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 8
						},
					],
					"maxMesta" : 20,
					"tezina" : 5,
				},
			},
			{
				'name' : "stop-joga",
				"data" : {
					"rejting" : [
						{
							"user" : "Marko",
							"score" : 4,
							"comment" : "nije bas mnogo kul"
						},
						{
							"user" : "Marko2",
							"score" : 5,
							"comment" : "Bas je mnogo kul"
						},

					],
					"termini" : [
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 5
						},
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 7
						},
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 8
						},
					],
					"maxMesta" : 20,
					"tezina" : 5,
				},
			}

		],
		"core" : [
			{
				'name' : 'core-box',
				"data" :
					{
						"rejting" : [
							{
								"user" : "Marko",
								"score" : 4,
								"comment" : "nije bas mnogo kul"
							},
							{
								"user" : "Marko2",
								"score" : 5,
								"comment" : "Bas je mnogo kul"
							},

						],
						"termini" : [
							{
								"datum" : new Date().addDays(4, "13:00"),
								"zakazano" : 5
							},
							{
								"datum" : new Date().addDays(4, "13:00"),
								"zakazano" : 7
							},
							{
								"datum" : new Date().addDays(4, "13:00"),
								"zakazano" : 8
							},
						],
						"maxMesta" : 20,
						"tezina" : 5,
					}

			},
			{
				"name" : "trbusnjaci",
				"data" : {
					"rejting" : [
						{
							"user" : "Marko",
							"score" : 4,
							"comment" : "nije bas mnogo kul"
						},
						{
							"user" : "Marko2",
							"score" : 5,
							"comment" : "Bas je mnogo kul"
						},

					],
					"termini" : [
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 5
						},
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 7
						},
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 8
						},
					],
					"maxMesta" : 20,
					"tezina" : 5,
				},
			},
			{
				"name" : "sklekovi",
				"data" : {
					"rejting" : [
						{
							"user" : "Marko",
							"score" : 4,
							"comment" : "nije bas mnogo kul"
						},
						{
							"user" : "Marko2",
							"score" : 5,
							"comment" : "Bas je mnogo kul"
						},

					],
					"termini" : [
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 5
						},
						{
							"datum" : new Date().addDays(3, "13:00"),
							"zakazano" : 7
						},
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 8
						},
					],
					"maxMesta" : 20,
					"tezina" : 5,
				},
			},
			{
				'name' : "trening-izdrzljivosti",
				"data" : {
					"rejting" : [
						{
							"user" : "Marko",
							"score" : 4,
							"comment" : "nije bas mnogo kul"
						},
						{
							"user" : "Marko2",
							"score" : 5,
							"comment" : "Bas je mnogo kul"
						},

					],
					"termini" : [
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 5
						},
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 7
						},
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 8
						},
					],
					"maxMesta" : 20,
					"tezina" : 5,
				},
			}

		],
		"cardio" : [
			{
				'name' : 'hiit',
				"data" :
					{
						"rejting" : [
							{
								"user" : "Marko",
								"score" : 4,
								"comment" : "nije bas mnogo kul"
							},
							{
								"user" : "Marko2",
								"score" : 5,
								"comment" : "Bas je mnogo kul"
							},

						],
						"termini" : [
							{
								"datum" : new Date().addDays(4, "13:00"),
								"zakazano" : 5
							},
							{
								"datum" : new Date().addDays(4, "13:00"),
								"zakazano" : 7
							},
							{
								"datum" : new Date().addDays(4, "13:00"),
								"zakazano" : 8
							},
						],
						"maxMesta" : 20,
						"tezina" : 5,
					}

			},
			{
				"name" : "trcanje",
				"data" : {
					"rejting" : [
						{
							"user" : "Marko",
							"score" : 4,
							"comment" : "nije bas mnogo kul"
						},
						{
							"user" : "Marko2",
							"score" : 5,
							"comment" : "Bas je mnogo kul"
						},

					],
					"termini" : [
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 5
						},
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 7
						},
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 8
						},
					],
					"maxMesta" : 20,
					"tezina" : 5,
				},
			},
			{
				'name' : "stepenice",
				"data" : {
					"rejting" : [
						{
							"user" : "Marko",
							"score" : 4,
							"comment" : "nije bas mnogo kul"
						},
						{
							"user" : "Marko2",
							"score" : 5,
							"comment" : "Bas je mnogo kul"
						},

					],
					"termini" : [
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 5
						},
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 7
						},
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 8
						},
					],
					"maxMesta" : 20,
					"tezina" : 5,
				},
			}

		],
		"pilates" : [
			{
				'name' : 'stop-pilates',
				"data" :
					{
						"rejting" : [
							{
								"user" : "Marko",
								"score" : 4,
								"comment" : "nije bas mnogo kul"
							},
							{
								"user" : "Marko2",
								"score" : 5,
								"comment" : "Bas je mnogo kul"
							},

						],
						"termini" : [
							{
								"datum" : new Date().addDays(4, "13:00"),
								"zakazano" : 5
							},
							{
								"datum" : new Date().addDays(4, "13:00"),
								"zakazano" : 7
							},
							{
								"datum" : new Date().addDays(4, "13:00"),
								"zakazano" : 8
							},
						],
						"maxMesta" : 20,
						"tezina" : 5,
					}

			},
			{
				"name" : "klasicni-pilates",
				"data" : {
					"rejting" : [
						{
							"user" : "Marko",
							"score" : 4,
							"comment" : "nije bas mnogo kul"
						},
						{
							"user" : "Marko2",
							"score" : 5,
							"comment" : "Bas je mnogo kul"
						},

					],
					"termini" : [
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 5
						},
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 7
						},
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 8
						},
					],
					"maxMesta" : 20,
					"tezina" : 5,
				},
			},
			{
				'name' : "reformer-pilates",
				"data" : {
					"rejting" : [
						{
							"user" : "Marko",
							"score" : 4,
							"comment" : "nije bas mnogo kul"
						},
						{
							"user" : "Marko2",
							"score" : 5,
							"comment" : "Bas je mnogo kul"
						},

					],
					"termini" : [
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 5
						},
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 7
						},
						{
							"datum" : new Date().addDays(4, "13:00"),
							"zakazano" : 8
						},
					],
					"maxMesta" : 20,
					"tezina" : 5,
				},
			}

		],
}

if (window.sessionStorage.getItem('treninzi') == null) {
	window.sessionStorage.setItem('treninzi', JSON.stringify(treninzi))
}

function generateJSONDataFromParam(param) {
	let jsonDataForParam = []

	for(let i = 0; i <  param.length; i++){
		let tempObject = param[i]
		let jsonObject = {}
		jsonObject['name'] = "list-"+tempObject['name']
		let jsonObjectTermini = []

		let tempDates = tempObject['data']['termini']
		let tempObjectMaxPeople = tempObject['data']['maxMesta']
		// let tempoIntensity = tempObject['data']['tezina']

		for (let j = 0; j < tempDates.length; j++) {

			let date = tempDates[j]['datum']

			let terminObject = new Object()
					terminObject['dan'] = new Date(date).getDay()
					terminObject['datetime'] = tempDates[j]['datum']

					terminObject['vreme'] = new Date(tempDates[j]['datum']).getHours() +":"+
											(new Date(tempDates[j]['datum']).getMinutes() < 10 ? "0"+new Date(tempDates[j]['datum']).getMinutes() : new Date(tempDates[j]['datum']).getMinutes())
					terminObject['preostaloMesta'] = tempObjectMaxPeople - tempDates[j]['zakazano']

			jsonObjectTermini.push(terminObject)
		}

		jsonObject['termini'] = jsonObjectTermini

		jsonDataForParam.push(jsonObject)

	}



	return jsonDataForParam;
}

function 	combineJSON (...param){
		let jsonArray = []
		for(let i = 0; i < param.length; i++){
			let paramData = param[i]
			for(let j = 0; j < paramData.length; j++) {
				jsonArray.push(paramData[j])
			}
		}

		return jsonArray
}

var trainingTableVue = null

function createVueElement() {
	if(window.sessionStorage.getItem('treninzi') == null) {
		return
	}
	let sessionStorage = JSON.parse(window.sessionStorage.getItem('treninzi'))
	let joga = sessionStorage['joga']
	let core = sessionStorage['core']
	let pilates = sessionStorage['pilates']
	let cardio = sessionStorage['cardio']

	let jogaJSON = generateJSONDataFromParam(joga)
	let coreJSON = generateJSONDataFromParam(core)
	let pilatesJSON = generateJSONDataFromParam(pilates)
	let cardioJSON = generateJSONDataFromParam(cardio)

	let combinedJSON = combineJSON(jogaJSON, coreJSON, pilatesJSON, cardioJSON)



	trainingTableVue = new Vue ({
		el: '#trainingTableContainer',
		data: {
			trainings: combinedJSON
		},
		methods: {
			updateData: function(param) {
				this.trainings = param
			},
			getData: function() {
				return this.trainings
			}
		}
	})

	/** Ovo gore stavlja na default vrednosti pa ja dole menjam u cancel */

	let userAppointments = window.sessionStorage.getItem('userAppointments')

	if(userAppointments != null) {
		userAppointments = userAppointments.split(',')
		for(let i = 0; i < userAppointments.length - 1; i++) {	
			changeToCancel(userAppointments[i])
		}
	}

	disableButtonDependingOnTime()
	
}

function changeToCancel(id) {
	$('#'+id).text('Otkazi')
	$('#'+id).attr('onclick', 'cancelAppointment(this)')
}

function changeToAppoint(id) {
	$('#'+id).text('Zakazi')
	$('#'+id).attr('onclick', 'userMakeTrainingAppointment(this)')
}

function disableButton(button) {
	$('#'+button).attr('disabled', true)
}

function enableButton(button) {
	$('#'+button).attr('disabled', false)
}


/**
 * 	
 * TODO Kopiranje koda sa userMakeAppointment, moze da se stavi boolean!!
 * Razlika je sabiranje/oduzimanje i user appointments u session brise id
 * 
 * 
 */
function cancelAppointment(button) {
	let buttonId = $(button).attr('id').split('_')

	let trainingName = buttonId[0]
	let index = buttonId[1]

	let vueData = trainingTableVue.getData()

	for (var i = 0; i < vueData.length; i++) {
		let tempName = vueData[i].name
			if(tempName == trainingName) {
				vueData[i]['termini'][index]['preostaloMesta']++
				break;
			}
	}

	trainingTableVue.updateData(vueData)

	let sessionStorageData = JSON.parse(window.sessionStorage.getItem('treninzi'))
	let hardBreak = false;
	for(let i of Object.keys(sessionStorageData)) {
		if(hardBreak == true)
				break
		for(let j = 0; j < sessionStorageData[i].length; j++) {
			
			if("list-"+sessionStorageData[i][j]['name'] == trainingName) {
				
				sessionStorageData[i][j]['data']['termini'][index]['zakazano']--
				hardBreak = true;
				break
			}
		}
	}


	window.sessionStorage.setItem('treninzi', JSON.stringify(sessionStorageData))
	
	
	
	//updateTrainingTableData()
	let userArray = ""
	let sessionUser = window.sessionStorage.getItem('userAppointments')
	if(sessionUser != null)
		userArray = sessionUser
	else{
		alert('Fatal error')
		return
	}
	
	userArray = userArray.replace($(button).attr('id')+",",'')
	window.sessionStorage.setItem('userAppointments', userArray)


	/** Menja zakazivanje u otkazivanje */

	changeToAppoint($(button).attr('id'))



}

function disableButtonDependingOnTime() {
	let vueDataList = trainingTableVue.getData();
	let now = new Date()
	now.setMinutes(now.getMinutes() - 30)
	for(let i = 0; i < vueDataList.length; i++) {
		let name = vueDataList[i]['name']
		for(let j = 0; j < vueDataList[i]['termini'].length;j++) {
			let terminDateTime = new Date(vueDataList[i]['termini'][j]['datetime'])
			
			if(terminDateTime < now ) {
				$('#'+name+"_"+j).attr('disabled', true)
			}
		}
	}

}

setInterval(disableButtonDependingOnTime(), 10000)

function userMakeTrainingAppointment(button) {
	let sessionUser = window.sessionStorage.getItem('userAppointments')
	let buttonId = $(button).attr('id').split('_')
	
	if(sessionUser.includes($(button).attr('id')))
	{
		Swal.fire({
			icon: 'error',
			title: 'Ne mozete vise puta da zakazete!',
		  })
		return
	}
	

	let trainingName = buttonId[0]
	let index = buttonId[1]

	let vueData = trainingTableVue.getData()

	for (var i = 0; i < vueData.length; i++) {
		let tempName = vueData[i].name
			if(tempName == trainingName) {
				if (vueData[i]['termini'][index]['preostaloMesta'] <= 0) {
					Swal.fire({
						icon: 'error',
						title: 'Nema vise mesta!',
					  })
						return
						
				}
				vueData[i]['termini'][index]['preostaloMesta']--
				break;
			}
	}

	trainingTableVue.updateData(vueData)
	let sessionStorageData = JSON.parse(window.sessionStorage.getItem('treninzi'))
	let hardBreak = false;
	for(let i of Object.keys(sessionStorageData)) {
		if(hardBreak == true)
				break
		for(let j = 0; j < sessionStorageData[i].length; j++) {
			
			if("list-"+sessionStorageData[i][j]['name'] == trainingName) {
				
				sessionStorageData[i][j]['data']['termini'][index]['zakazano']++
				hardBreak = true;
				break
			}
		}
	}


	window.sessionStorage.setItem('treninzi', JSON.stringify(sessionStorageData))
	
	
	
	//updateTrainingTableData()
	let userArray = ""
	
	if(sessionUser != null)
		userArray = sessionUser
	
	userArray += trainingName+"_"+index+","
	window.sessionStorage.setItem('userAppointments', userArray)


	/** Menja zakazivanje u otkazivanje */

	let userAppointments = window.sessionStorage.getItem('userAppointments')

	if(userAppointments != null) {
		userAppointments = userAppointments.split(',')
		for(let i = 0; i < userAppointments.length - 1; i++) {	
			changeToCancel(userAppointments[i])
		}
	}


}

function nutritionistAppointment(param) {


	let forma = param
	let name = forma.ime.value
	let prezime = forma.prezime.value
	let email = forma.email.value
	let datum = forma.date.value
	let tel = forma.tel.value
	let opis = forma.opis.value
	if(new Date(datum) < new Date()) {
		Swal.fire({
			title: 'Datum ne moze da bude u proslosti!',
			icon: 'error',
		  })
		  
		return
	}
	let stringForPDF = "Ime: " + name+"\n"
					 + "Prezime: " + prezime + "\n"
					 + "Mejl: " + email + "\n"
					 + "Zahtev: " + datum + "\n"
					 + "Telefon: " + tel + "\n"
					 + "Opis: " + opis + "\n"
	Swal.fire({
		title: 'Uspesno poslat mejl!',
		text: "Da li hocete da preuzmete pdf fajl zahteva?",
		icon: 'success',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		cancelButtonText: 'Ne treba',
		confirmButtonText: 'Moze!'
	  }).then((result) => {
		if (result.value) {
			var doc = new jsPDF()

			doc.text(stringForPDF, 10, 10)
			doc.save('ZahtevZaNutricionistu.pdf')
		}
	  })
}

function massageAppointment(param) {


	let forma = param
	let name = forma.ime.value
	let prezime = forma.prezime.value
	let email = forma.email.value
	let datum = forma.date.value
	let tel = forma.tel.value
	let opis = forma.opis.value
	if(new Date(datum) < new Date()) {
		Swal.fire({
			title: 'Datum ne moze da bude u proslosti!',
			icon: 'error',
		  })
		  
		return
	}
	let stringForPDF = "Ime: " + name+"\n"
					 + "Prezime: " + prezime + "\n"
					 + "Mejl: " + email + "\n"
					 + "Zahtev: " + datum + "\n"
					 + "Telefon: " + tel + "\n"
					 + "Opis: " + opis + "\n"
	Swal.fire({
		title: 'Uspesno poslat mejl!',
		text: "Da li hocete da preuzmete pdf fajl zahteva?",
		icon: 'success',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		cancelButtonText: 'Ne treba',
		confirmButtonText: 'Moze!'
	  }).then((result) => {
		if (result.value) {
			var doc = new jsPDF()

			doc.text(stringForPDF, 10, 10)
			doc.save('ZahtevZaMasazu.pdf')
		}
	  })
}
var myAccountVue = null
function loadAppointments() {

	let sessionAppointment = JSON.parse(window.sessionStorage.getItem('userAppointments')).split(',')
	let sessionStorageData = JSON.parse(window.sessionStorage.getItem('treninzi'))
	let userHasAppointments = sessionAppointment != null
	let necessaryData = []
	for(let i of Object.keys(sessionStorageData)) {
		for(let j = 0; j < sessionStorageData[i].length; j++) {
			for(let z = 0; z < sessionAppointment.length - 1; z++) {
				
			}
		}
	}

	myAccountVue = new Vue({
		el: '#appointmentsMojNalog',
		data: {
			hasAppointments: userHasAppointments,
			appointments: [
				{title: "Stop Pilates", image: "../../assets/trening2.png", category: 'Pilates', link: "stop_pilates.html"},
				
			],
		},
		methods: {
			setFilter: function(filter) {
				this.currentFilter = filter;
			}
		}
	})

}

/**
 * TODO: Treba napraviti otkazivanje
 * Granicni slucajevi:
 * 	1) Prosao je vremenski termin - ne moze da se zakaze - treba staviti disable na dugme
 * 	2) Moze otkazivanje 30 minuta pre pocetka - disable na dugme
 * 	3) 
 */