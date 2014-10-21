var fs = require("fs");
var stream;

stream = fs.createReadStream(__dirname + "/fs1.js");

stream.on("open", function(fd) {
	fs.fstat(fd, function(error, stats) {
		if(error) {
			console.error("fstat error: " + error.message);
		} else {
			console.log(stats);
		}
	});
});