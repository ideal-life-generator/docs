var net = require("net");

var server = net.createServer();

server.on("listening", function() {
	console.log("server has been listening");
});

server.on("connection", function() {
	console.log("new connection has join to the server");
});

server.listen(3000);