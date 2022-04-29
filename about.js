console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted successfully.")
}

function pictureAlert() {
	alert("You are as cool as this duck!")
}

let img = document.querySelector('img')

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

img.addEventListener('mouseover', pictureAlert)