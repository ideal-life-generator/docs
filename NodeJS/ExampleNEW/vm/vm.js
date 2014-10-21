var vm = require("vm");
var code = "console.log(foo);";
var foo = "Hello vm";

vm.runInThisContext(code, "example.vm");