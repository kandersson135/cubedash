var player = document.getElementById("audioplayer");

function togglePause() {
	if(player.paused && player.currentTime > 0 && !player.ended) {
	  player.play();
	} else {
	  player.pause();
	}
}

var x = player.src;
var sp = document.getElementById("song-span");

var filename = x.split('/').pop();

if (filename == "a1.mp3") {
	sp.innerHTML = "Alan Walker - Fade";
} else if (filename == "a2.mp3") {
	sp.innerHTML = "Alan Walker - Spectre";
} else if (filename == "a3.mp3") {
	sp.innerHTML = "Codeko - Crest";
} else if (filename == "a4.mp3") {
	sp.innerHTML = "Disfigure - Blank";
} else if (filename == "a5.mp3") {
	sp.innerHTML = "Electro-Light - Symbolism";
} else if (filename == "a6.mp3") {
	sp.innerHTML = "Itro - Panda";
} else if (filename == "a7.mp3") {
	sp.innerHTML = "JPB - High";
} else if (filename == "a8.mp3") {
	sp.innerHTML = "Lensko - Cetus";
} else if (filename == "a9.mp3") {
	sp.innerHTML = "Lensko - Lets Go!";
} else if (filename == "a10.mp3") {
	sp.innerHTML = "Tobu - Candyland";
}