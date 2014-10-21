var dgram = require("dgram");

var server = dgram.createSocket("udp4");

var port = 3000;

server.on("message", function(message, info) {

	console.log("server got message: %s from %s:%d", message, info.address, info.port);

	server.send(message, 0, message.length, info.port, info.address);

});

server.bind(port);