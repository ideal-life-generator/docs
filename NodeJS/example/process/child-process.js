// var span = require("child_process").span;

// // Import the spawn function defined on child_process module
// var spawn = require('child_process').spawn;
// // Launch a child process with a "tail -f /var/log/system.log" command
// var child = spawn('tail', ['-f', '/var/log/system.log']);

// console.log(child.stdout.on);

//

// var spawn = require("child_process").spawn;
// var child = spawn("node", [ "plus_one.js" ]);

// setInterval(function() {
	
// 	var number = Math.floor(Math.random() * 10000);

// 	child.stdin.write(number + "\n");

// 	child.stdout.once("data", function(data) {
// 		console.log("child replied to " + number + " with: " + data);
// 	});

// }, 1000);

// child.stderr.on("data", function(data) {
// 	process.stdout.write(data);
// });

//

// var spawn = require("child_process").spawn;

// var child = spawn("ls", [ "-la" ]);

// child.stdout.on("data", function(data) {
// 	console.log("data from child: " + data);
// });

// child.on("exit", function(code) {
// 	console.log("child process terminated with code " + code);
// });

// 

// var spawn = require("child_process").spawn;

// var child = spawn("ls", [ "does_not_exist.txt" ]);

// child.on("exit", function(code) {
// 	console.log("child process terminated with code " + code);
// });

// 

var spawn = require("child_process").spawn;

var child = spawn("sleep", [ "10" ]);

setTimeout(function() {
	child.kill();
}, 1000);

child.on("exit", function(code, signal) {
	if (code) {
		console.log("child process terminated with code " + code);
	} else if (signal) {
		console.log("child process terminated because of signal " + signal);
	}
});