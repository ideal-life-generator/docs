var net = require("net");

var server = net.createServer(function(socket) {
	console.log(socket);
});

server.listen(8000, "127.0.0.1");