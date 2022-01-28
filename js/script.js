Vue.config.devtools = true;

const root = new Vue({
	el: '#root',
	data: {
		todos: [
			{ text: 'Vue Link One', check: false },
			{ text: 'Vue Link Two', check: false },
			{ text: 'Vue Link Three', check: false },
		],
	},
})