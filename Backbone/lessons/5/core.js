$(function() {

	_.templateSettings = {
 		interpolate : /\~(.+?)\~/g
	};

	var MyModel = Backbone.Model.extend({

		defaults: {
			name: 'Vladislav'
		}

	});

	var myModel = new MyModel();

	var MyView = Backbone.View.extend({

		el: '.some-view',

		template: _.template($('.some-view').html()),

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
		}

	});

	var MyView = new MyView({
		model: myModel 
	});

	MyView.render();

});