// var TodoRouter = Backbone.Router.extend({
// 	routes: {
// 		'about': 'showAbout',
// 		'todo/:id': 'getTodo',
// 		'search/:query': 'searchTodos',
// 		'search/:query/p:page': 'searchTodos',
// 		'todos/:id/download/*documentPath': 'downloadDocument',
// 		'*other': 'defaultRoute',
// 		'optional(/:item)': 'optionalItem',
// 		'named/optional/(y:z)': 'namedOptionalItem'
// 	},
// 	showAbout: function() {
// 	},
// 	getTodo: function(id) {
// 		console.log('You are trying to reach todo ' + id);
// 	},
// 	searchTodos: function(query, page) {
// 		var page_number = page || 1;
// 		console.log("Page number: " + page_number + ' of the results for todos containing the word: ' + query);
// 	},
// 	downloadDocument: function(id, path) {
// 	},
// 	defaultRoute: function(other) {
// 		console.log('Invalid. You attempted to reach: ' + other);
// 	}
// });

// var myTodoRoute = new TodoRouter();

// var TodoRouter = Backbone.Router.extend({

// 	routes: {
// 		'about': 'showAbout',
// 		'search/:query': 'searchTodos',
// 		'search/:query/p:page': 'searchTodos'
// 	},

// 	showAbout: function() { },

// 	searchTodos: function(query, page) {
// 		var page_number = page || 1;
// 		console.log('Page number: ' + page_number + ' of the results for todos containing the word: ' + query);
// 	}

// });

// var myTodoRoute = new TodoRouter();

// Backbone.history.start();

// var TodoRouter = Backbone.Router.extend({

// 	routes: {
// 		'todo/:id': 'viewTodo',
// 		'todo/:id/edit': 'editTodo'
// 	},

// 	viewTodo: function(id) {
// 		console.log('View todo requested.');
// 		this.navigate('todo/' + id + '/edit');
// 	},

// 	editTodo: function(id) {
// 		console.log('Edit todo opened.');
// 	}

// });

// var myTodoRoute = new TodoRouter();

// Backbone.history.start();

var TodoRouter = Backbone.Router.extend({

	routes: {
		'todo/:id': 'viewTodo',
		'todo/:id/edit': 'editTodo'
	},

	viewTodo: function(id) {
		console.log('View todo requested.');
		this.navigate('todo/' + id + '/edit', { trigger: false });
	},

	editTodo: function(id) {
		console.log('Edit todo opened.');
	}
});