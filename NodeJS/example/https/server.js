var fs = require("fs");
var https = require("https");

var options = {
	key: fs.readFileSync("server_key.pem"),
	cert: fs.readFileSync("server_cert.pem"),
	requestCert: true,
	rejectUnauthorized: true
};

var server = https.createServer(options, function(req, res) {
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end("Hello World!");
});

var port = 3000;
server.listen(port);

var address = "192.168.1.100";

server.listen(port, address);