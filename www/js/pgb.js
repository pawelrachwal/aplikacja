function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(2);
	deviceInfo();
}

function random() {
	var number = Math.floor((Math.random() * 3) + 1);
	document.getElementById("randomize").innerHTML = "<img class=\"popphoto\" src=\"./img/test" + number + ".png\" style=\"max-height:512px;\">;"	
}

