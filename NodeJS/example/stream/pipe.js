var fs = require("fs");

require("http").createServer(function(req, res) {
	var rs = fs.createReadStream("O.Lucky.Man.1973.avi");
	rs.pipe(res, { end: false });
	rs.on("data", function() {
		console.log("data");
	});
}).listen(3000);