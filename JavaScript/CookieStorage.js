function CookieStorage(maxage,path){

	var cookies = (function(){
		var cookies = {};
		var all = document.cookie;
		if(all==="")
			return cookies;
		var list = all.split('; ');
		for(var i=0;i<list.length;i++){
			var cookie = list[i];
			var p = cookie.indexOf('=');
			var name = cookie.substring(0,p);
			var value = cookie.substring(p+1);
			value = decodeURIComponent(value);
			cookie[name] = value;
		};
	return cookie;
	}());

	var keys = [];
	for(var key in cookies) keys.push(key);

	this.length = keys.length;

	this.key = function(n){
		if(n<0 || n>=keys.length) return null;
			return keys[n];
	};

	this.getItem = function(key){
		if(!cookies.hasOwnProperty(key)) return "Свойство не существует";
			return cookies[key];
	};

	this.setItem = function(key,value){
		if(!(key in cookies)){
			keys.push(key);
			this.length++;
		}
		cookies[key] = value;
		var cookies = key + '=' + encodeURIComponent(value);
		if(maxage) cookie += "; max-age=" + maxage;
		if(path) cookie += "; parh=" + path;
		document.cookie = cookie;
	};

	this.removeItem = function(key){
		if(!(key in cookies)) return "Свойства не существует";
		delete cookies[key];
		keys.slice(keys.indexOf(key),1);
		document.cookie = key + "=; max-age=0";
		this.length--;
	};

	this.clear = function(){
		for(var key in keys){
			document.cookie = key + '=; max-age=0';
		}
		cookies = {};
		keys = [];
		this.length = 0;
	};

};