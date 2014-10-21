var net = require("net");

var server = net.createServer(function(client) {
	console.log("connect");
});

server.listen(8000);

var client = net.connect({
	port: 8000,
	host: "localhost",
	allowHalfOpen: true
});

client.on("end", function() {
	console.log("end handler");
});

client.on("close", function(error) {
	console.log("close handler");
	console.log("had error: " + error);
});

client.end();