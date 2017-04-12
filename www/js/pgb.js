function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(2);
	deviceInfo();
}

function random() {
	var number = Math.floor((Math.random() * 3) + 1);
	document.getElementById("randomize").innerHTML = "<h2>" + number + "</h2>";	
}

