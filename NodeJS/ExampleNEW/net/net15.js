var cp = require("child_process");
var net = require("net");
var server = net.createServer();
var child = cp.fork("net16");

server.on("connection", function(socket) {
	socket.end("Handled by parent process");
});

server.listen(8000, function() {
	console.log("server has been listening");
	child.send("server", server);
});