var Mael = Backbone.Model.extend({
	validate: function(attrs) {
		if (attrs.quantity <= 0) {
			return "quantity can`t be negative or equal to zero";
		}
	},
	_id: Math.random().toString(36).substr(2)
});

var MaelModel = new Mael();

console.log(MaelModel);