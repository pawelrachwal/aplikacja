function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(2);
	deviceInfo();
}

function kiss() {

	var arr = []
	while(arr.length < 3){
    var randomnumber = Math.ceil(Math.random()*3)
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
}
	
	document.getElementById("one").innerHTML = "<img src=\"./img/test" + arr[0] + ".png\">";
	document.getElementById("two").innerHTML = "<img src=\"./img/test" + arr[1] + ".png\">";
	document.getElementById("three").innerHTML = "<img src=\"./img/test" + arr[2] + ".png\">";
}

