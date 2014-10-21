// var Todo = Backbone.Model.extend({});

// var myTodo = new Todo();

// console.log(JSON.stringify(myTodo));

// var myTodo2 = new Todo({
// 	title: 'Check console.',
// 	complate: true
// });

// console.log(JSON.stringify(myTodo2));

// var Todo1 = Backbone.Model.extend({
// 	initialize: function() {
// 		console.log('This model has been initialized.');
// 	}
// });

// var myTodo3 = new Todo1();

// var Todo2 = Backbone.Model.extend({
// 	defaults: {
// 		title: 'Try these examples and check results in console.',
// 		complated: true
// 	}
// });

// var todo = new Todo2();

// console.log(todo.toJSON());

// myTodo2.set({
// 	title: 'New title.',
// 	complate: false
// });

// console.log(myTodo2.toJSON());

// var Person = new Backbone.Model();
// Person.set({ name: 'Jeremy' }, { silent: true });

// console.log(!Person.hasChanged(0));

// console.log(!Person.hasChanged('name'));

// var Todo3 = Backbone.Model.extend({
// 	defaults: {
// 		title: '',
// 		complate: false
// 	},
// 	initialize: function() {
// 		console.log('This model has been initialized.');
// 		this.on('change', function() {
// 			console.log('- Values for this model have changed.');
// 		});
// 	}
// });

// var myTodo = new Todo3();

// myTodo.set('title', 'The listener is triggered whenever an attribute value changes.');

// console.log('Title has changed:' + myTodo.get('title'));

// myTodo.set({ title: 'Changing more than one attribute at the same time only triggers the listener once.',
// 			 complate: true });

// var Todo = Backbone.Model.extend({
// 	defaults: {
// 		title: '',
// 		complate: false
// 	},
// 	initialize: function() {
// 		console.log('This model has been initialized.');
// 		this.on('change:title', function() {
// 			console.log('Title value for this model has been chenged.');
// 		});
// 	},
// 	setTitle: function(newTitle) {
// 		this.set({ title: newTitle });
// 	}
// });

// var myTodo = new Todo();

// myTodo.set({ title: 'Check what`s logged.' });
// myTodo.setTitle('Go fishing on Sunday.');
// myTodo.set({ complate: true });

// console.log('Todo set as completed: ' + myTodo.get('complate'));

// var Person = new Backbone.Model({ name: "Jeremy" });

// Person.validate = function(attrs){
// 	if (!attrs.name) {
// 		return 'I need your name';
// 	}
// 	if (attrs.name.length < 6) {
// 		return 'The name has been sets length not little 6'
// 	}
// };

// Person.set({ name: 'Raphael' });

// console.log(Person.get('name'));

// console.log(Person.unset('name', { validate: true }));

// console.log(Person.get('name'));

// Person.set({ name: 'Vasya' }, { validate: true });

// console.log(Person.get('name'));

// console.log(Person);

// ########################## Validation ########################

// var Todo = Backbone.Model.extend({
// 	defaults: {
// 		complate: false
// 	},

// 	validate: function(attrs) {
// 		if (attrs.title === undefined)
// 			return 'Remember you set a title for yout todo.'
// 	},

// 	initialize: function() {
// 		console.log('This model has been initialized.');
// 		this.on('invalid', function(model, error) {
// 			console.log(error);
// 		});
// 	},

// 	someMethod: function() {
// 		return 'You call some method.';
// 	}
// });

// var myTodo = new Todo();

// myTodo.set({ complate: true }, { validate: true });

// console.log('complate: ' + myTodo.get('complate'));

// console.log(myTodo);

// ########################## View ########################

// var TodoView = Backbone.View.extend({

// 	tagName: 'li', // or set 'div' if its void

// 	id: 'new-element',

// 	className: 'class-for-new-element',

// 	todoTpl: _.template("An example template"),

// 	events: {
// 		'dblclick label': 'edit',
// 		'keypress edit': 'updateOnEnter',
// 		'blur .edit': 'close'
// 	},

// 	render: function() {
// 		this.$el.html(this.todoTpl(this.model.toJSON()));
// 		this.input = this.$('.edit');
// 		return this;
// 	},

