var events = require("events");
var EventEmitter = events.EventEmitter;
var emitter = new EventEmitter();

emitter.on("userAdd", function (name, password) {
	console.log("New user " + name + " join to the sustem.");
});

emitter.on("userAdd", function (name, password) {
	console.log("New user " + name + " join to the sustem.");
});

emitter.emit("userAdd", "Tkachenko", "California");

console.log(EventEmitter.listenerCount(emitter, "userAdd"));

console.log(emitter.listeners("userAdd"));