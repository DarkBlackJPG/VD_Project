var vueForTrainingSearch = new Vue({
	el: '#treninzi',
	data: {
		language: true,
		currentFilter: 'Svi',								
		projects: [								// Opis pojedinacnih treninga
			{id: 1,  tezina: 3, trajanje: 60, description: "Lorem ipsum", description_en: "Lorem ipsum", title: "Stop Pilates", title_en: "Stop Pilates", image: "../assets/trening2.png", category: 'Pilates', link: "stop-pilates"},
			{id: 2,  tezina: 4, trajanje: 45, description: "Lorem ipsum", description_en: "Lorem ipsum", title: "Reformer Pilates",title_en: "Reformer Pilates", image: "../assets/trening3.png", category: 'Pilates', link: "reformer-pilates"},
			{id: 3,  tezina: 2, trajanje: 60, description: "Lorem ipsum", description_en: "Lorem ipsum", title: "Klasicni pilates",title_en: "Classic Pilates", image: "../assets/trening3.png", category: 'Pilates', link: "klasicni-pilates"},
			{id: 4,  tezina: 1, trajanje: 45, description: "Lorem ipsum", description_en: "Lorem ipsum", title: "Trbusnjaci",title_en: "Sit ups", image: "../assets/trening4.png", category: 'Core', link: "trbusnjaci"},
			{id: 5,  tezina: 5, trajanje: 60, description: "Lorem ipsum", description_en: "Lorem ipsum", title: "Trening izdrzljivosti",title_en: "Endurance training", image: "../assets/trening5.png", category: 'Core', link: "trening-izdrzljivosti"},
			{id: 6,  tezina: 5, trajanje: 45, description: "Lorem ipsum", description_en: "Lorem ipsum", title: "Core Box",title_en: "Core Box", image: "../assets/core-strength-fitness.jpg", category: 'Core', link: "core-box"},
			{id: 7,  tezina: 4, trajanje: 60, description: "Lorem ipsum", description_en: "Lorem ipsum", title: "Sklekovi",title_en: "Push Ups", image: "../assets/Working-Out-With-Chalk.jpg", category: 'Core', link: "sklekovi"},
			{id: 8,  tezina: 3, trajanje: 55, description: "Lorem ipsum", description_en: "Lorem ipsum", title: "HIIT",title_en: "HIIT", image: "../assets/a-man-grabs-a-metallic-handle-hanging-from-the-ceiling.jpg", category: 'Cardio', link: "hiit"},
			{id: 9,  tezina: 2, trajanje: 74, description: "Lorem ipsum", description_en: "Lorem ipsum", title: "Trcanje",title_en: "Running", image: "../assets/exercise-free-weights.jpg", category: 'Cardio', link: "trcanje"},
			{id: 10, tezina: 3, trajanje: 66, description: "Lorem ipsum", description_en: "Lorem ipsum",  title: "Stepenice",title_en: "Stairs", image: "../assets/training1.png", category: 'Cardio', link: "stepenice"},
			{id: 11, tezina: 3, trajanje: 62, description: "Lorem ipsum", description_en: "Lorem ipsum",  title: "Feng Shui",title_en: "Feng Shui", image: "../assets/woman-prepares-for-workout.jpg", category: 'Joga', link: "feng-shui"},
			{id: 12, tezina: 1, trajanje: 61, description: "Lorem ipsum", description_en: "Lorem ipsum",  title: "Moderna joga",title_en: "Modern Yoga", image: "../assets/landing.jpg", category: 'Joga', link: "moderna-joga"},
			{id: 13, tezina: 3, trajanje: 63, description: "Lorem ipsum", description_en: "Lorem ipsum",  title: "Stop Joga",title_en: "Stop Yoga", image: "../assets/landing.png", category: 'Joga', link: "stop-joga"},
        ],
        descriptions: [ // Opis grupe treninga 
            {category: 'Pilates', description: "Lorem ipsum pilates", description_en: "Asdf Pilates" },
            {category: 'Core', description: "Lorem ipsum Core", description_en: "Asdf Core" },
            {category: 'Cardio', description: "Spehar ipsum Cardio", description_en: "Asdf Cardio" },
            {category: 'Joga', description: "Lorem ipsum Joga", description_en: "Asdf Yoga" },
        ]
	},
	methods: {
		setFilter: function(filter) {
			this.currentFilter = filter;
		},
		sortByTezina: function() {
			function compare(a, b) {
				if (a.tezina < b.tezina)
				  return -1;
				if (a.tezina > b.tezina)
				  return 1;
				return 0;
			  }
			
			this.projects.sort(compare)
		},
		sortByTrajanje: function() {
			function compare(a, b) {
				if (a.trajanje < b.trajanje)
				  return -1;
				if (a.trajanje > b.trajanje)
				  return 1;
				return 0;
			  }
			
			this.projects.sort(compare)
		},
		sortByIme: function() {
			function compare(a, b) {
				if (a.title < b.title)
				  return -1;
				if (a.title > b.title)
				  return 1;
				return 0;
			  }
			
			this.projects.sort(compare)
		},
		
		resetFilter: function() {
			function compare(a, b) {
				if (a.id < b.id)
				  return -1;
				if (a.id > b.id)
				  return 1;
				return 0;
			  }
			
			this.projects.sort(compare)
		},
		findByAttr: function(attr, search) {
			for(let i = 0; i < this.projects.length; i++) {
				if(this.projects[i][attr] == search )
					return this.projects[i]
			}
			return null;
		},

	}
})

