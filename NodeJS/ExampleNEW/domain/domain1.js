var domain = require("domain");
var d1 = domain.create();
var d2 = domain.create();

d1.run(function() {
	d2.add(setTimeout(function() {
		throw new Error("test error");
	}));
});

d1.on("error", function(error) {
	console.log("Caught by d1");
});

d2.on("error", function(error) {
	console.log("Caught by d2");
});