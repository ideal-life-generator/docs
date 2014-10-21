var cp = require("child_process");
var child = cp.spawn("cat");

child.on("exit", function(code, signal) {
	console.log("process has been exit witch code: " + code, "\nand witch signal: " + signal);
});

child.kill("SIGTERM");