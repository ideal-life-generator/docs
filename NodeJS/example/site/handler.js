document.addEventListener("DOMContentLoaded", function() {

	document.querySelector("input").addEventListener("input", function(event) {
		var request = new XMLHttpRequest();
		request.open("GET", "http://localhost:3000");
		request.setRequestHeader("Content-Type", "text/plain");
		request.send();
	});

});