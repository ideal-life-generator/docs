$(function(){

	var MyTodod = Backbone.Model.extend({

		defaults: {
			text: 'some title'
		}

	});

	var myTodo = new MyTodod();

	var MyTodoView = Backbone.View.extend({

		el: $(".view"),

		template: _.template(_.unescape($(".view").html())),

		events: {
			'input input': 'onInput'
		},

		initialize: function() {
			this.$input = this.$("input");
		},

		onInput: function(event) {
			this.value = this.$input.value
			this.model.set({ text: this.value });
			this.render();
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
		}

	});

	var myTodoView = new MyTodoView({ model: myTodo });

	myTodoView.render();

});