var trainingRatingsPage = new Vue({
	el: '#searchedTraining',
	data: {
		name: "",
		description: "",

		comments: [
			
		],
		videoLinks: [

		],
		photoGalleryLinks: [

		]
	},
	methods: {
		getAverageScore: function() {
			let avg = 0
			for(let i = 0; i < this.comments.length; i++) {
				avg += this.comments[i]['score']
			}
			
			return Math.round((avg/this.comments.length) * 100) / 100
		},
		appendComment: function(username, newRating, newComment) {
			this.comments.push({
				'user' : username,
				'score' : newRating,
				'comment' : newComment,
			})
		},
		setComments:function(commentsList) {
			this.comments = commentsList
		},
		setVideoLinks:function(videoLinks) {
			this.videoLinks = videoLinks
		},
		setPhotoGalleryLinks:function(PhotoLinks) {
			this.photoGalleryLinks = PhotoLinks
		},
		setName:function(name) {
			this.name = name
		},
		setDescription: function(description) {
			this.description = description
		},

	}
})

function checkIfUserAttended(trainingName) {
	
	let tempString = window.sessionStorage.getItem('userShowedUp')
	if(tempString == null || tempString == '')
		return
	tempString = tempString.split(',')
	for(let i = 0; i < tempString.length - 1; i++) {
		if("list-"+trainingName ==tempString[i].split('_')[0]){
			return true
		}
	}
	
	return false
}
function submitComment(form) {
	let queryString = window.location.search;
	let urlParams = new URLSearchParams(queryString);
	let trainingName = urlParams.get('type')
	if(!checkIfUserAttended(trainingName)){
		Swal.fire({
			icon: 'error',
			title: 'Ne mozete da komentarisere trening koji niste posetili!',
		})
		return
	}
	let username = form.username.value
	let komentar = form.komentar.value
	let ocena = eval(form.ocena.value)
	
	
	let sessionStorageData = JSON.parse(window.sessionStorage.getItem('treninzi'))

	let hardBreak = false
	if(trainingName == null || trainingName == '') {
		return
	}
	if(checkIfUserAttended(trainingName)) {
		for(let i of Object.keys(sessionStorageData)) {
			if(hardBreak)
				break
			for(let j = 0; j < sessionStorageData[i].length; j++) {
				
				if(sessionStorageData[i][j]['name'] == trainingName) {
					let newComment = new Object();
						newComment['user'] = username
						newComment['score'] = ocena
						newComment['comment'] = komentar
					sessionStorageData[i][j]['data']['rejting'].push(newComment)
					
					window.sessionStorage.setItem('treninzi', JSON.stringify(sessionStorageData))

					trainingRatingsPage.appendComment(username, ocena, komentar)


					hardBreak = true
					break
				}
			}	
		}
	} else {
		Swal.fire({
			icon: 'error',
			title: 'Ne mozete da komentarisere trening koji niste posetili!',
		})
		return
	}

}
function loadDataForTraining() {
	let queryString = window.location.search;

	let urlParams = new URLSearchParams(queryString);
	
	let trainingName = urlParams.get('type')
	let localData = vueForTrainingSearch.findByAttr('link', trainingName)
	let sessionStorageData = JSON.parse(window.sessionStorage.getItem('treninzi'))
	let hardBreak = false
	let ratingObject = null
	for(let i of Object.keys(sessionStorageData)) {
		if(hardBreak)
			break
		for(let j = 0; j < sessionStorageData[i].length; j++) {
			
			if(sessionStorageData[i][j]['name'] == trainingName) {
				ratingObject = sessionStorageData[i][j]['data']['rejting']
				break
			}
		}	
	}

	if(ratingObject == null)
		return

	trainingRatingsPage.setComments(ratingObject)
	trainingRatingsPage.setName(localData['title'])
	trainingRatingsPage.setDescription(localData['description'])
	let average = trainingRatingsPage.getAverageScore()

	let halfStar = false
	if(average % 1 != 0) {
		halfStar = true
	}

	let texter = ""
	for(let i = 0; i <=average-1; i++) {
		texter += '<i class="fas fa-star"></i>'
	}
	if(halfStar){
		texter += '<i class="fas fa-star-half-alt"></i>'
	}
	$('#avgScore').html(texter+"/"+average)
}	


