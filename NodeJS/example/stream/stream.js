var fs = require("fs");
require("http").createServer(function(req, res) {
	var rs = fs.createReadStream("O.Lucky.Man.1973.avi");
	rs.on("data", function(data) {
		if(!res.write(data)) {
			rs.pause();
		}
	});
	res.on("drain", function() {
		rs.resume();
	});
	rs.on("end", function() {
		res.end();
	});
}).listen(9000);