// 	edit: function() {
// 		// executed when todo label is double-clicked
// 	},

// 	updateOnEnter: function() {
// 		// executed when todo label is double-clicked
// 	},

// 	close: function() {
// 		// executed when todo loses focus
// 	}

// });

// var todoView = new TodoView();

// console.log(todoView.el);

// var TodoView = Backbone.View.extend({

// 	tagName: 'ul',

// 	id: 'some-id',
	
//		attributes: 'selected'

// 	className: 'some-class'

// });

// var todoView = new TodoView();

// console.log(todoView.el);

// $(function(){

// // var BodyView = Backbone.View.extend({
// // 	el: 'div',
// // });

// // var bodyView = new BodyView();

// // console.log(bodyView.el);

// // var SomeView = Backbone.View.extend();

// // var someView = new SomeView({ el: '#footer' });

// // console.log(someView.el);

// // var DynamicView = Backbone.View.extend({
// // 	tagName: function() {
// // 		return 'tp';
// // 	},
// // 	attributes: function() {
// // 		return { focus: true, black: true };
// // 	}
// // });

// // var dymanicView = new DynamicView();

// // console.log(dymanicView.el);

// // var SomeView = Backbone.View.extend({
// // 	tagName: 'b'
// // });

// // var someView = new SomeView({ className: 'some-class' });

// // someView.$el.text('Some text');

// // console.log(someView.el);

// // var button1 = $('<button>1</button>');
// // var button2 = $('<button>2</button>');

// // var View = Backbone.View.extend({
// // 	events: {
// // 		click: function(e) {
// // 			console.log(view.el === e.target);
// // 		}
// // 	}
// // });

// // var view = new View({ el: button1 })

// // console.log(view.el);

// // view.setElement(button2);

// // console.log(view.el);

// // button1.trigger('click');
// // button2.trigger('click');

// var view = new Backbone.View;
// view.setElement('<p><a><b>test</b></a></p>');
// console.log(view.$('a b').text());

// });

// ########################## Render ########################

// var ListView = Backbone.View.extend({
// 	render: function() {
// 		var items = this.model.get('items');

// 		_.each(items, function(item) {
// 			var itemView = new ItemView({ model: item });
// 			this.$el.append(itemView.render().el);
// 		}, true);
// 	}
// });

// var ItemView = Backbone.View.extend({
// 	events: {},
// 	render: function() {
// 		this.$el.html(this.model.toJSON());
// 		return this;
// 	}
// });

// ########################## Events ########################

// var TodoView = Backbone.View.extend({
// 	tagName: 'li',
// 	events: {
// 		'click .toggle': 'toggleComplate',
// 		'dblclick label': 'edit',
// 		'click .destroy': 'clear',
// 		'blur .edit': 'close'
// 	}
// });

// ########################## Collections ########################

// var Todo = Backbone.Model.extend({
// 	defaults: {
// 		title: '',
// 		complate: false
// 	}
// });

// var TodosCollection = Backbone.Collection.extend({
// 	model: Todo
// });

// var myTodo = new Todo({ title: 'Read the whole book', id: 2 });

// var todos = new TodosCollection([myTodo]);

// console.log(todos);

// console.log('Collection size: ' + todos.length);

// var Todo = Backbone.Model.extend({
// 	defaults: {
// 		title: '',
// 		complate: false
// 	}
// });

// var TodosCollection = Backbone.Collection.extend({
// 	model: Todo
// });

// var a = new Todo({ title: 'Go to Jamaica.' }),
// 	 b = new Todo({ title: 'Go to China.' }),
// 	 c = new Todo({ title: 'Go to Disneyland.' });

// var todos = new TodosCollection([a, b]);
// console.log('collection length: ' + todos.length);

// todos.add(c);

// console.log('collection length: ' + todos.length);

// todos.remove([a, b]);

// console.log('collection length: ' + todos.length);

// todos.remove(c);

// console.log('collection length: ' + todos.length);

// var items = new Backbone.Collection;
// items.add([{ id: 1, name: 'Dog', age: 3 }, { id: 2, name: 'cat', age: 2 }]);
// console.log(items);
// items.add([{ id: 1, name: 'Bear' }], { merge: true });
// console.log(items);
// items.add([{ id: 2, name: 'Lion' }]);
// console.log(JSON.stringify(items.toJSON()));

