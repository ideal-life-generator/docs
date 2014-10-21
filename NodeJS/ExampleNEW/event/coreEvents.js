// var events = require("events");
// var emitter = new events.EventEmitter();

// emitter.on("newListener", function (eventName, listener) {
// 	console.log("We have new event " + eventName + " and his listener function is " + listener);
// });

// emitter.emit("newListener", new Date());

// emitter.on("foo", function(data) {
// 	console.log(data.getTime());
// });

// var intervalId = setInterval(function() {
// 	console.log("In interval function");
// 	intervalId.unref();
// }, 1000);

process.nextTick(function() {
	console.log("Executing tick n+1");
});

console.log("Executing nth tick");