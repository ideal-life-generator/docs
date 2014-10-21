process.on("message", function(message, server) {
	console.log("take message on child process");
	if(message === server) {
		server.on("connection", function(socket) {
			socket.end("Handled by child process");
		});
	}
});