// var items = new Backbone.Collection;
// items.add([{ name: 'SomeName', id: 1 },{ name: 'SomeName1', t: 2 }]);
// console.log(items);
// items.add({ name: 'SomeName', id: 1 });
// console.log(items);

// var Todo = Backbone.Model.extend({
// 	defaults: {
// 		title: '',
// 		complate: false
// 	}
// });

// var TodosCollection = Backbone.Collection.extend({
// 	model: Todo
// });

// var myTodo = new Todo({ title: 'Read the whole book', id: 2 });

// var todos = new TodosCollection(myTodo);

// var todo2 = todos.get(2);

// console.log(todo2 === myTodo);

// var todoCid = todos.get(todo2.cid);

// console.log(todo2.cid);

// console.log(todoCid === myTodo);

// ########################## Listening for Events ########################

// var TodosCollection = new Backbone.Collection();

// TodosCollection.on('add', function(todo) {
// 	console.log('I should ' + todo.get('title') + '. Have I done it before? '
// 		+ (todo.get('completed') ? 'Yeah!' : 'No.'));
// });

// TodosCollection.add([
// 	{ title: 'go to Jamaica', completed: false },
// 	{ title: 'go to China', completed: false },
// 	{ title: 'go to Disneyland', completed: true }
// ]);

// var TodosCollection = new Backbone.Collection();

// TodosCollection.on('change:title', function(model) {
// 	console.log('Changed my mind! I should ' + model.get('title'));
// });

// TodosCollection.add({ title: 'go to Jamaica.', complate: false, id: 1 });

// var myTodo = TodosCollection.get(1);

// myTodo.set('title', 'go fishing');

// var Todo = Backbone.Model.extend({
// 	defaults: {
// 		title: '',
// 		complate: false
// 	}
// });

// var myTodo = new Todo();

// myTodo.set({ title: 'Buy some cookie', complate: true });

// myTodo.on({
// 	'change:title': titleChange,
// 	'change:complate': stateChange
// });

// function titleChange() {
// 	console.log('The title was changed!');
// };

// function stateChange() {
// 	console.log('The state was changed!');
// };

// myTodo.set({ title: 'Get the groceries' });

// var TodoCounter = { counterA: 0, counterB: 0 };

// _.extend(TodoCounter, Backbone.Events);

// var incrA = function() {
// 	TodoCounter.counterA++;
// 	TodoCounter.trigger('event');
// };

// var incrB = function() {
// 	TodoCounter.counterB++;
// };

// TodoCounter.once('event', incrA);
// TodoCounter.once('event', incrB);

// TodoCounter.trigger('event');

// console.log(TodoCounter);

// var TodosCollection = new Backbone.Collection();

// TodosCollection.add([
// 	{ id: 1, title: 'go to Jamaica.', completed: false },
// 	{ id: 2, title: 'go to China.', completed: false },
// 	{ id: 3, title: 'go to Disneyland.', completed: true }
// ]);

// TodosCollection.on('add', function(model) {
// 	console.log('Added ' + model.get('title'));
// });

// TodosCollection.on('remove', function(model) {
// 	console.log('Remove ' + model.get('title'));
// });

// TodosCollection.on('change:completed', function(model) {
// 	console.log('Complate ' + model.get('title'));
// });

// TodosCollection.set([
// 	{ id: 1, title: 'go to Jamaica.', completed: true },
// 	{ id: 2, title: 'go to China.', completed: false },
// 	{ id: 4, title: 'go to Disney World.', completed: false }
// ]);

// console.log(TodosCollection);

// var TodosCollection = new Backbone.Collection();

// TodosCollection.on('reset', function(item) {
// 	console.log('Collection reset. Now length: ' + TodosCollection.length);
// });

// TodosCollection.add([
// 	{ title: 'go to Jamaica.', completed: false },
// 	{ title: 'go to China.', completed: false },
// 	{ title: 'go to Disneyland.', completed: true }
// ]);

// console.log('Collection size: ' + TodosCollection.length);

// TodosCollection.reset([
// 	{ title: 'go to Cube.', completed: false }
// ]);

