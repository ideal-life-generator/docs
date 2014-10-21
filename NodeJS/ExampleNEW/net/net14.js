var net = require("net");

var server = net.createServer(function(client) {
	console.log("connect");
});

server.listen(8000);

var client = net.connect(8000, "localhost");

client.setTimeout(10000, function() {
	console.error("Ten second timeout elapsed");
	client.end();
	server.close();
});