var fs = require("fs");
var https = require("https");

var options = {
	host: "0.0.0.0",
	port: 3000,
	method: "GET",
	path: "/"
};

var request = https.request(options, function (response) {
	console.log('response.statusCode:', response.statusCode);

	response.on("data", function (data) {
		console.log("got some data back from the server:", data);
	});
});

request.write("Hey!\n");
request.end();