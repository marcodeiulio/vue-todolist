Vue.config.devtools = true;

const root = new Vue({
	el: '#root',
	data: {
		newTodo: '',
		todos: [
			{ text: 'Vue Link One', check: false },
			{ text: 'Vue Link Two', check: false },
			{ text: 'Vue Link Three', check: false },
		],
	},
	methods: {
		removeTodo(index) {
			this.todos.splice(index, 1);
		},
		addTodo() {
			if (this.newTodo.trim()) this.todos.push({ text: this.newTodo, check: false });
			this.newTodo = '';
		},
	},
})