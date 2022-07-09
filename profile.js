function fcolor(evt) {
	evt.preventDefault();
	
	alert('Blue');
}


function fplace(evt) {
	evt.preventDefault();
	
	alert('Home');
}

function fritual(evt) {
	evt.preventDefault();
	
	alert('Deep Thinking');
}





let  favc = document.querySelector('#color');
let  favp = document.querySelector(`#Place`);
let  favr = document.querySelector(`#ritual`);


favc.addEventListener('click', fcolor);
favp.addEventListener('click', fplace);
favr.addEventListener('click', fritual);
