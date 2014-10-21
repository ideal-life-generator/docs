function getJSONP(url,callback){
	var cbnum = "cb" + getJSONP.counter++;
	var cbname = "getJSONP." + cbnum;
		
		if(url.indexOf('?') === -1)
			url += '?jsonp=' + cbname;
		else
			url += '&jsonp=' + cbname;

	var script = document.createElement('script');
		getJSONP[cbname] = function(response){
			console.log(callback);
			try {
				callback(response);
			}
			finally {
				delete getJSON[cbname];
				script.parentNode.removeChild(script);
			}
		};

	script.src = url;
	document.body.appendChild(script);
};
getJSONP.counter = 0;

function log(e){
	console.log(e);
};

getJSONP('countrystyle.com.ua/index.php?id=32',log);