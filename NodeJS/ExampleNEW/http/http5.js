var http = require("http");
var server = http.createServer(function(request, response) {
	response.setHeader("Set-Cookie", [ "name=Colin; Expires=Sat, 10 Jan 2015 20:00:00 GMT; Domain=localhost; HttpOnlyl; Secure;", "foo=bar; Max-Age=3600" ]);
	response.write("Hello <strong>HTTP</strong>");
	response.end();
});

server.listen(8000);