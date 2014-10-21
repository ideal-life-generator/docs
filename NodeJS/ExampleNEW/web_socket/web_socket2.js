var http = require("http");
var connect = require("connect");
var socketio = require("socket.io");
var app = connect();

var server;
var io;

app.use(connect.static("public"));
server = http.createServer(app);
io = socketio.listen(server);

app.get("/", function(req, res) {
	res.sendfile("test1.html");
});

io.on("connection", function(socket) {
	socket.on("message", function(data) {
		socket.emit("echo", data);
	});
});

server.listen(8000);