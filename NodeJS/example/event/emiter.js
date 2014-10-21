var util = require("util"),
		EventEmitter = require("events").EventEmitter,
		SomeClass = function() {
			var self = this;
			setInterval(function() {
				self.emit("simple emit", "emiiiitttttt");
			}, 1000);
		};

util.inherits(SomeClass, EventEmitter);

var someClass = new SomeClass();

someClass.on("simple emit", function(data) {
	console.log(data);
});