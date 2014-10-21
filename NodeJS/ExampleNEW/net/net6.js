var net = require("net");
var server = net.createServer();

server.on("close", function() {
	console.log("And now it`s closed.");
});

server.listen(function() {
	console.log("The server is listening.");
	server.close();
});