// console.log('Collection size: ' + TodosCollection.length);

// var Todo = new Backbone.Model();

// var Todos = new Backbone.Collection([ Todo ])
// 	.on('reset', function(Todos, options) {
// 		console.log(options);
// 		console.log(options.previousModels);
// 		console.log([ Todo ]);
// 		console.log(options.previousModels[0] === Todo);
// 	});

// Todos.reset([ ]);

// var theBeatles = new Backbone.Collection(['john', 'paul', 'george', 'ringo']);
// theBeatles.set(['john', 'paul', 'george', 'pete']);
// console.log(theBeatles);

// ######################## UNDERSCORE methods ##########################

// var Todos = new Backbone.Collection();

// Todos.add([
// 	{ title: 'go to Belgium.', completed: false },
// 	{ title: 'go to China.', completed: false },
// 	{ title: 'go to Austria.', completed: true }
// ]);

// Todos.forEach(function(model) {
// 	console.log(model.get('title'));
// });

// var sortedByAlphabet = Todos.sortBy(function(todo) {
// 	return todo.get('title').toLowerCase();
// });

// console.log(' - Now sorted: ');

// sortedByAlphabet.forEach(function(todo) {
// 	console.log(todo.get('title'));
// });

// var count = 1;
// console.log(Todos.map(function(model) {
// 	return count++ + '. ' + model.get('title');
// }));

// Todos.max(function(model){
// 	return model.id;
// }).id;

// Todos.min(function(model){
// 	return model.id;
// }).id;

// var titles = Todos.pluck('title');
// console.log(titles);

// var Todos = Backbone.Collection.extend({
// 	model: Todo,
// 	filterById: function(ids) {
// 		return this.models.filter(function(c) {
// 			return _.contains(ids, c.id);
// 		});
// 	}
// });

// var People = new Backbone.Collection;

// People.comparator = function(a, b) {
// 	return a.get('name') < b.get('name') ? -1 : 1;
// };

// var tom = new Backbone.Model({ name: 'Tom', id: 1 });
// var rob = new Backbone.Model({ name: 'Rob', id: 2 });
// var tim = new Backbone.Model({ name: 'Tim', id: 3 });

// People.add(tom);
// People.add(rob);
// People.add(tim);

// console.log(People.get(1).omit('name'));

// console.log(People.get(1).pick('id'));

// People.forEach(function(model) {
// 	console.log(model.pick('name'));
// });

// console.log(People.indexOf(rob) === 0);
// console.log(People.indexOf(tim) === 1);
// console.log(People.indexOf(tom) === 2);

// console.log(People.any(function(model) {
// 	return model.cid === "c1";
// }));

// console.log(People.isEmpty());

// var Todos = new Backbone.Collection();

// Todos.add([
// 	{ title: 'go to Berlin.', completed: false },
// 	{ title: 'go to China.', completed: false },
// 	{ title: 'go to Austria.', completed: true }
// ]);

// var byCompleted = Todos.groupBy('completed');
// console.log(byCompleted);
// var completed = new Backbone.Collection(byCompleted[true]);
// console.log(completed.pluck('title'));

// var Todo = Backbone.Model.extend({
// 	defaults: {
// 		title: '',
// 		completed: false
// 	}
// });

// var todo = new Todo({ title: 'go to Austria.', thing: 'map' });
// console.log(todo);
// console.log(todo.pick('thing'));

// var todo = new Todo({ title: 'go to Austria.' });
// console.log(todo.keys());
// console.log(todo.Values());

// var pairs = todo.pairs();

// console.log(pairs[0]);

// console.log(todo.invert());

// var collection = new Backbone.Collection([
// 	{ name: 'Tim', age: 5 },
// 	{ name: 'Ida', age: 26 },
// 	{ name: 'Rob', age: 55 },
// ]);

// var filteredNames = collection.chain()
// 	.filter(function(item) { return item.get('age') > 10; })
// 	.map(function(item) { return item.get('name'); })
// 	.value();

// console.log(filteredNames);




// ############## EVENTS ##############

// var ourObject = { };

// _.extend(ourObject, Backbone.Events);

// ourObject.on('dance', function(msg) {
// 	console.log('We trigger ' + msg);
// });

