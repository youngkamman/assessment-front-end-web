console.log("hello world");

function pichover(evt) {
	evt.preventDefault();
	
	alert("you are smart");
}




function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('#contact');
let pic = document.querySelector("img");

form.addEventListener('submit', handleSubmit);
pic.addEventListener("mouseover",pichover)

