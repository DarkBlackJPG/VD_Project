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



function a() {
	alert(b)
}