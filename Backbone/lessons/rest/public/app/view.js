$(function() {

var app = app || { };

app.Book = Backbone.Model.extend({

	defaults: {
		coverImage: 'image/brucelee-pierreberton-interview.jpg',
		title: 'No title',
		author: 'Unknown',
		releaseDate: 'Unknown',
		keywords: 'None'
	}

});

app.Library = Backbone.Collection.extend({

	model: app.Book

});

app.BookView = Backbone.View.extend({

	tagName: 'div',
	className: 'bookContainer',
	template: _.template($('#bookTemplate').html()),

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}

});

app.LibraryView = Backbone.View.extend({

	el: '#books',

	initialize: function(initialBooks) {
		this.collection = new app.Library(initialBooks);
		this.render();
	},

	render: function() {
		this.collection.each(function(item) {
			this.renderBook(item);
		}, this);
	},

	renderBook: function(item) {
		var bookView = new app.BookView({
			model: item
		});
		this.$el.append(bookView.render().el);
	}

});

var books = [
	{
		title: 'JavaScript: The Good Parts',
		author: 'Douglas Crockford',
		releaseDate: '2008',
		keywords: 'JavaScript Programming'
	},
	{
		title: 'The Little Book on CoffeeScript',
		author: 'Alex MacCaw',
		releaseDate: '2012',
		keywords: 'CoffeeScript Programming'
	},
	{
		title: 'Scala for the Impatient',
		author: 'Cay S. Horstmann',
		releaseDate: '2012',
		keywords: 'Scala Programming'
	},
	{
		title: 'American Psycho',
		author: 'Bret Easton Ellis',
		releaseDate: '1991',
		keywords: 'Novel Splatter'
	},
	{
		title: 'Eloquent JavaScript',
		author: 'Marijn Haverbeke',
		releaseDate: '2011',
		keywords: 'JavaScript Programming'
	}
];

new app.LibraryView(books);

});