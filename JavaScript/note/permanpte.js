var editor, statusline, savebutton, idletimer;

window.onload = function(){
	if(localStorage.note == null) localStorage.note = "";
	if(localStorage.lastModified == null) localStorage.lastModified = 0;
	if(localStorage.lastSaved == null) localStorage.lastSaved = 0;

	editor = document.getElementById('editor');
	statusline = document.getElementById('statusbar');
	savebutton = document.getElementById('savebutton');

	editor.value = localStorage.note;
	editor.disabled = true;

	editor.addEventListener('input',function(e){
		localStorage.note = editor.value;
		localStorage.lastModified = Date.now();

		if(idletimer) clearTimeout(idletimer);
		idletimer = setTimeout(save,5000);

		savebutton.disabled = false;
	},false);

	sync();
	console.log(localStorage);
};

window.onbeforeunload = function(){ // при закрытии окна
	if(localStorage.lastModified > localStorage.lastSaved)
		save();
};

window.onoffline = function(){ alert();status('Автономный режим'); };

window.ononline = function(){ alert();sync(); };

window.applicationCache.onupdateready = function(){ // проверили кэш и туда была загруженна более свежая версия
	status('Доступна новая версия, чтобы использовать её перезагрузите страницу');
};

window.applicationCache.onnoupdate = function(){ // изменений не было
	status('Вы используете последнюю версию');
};

function status(msg){ statusline.innerHTML = msg; };

function save(){
	if(idletimer) clearTimeout(idletimer);
	idletimer = null;

		if(navigator.onLine){
			var xhr = new XMLHttpRequest();
			xhr.open('PUT','/note');
			xhr.send(editor.value);
			xhr.onload = function(){
				localStorage.lastSaved = Date.now();
				savebutton.disabled = true;
			};
		}
			console.log(xhr);
};

function sync(){
	if(navigator.onLine){
		var xhr = new XMLHttpRequest();
		xhr.open('GET','/note');
		xhr.send();
		xhr.onload = function(){
			var remoteModTime = 0;
			if(xhr.status == 200){
				var remoteModeTime = xhr.gerResponseHeader('Last-Modified');
				remoteModeTime = new Date(remoteModTime).getTime();
			}

			if(remoteModTime > localStorage.lastModified){
				status('На сервере найдена более новая заметка.');
				var userit = confirm('Нажмите чтобы загрузить новую версию, или перезаписать');
				var now = Date.now();
				if(userit){
					editor.value = localStorage.note = xhr.resposeText;
					localStorage.lastSaved = now;
					status('Загруженна более новая версия');
				}
				else{
					status('Игнорируется более новая версия');
					localStorage.lastModified = now;
				}
			}
			else
				status('Редактируется последняя версия заметки');
			if(localStorage.lastModified > localStorage.lastSaved){
				save();
			}
			editor.disabled = false;
			editor.focus();
			console.log(xhr);
		};
	}
	else{
		status('Автономный режим, синхронизация невозможна');
		editor.disabled = false;
		editor.focus();
	}

};