var net = require("net");

var server = net.createServer(function(client) {
	console.log("connect");
});

server.listen(8000);

var clientSocket = net.connect({
	port: 8000,
	host: "localhost"
});

clientSocket.setEncoding("utf8");

clientSocket.on("data", function(data) {
	process.stdout.write(data);
});