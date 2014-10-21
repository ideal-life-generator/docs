var tls = require("tls");
var fs = require("fs");

var server = tls.createServer({
	key: fs.readFileSync("my_key.pem"),
	cerf: fs.readFileSync("my_certificate.pem")
});

server.on("secureConnection", function (clientStream) {
	clientStream.on("data", function (data) {
		console.log("got some data from the client:", data);
	});
});