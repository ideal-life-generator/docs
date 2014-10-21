var cp = require("child_process");
var child = cp.fork(__dirname + "/child_process5");

child.on("message", function(message) {
	console.log("parent received: " + message.count);

	if(child.connected) {
		message.count++;
		child.send(message);
	}
});

child.on("SIGNAL", function() {
	child.kill();
	process.exit();
});

child.send({
	count: 0
});