var http = require("http");

http.get("http://localhost:8000/path", function(response) {
	response.setEncoding("utf8");

	response.on("data", function(data) {
		process.stdout.write(data);
	});

	response.on("end", function() {
		console.log();
	});
});