const places = ["Belle Isle Park", "Gm Building", "Fox Thearter", "little caesars arena", "Eastern Market", "Motown Museum", "Detroit Institute of Arts"];
function randomp(evt) {
	evt.preventDefault();
	 let rand = places[~~(Math.random() * places.length)];
    alert(rand)
}


let  ranp = document.querySelector(`#rplace`);


ranp.addEventListener('click', randomp);