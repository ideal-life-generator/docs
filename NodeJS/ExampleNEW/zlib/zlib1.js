var fs = require("fs");
var zlib = require("zlib");
var gunzip = zlib.createGunzip();
var input = fs.createReadStream("text1.txt.gz");
var output = fs.createWriteStream("text3.txt");

input.pipe(gunzip).pipe(output);