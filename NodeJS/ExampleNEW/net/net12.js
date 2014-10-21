var net = require("net");

var server = net.createServer(function(client) {
	console.log("connect");
});

server.listen(8000);

var client = net.connect(8000, function() {
	console.log("Local endpoint " + client.localAddress + ":" + client.localPort);
	console.log("is connected to");
	console.log("Remote endpoint " + client.remoteAddress + ":" + client.remotePort);
});