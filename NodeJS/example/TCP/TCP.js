// require("net").createServer(function(socket) {

// 	socket.on("data", function(data) {
// 		console.log("got data");
// 	});

// 	socket.on("end", function(data) {
// 		console.log("close connection");
// 	});

// 	socket.write("some string");

// }).listen(3000);

//

// var server = require("net").createServer();

// var port = 3000;

// server.on("listening", function() {
// 	console.log("Server is listening on port", port);
// });

// server.on("connection", function(socket) {
// 	console.log("Server has a new connection");
// 	socket.write("dataaa");
// 	socket.end();
// 	server.close();
// });

// server.on("close", function() {
// 	console.log("Server is now closed");
// });

// server.on("error", function(err) {
// 	console.log("Error occurred:", err.message);
// });

// server.listen(port);

//

// var server = require('net').createServer(function(socket) {

// 	console.log('new connection');

// 	socket.setEncoding('utf8');

// 	socket.write("Hello! You can start typing. Type 'quit' to exit.\n");

// 	socket.on("data", function(data) {
// 		console.log("got:", data.toString());
// 		if(data.trim().toLowerCase() === "quit") {
// 			socket.write("Bye bye!");
// 			socket.end();
// 		}
// 		socket.write(data);
// 	});

// 	socket.on("end", function() {
// 		console.log("Client connection ended");
// 	});

// }).listen(3000);

//

// var ws = require("fs").createWriteStream("mysocketdump.txt");

// require("net").createServer(function(socket) {
// 	socket.pipe(ws);
// }).listen(3000);

//

// require("net").createServer(function(socket) {
// 	var rs = require("fs").createReadStream("hello.txt");
// 	rs.pipe(socket);
// }).listen(3000);

//
require("net").createServer(function(socket) {
	// socket.setTimeout(10000);
	// socket.on("timeout", function() {
	// 	socket.write("idle timeout, disconecting, bye!");
	// 	socket.end();
	// });
	// socket.setKeepAlive(true, 1000);
}).listen(3000);