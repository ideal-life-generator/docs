var http = require("http");
var qs = require("querystring");
var body = qs.stringify({
	foo: "bar",
	bar: [ 1, 2 ]
});

console.log(qs.stringify({
	"name[first]": "Colin",
	"name[last]": "Ihrig"
}));

var request = http.request({
	hostname: "localhost",
	port: 8000,
	path: "/",
	method: "POST",
	headers: {
		"Host": "localhost:8000",
		"Content-Type": "application/x-www-form-urlecoded",
		"Content-Length": Buffer.byteLength(body)
	}
}, function(response) {
	response.setEncoding("utf8");

	response.on("data", function(data) {
		process.stdout.write(data);
	});

	response.on("end", function() {
		console.log();
	});
});

request.end(body);