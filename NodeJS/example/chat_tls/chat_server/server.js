var tls = require("tls");
var fs = require("fs");

var port = 3001;

var clients = [ ];

var server = tls.createServer({
	key: fs.readFileSync("server_key.pem"),
	cert: fs.readFileSync("server_cert.pem"),
	ca: [ fs.readFileSync("fake_ca.pem") ],
	requestCert: true,
	rejectUnauthorized: true
}, function (client) {

	clients.push(client);

	client.on("data", function (data) {

		var socket = client.socket;

		clients.forEach(function (oldClient) {
			if(client !== oldClient) {
				client.write(socket.remoteAddress + ":" + socket.remotePort + " said: " + data);
			}
		});

	});

	client.on("close", function () {

		console.log("close connection");
		clients.splice(clients.indexOf(client), 1);

	});

});

server.listen(port, function () {
	console.log("listening on port", server.address().port);
});