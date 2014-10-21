var c_p = require("child_process");

c_p.execFile("ls", [ "-l" ], {
	cwd: "/"
}, function(error, stdout, stderr) {
	if(error) {
		console.error(error.toString());
	} else if(stderr) {
		console.error(stderr);
	} else {
		console.log(stdout);
	}
});