var cp = require("child_process");

var child = cp.fork(__dirname + "/child_process3", [ "-foo" ], {
	cwd: "/",
	env: {
		bar: "baz"
	}
});