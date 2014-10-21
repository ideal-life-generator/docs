var fs = require("fs");

fs.readFile(__dirname + "/fs1.js", "utf8", function(error, data) {
	console.log(error, data);
});