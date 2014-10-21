var fs = require("fs");
var readStream = fs.createReadStream(__dirname + "/fs1.js");
var writeStream = fs.createWriteStream(__dirname + "/fs14.js");

readStream.pipe(writeStream);

writeStream.on("finish", function() {
	console.log(writeStream.bytesWritten);
});