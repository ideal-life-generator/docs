var http = require("http");
var connect = require("connect");
var app = connect();

app.use(connect.cookieParser({ coo: "kie" }));
app.use(connect.cookieSession({ secret: 'tobo!', cookie: { maxAge: 60 * 60 * 1000 }}));

app.use(function(req, res) {
	res.end("Hello");
});

http.createServer(app).listen(3000);