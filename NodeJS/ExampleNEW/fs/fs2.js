var fs = require("fs");
var path = "/dev"

fs.open(path, "w+", function(error, data) {
	if(error) {
		console.log("open error: " + error.message);
	} else {
		console.log("Syccessfully opened " + path);
	}
});