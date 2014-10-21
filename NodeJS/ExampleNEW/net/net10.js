var net = require("net");

var server = net.createServer(function(client) {
	console.log("connect");
});

server.listen(8000);

var client = net.connect({
	port: 8000,
	host: "localhost"
}, function() {
	console.log("Connection established");
});