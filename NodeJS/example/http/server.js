// var fs = require("fs");

// require("http").createServer(function(req, res) {
// 	res.writeHead(200, { "Content-Type": "video/mp4" });
// 	var rs = fs.createReadStream("O.Lucky.Man.1973.avi");
// 	rs.pipe(res);
// }).listen(3000);

//

// var spawn = require("child_process").spawn;

// require("http").createServer(function(req, res) {
// 	var child = spawn("tail", [ "-f", "system.log" ]);
// 	child.stdout.pipe(res);
// 	res.on("end", function() {
// 		child.kill();
// 	});
// }).listen(3000);

//

var server = require("http").createServer();
server.on("request", function(req, res) {
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end("Hello userrrr.");
	server.close();
	setTimeout(function() {
		server.listen(3000);
	}, 6000);
});

server.listen(3000);