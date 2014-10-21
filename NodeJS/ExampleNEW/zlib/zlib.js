var fs = require("fs");
var zlib = require("zlib");
var gzip = zlib.createGzip();
var input = fs.createReadStream("text1.txt");
var output = fs.createWriteStream("text1.txt.gz");

input.pipe(gzip).pipe(output);