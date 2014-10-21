var fs = require("fs");

var options = {
	key: fs.readFileSync("my_key.pem"),
	cert: fs.readFileSync("my_cert.pem")
};

var tls = require("tls");
var host = 'localhost';
var port = 3001;

var client = tls.connect(port, host, options, function () {
	console.log("connected");
});