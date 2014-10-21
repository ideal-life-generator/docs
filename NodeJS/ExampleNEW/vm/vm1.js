var vm = require("vm");
var code = "console.log(foo);";

foo = "Hello vm";

vm.runInNewContext(code, {
	console: console,
	foo: foo
});