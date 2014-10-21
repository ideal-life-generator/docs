var dns = require("dns");
var domain = "localhost";

dns.resolve(domain, "A", function(error, address, family) {
	if(error) {
		console.error("DNS lookup failed with code " + error.code);
	} else {
		console.log(domain + " -> " + address);
	}
});