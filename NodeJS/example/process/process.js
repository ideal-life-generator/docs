// var env = process.env,
// 		varName,
// 		envCopy = { },
// 		exec = require("child_process").exec;

// for(varName in env) {
// 	envCopy[varName] = env[varName];
// }

// envCopy["CUSTOM ENV VAR"] = "some value";
// envCopy["CUSTOM ENV VAR 2"] = "some other value";

// exec("ls -la", { env: envCopy }, function(err, stdout, stderr) {
// 	if(err) { throw err; }
// 	console.log("stdout:", stdout);
// 	console.log("stderr:", stderr);
// });

var exec = require("child_process").exec;
exec("node child.js", { env: { number: 123 } }, function(err, stdout, stderr) {
	// if(err) { throw err; }
	console.log("stdout:\n", stdout);
	console.log("stderr:\n", stderr);
});