Date.prototype.addDays = function(days, time) {
	var date = new Date(this.valueOf());
	if(days != 0)
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
								"datum" : new Date().addDays(6, "13:56"),
								"zakazano" : 5
							},
							{
								"datum" : "2020-04-26T22:50:00",
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


if(window.sessionStorage.getItem('treninzi') == null) {
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
			if(new Date().addDays(7, "00:00") < new Date(tempDates[j]['datum']))
				continue
			let dateBorder = new Date();
			dateBorder.setHours(dateBorder.getHours() - 24) // Get 1 day before

			if(dateBorder > new Date(tempDates[j]['datum']) )
				continue
			let date = tempDates[j]['datum']

			let terminObject = new Object()
					terminObject['dan'] = new Date(date).getDay()
					terminObject['datetime'] = tempDates[j]['datum']
					terminObject['date'] = tempDates[j]['datum'].split('T')[0]
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

	if(trainingTableVue != null) {
		delete trainingTableVue
		trainingTableVue = null
	}
	
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
	trainingTableVue.updateData(combinedJSON)
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
	if(typeof trainingTableVue == 'undefined' || trainingTableVue == null)
		return
	let vueDataList = trainingTableVue.getData();
	let now = new Date()
	let userAppointments = window.sessionStorage.getItem('userAppointments')
	if(userAppointments != null)
		userAppointments = userAppointments.split(',')
	for(let i = 0; i < vueDataList.length; i++) {
		let name = vueDataList[i]['name']
		for(let j = 0; j < vueDataList[i]['termini'].length;j++) {
			let terminDateTime = new Date(vueDataList[i]['termini'][j]['datetime'])
			let terminDateTimeTemp = new Date(vueDataList[i]['termini'][j]['datetime'])
			terminDateTime.setMinutes(terminDateTime.getMinutes() - 30)
			let fullname = name+"_"+j
			let zakazao = false
			if(userAppointments != null) {
				for(let k = 0; k < userAppointments.length; k++) {
					if (fullname == userAppointments[k])
					zakazao = true
				}
			}
			// Ako je zakazao i ako je manje od trideset 
			// ILI ako je pocelo
			
			if(((terminDateTime < now) && zakazao) || 
				 ((terminDateTimeTemp <= now) && !zakazao)) {
				$('#'+fullname).attr('disabled', true)
			}
		}
	}




}

setInterval(disableButtonDependingOnTime, 10000)
setInterval(checkUserArrival, 10000)
/**
 * Ako sto puta dodje, sto puta ce biti dodat
 */
function checkUserArrival() {
	
	let userAppointments = window.sessionStorage.getItem('userAppointments')
	if(userAppointments == null)
		return
	userAppointments =userAppointments.split(',')
	let sessionStorageData = JSON.parse(window.sessionStorage.getItem('treninzi'))
	let newUserApp = ""
	for(let i of Object.keys(sessionStorageData)) {
		for(let j = 0; j < sessionStorageData[i].length; j++) {
			for(let t = 0; t < userAppointments.length - 1; t++) {
				if('list-'+sessionStorageData[i][j]['name'] == userAppointments[t].split('_')[0]) {
					let temp = sessionStorageData[i][j]['data']['termini'][userAppointments[t].split('_')[1]]['datum']
					if(new Date() >= new Date(temp)) {
						let tempString = window.sessionStorage.getItem('userShowedUp')
						if(tempString == null)
							tempString = userAppointments[t] + ","
						else
							tempString += userAppointments[t] + ","

						
						window.sessionStorage.setItem('userShowedUp', tempString)

					} else {
						newUserApp += userAppointments[t]+","
					}
				}
			}
			
		}
	}
	console.log(newUserApp)
	window.sessionStorage.setItem('userAppointments', newUserApp)

}
function userMakeTrainingAppointment(button) {
	let buttonId = $(button).attr('id').split('_')
	let sessionUser = window.sessionStorage.getItem('userAppointments')
	if(sessionUser != null) {
		if(sessionUser.includes($(button).attr('id')))
		{
			Swal.fire({
				icon: 'error',
				title: 'Ne mozete vise puta da zakazete!',
			})
			return
		}
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

	disableButtonDependingOnTime()
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
function getDay(date) {
	switch(date){
		case 1:
			return 'Ponedeljak'
		case 2:
			return 'Utorak'
		case 3:
			return 'Sreda'
		case 4:
			return 'Cetvrtak'
		case 5:
			return 'Petak'
		case 6:
			return 'Subota'
		case 7: 
			return 'Nedelja'
	}
}
var myAccountVue = null
function loadAppointments() {

	let sessionAppointment = window.sessionStorage.getItem('userAppointments')
	let sessionStorageData = JSON.parse(window.sessionStorage.getItem('treninzi'))
	let userHasAppointments = (sessionAppointment != null && sessionAppointment != '')
	let necessaryData = []
	let buttonDisableListId = []
	if(userHasAppointments)
	{	
		sessionAppointment = sessionAppointment.split(',')
		
		for(let i of Object.keys(sessionStorageData)) {
			for(let j = 0; j < sessionStorageData[i].length; j++) { // vrsta treninga od tipa
				for(let z = 0; z < sessionAppointment.length - 1; z++) {
					if('list-'+sessionStorageData[i][j]['name'] == sessionAppointment[z].split('_')[0]) {
						let index = sessionAppointment[z].split('_')[1]
						let appointment = sessionStorageData[i][j]['data']['termini'][index]['datum']
						let myObject = new Object();
							let tempName = sessionStorageData[i][j]['name'].split('-')
							let name = ""
							for(let t = 0; t < tempName.length; t++) {
								name += tempName[t]+" "
							}
							
							myObject['id'] = sessionAppointment[z]
							myObject['name'] =name
							myObject['datum'] = appointment.split('T')[0]
							myObject['dan'] = getDay(new Date(appointment).getDay())
							myObject['vreme'] = (new Date(appointment).getHours() < 10 ? "0"+new Date(appointment).getHours() : new Date(appointment).getHours())
										  + ":"+
										  (new Date(appointment).getMinutes() < 10 ? "0"+new Date(appointment).getMinutes() : new Date(appointment).getMinutes())
							
							let tempDate = myObject['datum']+"T"+myObject['vreme']+":00"
							tempDate = new Date(tempDate)
							tempDate.setMinutes(tempDate.getMinutes() - 30)


							if(tempDate < new Date)
								buttonDisableListId.push(sessionAppointment[z])
							necessaryData.push(myObject)
					}
				}
			}
		}
	}
	myAccountVue = new Vue({
		el: '#appointmentsMojNalog',
		data: {
			hasAppointments: userHasAppointments,
			appointments: 
				necessaryData,
		},
		methods: {
			getData: function() {
				return this.appointments
			},
			setData: function(param) {
				if(Object.keys(param).length === 0 && param.constructor === Object) {
					this.hasAppointments = false
				}
				this.appointments = param
			}
		}
		
	})

	for(let i = 0; i < buttonDisableListId.length; i++)
		$('#'+buttonDisableListId[i]).attr('disabled', true)
	
}
function cancelTrainingFromMyAcc(button) {

	let sessionData = window.sessionStorage.getItem('userAppointments')
	if(sessionData == null) {
		return
	}
	sessionData = sessionData.replace($(button).attr('id')+',', '')
	window.sessionStorage.setItem('userAppointments', sessionData)
	let items = myAccountVue.getData()
	var filtered = items.filter(function(item) { 
		return item.id != $(button).attr('id');  
	 });
	 if(filtered.length == 0) {
		 filtered = new Object()
	 }
	 myAccountVue.setData(filtered)

	 let sessionStorageData = JSON.parse(window.sessionStorage.getItem('treninzi'))
	 let hardBreak = false
	 for(let i of Object.keys(sessionStorageData)) {
		 if(hardBreak)
		 	break
		for(let j = 0; j < sessionStorageData[i].length; j++) {
			
			if("list-"+sessionStorageData[i][j]['name'] == $(button).attr('id').split('_')[0]) {
				
				
				sessionStorageData[i][j]['data']['termini'][$(button).attr('id').split('_')[1]]['zakazano']--
				
				window.sessionStorage.setItem('treninzi', JSON.stringify(sessionStorageData))
				hardBreak = true;
				break
			}
		}
	}

	let s = window.sessionStorage.getItem('userAppointments')
	console.log(s)
}

function getAverageFromObjectList(objList, attributename) {
	let avg = 0
	for(let i = 0; i < objList.length; i++) {
		avg += objList[i][attributename]
	}

	return avg/objList.length
	
}

function getTopThree() {
	let sessionStorageData = JSON.parse(window.sessionStorage.getItem('treninzi'))
	let trainingList = []
	for(let i of Object.keys(sessionStorageData)) { // Iteriraj kroz sve grupe
		for(let j = 0; j < sessionStorageData[i].length; j++) { // Iteriraj kroz sve treninge
			
			let nameOfTraining = sessionStorageData[i][j]['name']
			let trainingData = sessionStorageData[i][j]['data']
			let averageOfTraining = getAverageFromObjectList(trainingData['rejting'], 'score')
			let numberOfComments = trainingData['rejting'].length
			let description = vueForTrainingSearch.findByAttr('link', nameOfTraining)['description']
			let nameList = nameOfTraining.split('-')
			let result = ''
			for(let i = 0; i < nameList.length; i++) {
				let temp = nameList[i]
			  	let res = temp.substr(0,1).toUpperCase() + temp.substr(1, temp.length)
				  result +=  res +" "
			  
			}

			let halfStar = false
			if(averageOfTraining % 1 != 0) {
				halfStar = true
			}

			let texter = ""
			for(let i = 0; i <=averageOfTraining-1; i++) {
				texter += '<i class="fas fa-star"></i>'
			}
			if(halfStar){
				texter += '<i class="fas fa-star-half-alt"></i>'
			}

			trainingList.push({
				'name' : result,
				'link' : nameOfTraining,
				'trainingAvgScore' : Math.round(averageOfTraining * 100)/100,
				'numberOfComments' : numberOfComments,
				'description' : description,
				'starTextByAverage' : texter
			})

		}	
	}

	
	trainingList.sort((a,b)=> b['trainingAvgScore'] - a['trainingAvgScore'])

	return [trainingList[0], trainingList[1], trainingList[2]]
}

var indexVueComponent = new Vue({
	el: '#ponuda',
	data:{
		elements: [

		]
	},
	methods:{
		populateElements(elementList) {
			this.elements = elementList
		}
	}
})
function loadIndexPage() {
	let bestRatedTrainings = getTopThree()

	indexVueComponent.populateElements(bestRatedTrainings)
}
