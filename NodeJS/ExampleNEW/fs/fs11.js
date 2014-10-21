var fs = require("fs");
var readStream = fs.createReadStream(__dirname + "/fs1.js");
var writeStream = fs.createWriteStream(__dirname + "/fs12.js");

readStream.pipe(writeStream);