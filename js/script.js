Vue.config.devtools = true;

const root = new Vue({
	el: '#root',
	data: {
		newTodo: '',
		todos: [
			{
				text: 'Aggiungere pulsante "delete all"',
				check: false,
			},
			{
				text: 'Aggiungere pulsante "check all"',
				check: false,
			},
			{
				text: 'Aggiungere pulsante "uncheck all"',
				check: false,
			},
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
		checkItem(index) {
			this.todos[index].check = !this.todos[index].check;
			console.log(this.todos[index].check);
		},
		checkAllItems() {
			const todos = this.todos.map(obj => obj.check = true)
		},
		uncheckAllItems() {
			const todos = this.todos.map(obj => obj.check = false)
		},
		removeAll() {
			this.todos = [];
		},
	},
})