// ourObject.trigger('dance', 'our event');

// function dancing (msg) {
// 	console.log('We started ' + msg);
// };

// ourObject.on('dance:tap', dancing);
// ourObject.on('dance:break', dancing);

// ourObject.trigger('dance:tap', 'tap dancing. Yeah!');
// ourObject.trigger('dance:break', 'break dancing. Yeah!');

// ourObject.trigger('dance', 'break dancing. Yeah!');

// ourObject.on('all', function (eventName) {
// 	console.log('The name of the event passed was ' + eventName);
// });

// ourObject.trigger("dance:tap", "tap dancing. Yeah!");
// ourObject.trigger("dance:break", "break dancing. Yeah!");
// ourObject.trigger("dance", "break dancing. Yeah!");

// ourObject.off('dance:tap');

// ourObject.trigger('dance:tap', 'tap dancing. Yeah!');
// ourObject.trigger('dance:break', 'break dancing. Yeah!');

// ourObject.trigger("dance", "break dancing. Yeah!");

// var ourObject = { };

// _.extend(ourObject, Backbone.Events);

// function dancing(msg) {
// 	console.log('We are dancing. ' + msg);
// };

// function jumping(msg) {
// 	console.log('We are jumping. ' + msg);
// };

// ourObject.on('move', dancing);
// ourObject.on('move', jumping);

// ourObject.trigger('move', 'Yeah!');

// ourObject.off('move', jumping);

// ourObject.trigger('move', 'Yeah! Dancing, dancing, dancing!');

// var ourObject = { };

// _.extend(ourObject, Backbone.Events);

// function doAction(msg) {
// 	console.log('We are ' + msg);
// };

// ourObject.on();

// var ourObject = { };

// _.extend(ourObject, Backbone.Events);

// function doAction(msg) {
// 	console.log('We are ' + msg);
// };

// ourObject.on('dance', doAction);
// ourObject.on('jump', doAction);
// ourObject.on('skip', doAction);

// ourObject.trigger('dance', 'just dancing.');

// ourObject.trigger('dance jump skip', 'very tired from so much action.');

// var ourObject = { };

// _.extend(ourObject, Backbone.Events);

// function doAction(action, duration) {
// 	console.log('We are ' + action + ' for ' + duration);
// };

// ourObject.on('dance', doAction);
// ourObject.on('jump', doAction);
// ourObject.on('skip', doAction);

// ourObject.trigger('dance', 'dancing', '5 minutes');

// ourObject.trigger('dance jump skip', 'on fire', '15 minutes');

// var a = _.extend({}, Backbone.Events);
// var b = _.extend({}, Backbone.Events);
// var c = _.extend({}, Backbone.Events);

// a.listenTo(b, 'anything', function(event) {
// 	console.log('anything happened');
// });

// a.listenTo(c, 'everything', function(event) {
// 	console.log('everyhing happened');
// });

// b.trigger('anything');
// c.trigger('everything');

// a.stopListening();

// b.trigger('anything');
// c.trigger('everything');

// var view = new Backbone.View();
// var b = _.extend({}, Backbone.Events);

// view.listenTo(b, 'all', function() {
// 	console.log(true);
// });
// b.trigger('anything');

// view.listenTo(b, 'all', function() {
// 	console.log(false);
// });
// view.remove();

// b.trigger('anything');

// console.log(view);

// $(function(){
// var View = Backbone.View.extend({
// 	el: '#todo',
// 	// bind to DOM event using events property
// 	events: {
// 		'click [type="checkbox"]': 'clicked',
// 	},
// 	initialize: function () {
// 		// bind to DOM event using jQuery
// 		this.$el.click(this.jqueryClicked);
// 		// bind to API event
// 		this.on('apiEvent', this.callback);
// 	},
// 	// 'this' is view
// 	clicked: function(event) {
// 		console.log("events handler for " + this.el.outerHTML);
// 		this.trigger('apiEvent', event.type);
// 	},
// 	// 'this' is handling DOM element
// 	jqueryClicked: function(event) {
// 		console.log("jQuery handler for " + this.outerHTML);
// 	},
// 	callback: function(eventType) {
// 		console.log("event type was " + eventType);
// 	}
// });
// var view = new View();
// });