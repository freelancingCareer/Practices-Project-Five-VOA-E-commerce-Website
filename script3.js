// Account registration and loginform

var logingForm = document.getElementById("LoginForm");
var regForm = document.getElementById("RegForm");
var indicator =document.getElementById("indicator");

function register() {
	regForm.style.transform = "translateX(0px)";
	logingForm.style.transform = "translateX(0px)";
	indicator.style.transform = "translateX(100px)";
}

function loging() {
	regForm.style.transform = "translateX(300px)";
	logingForm.style.transform = "translateX(300px)";
	indicator.style.transform = "translateX(0px)";
}



/*
function regmouse() {
	document.querySelector("#LoginForm").classList.remove("logLeft");
	document.querySelector("#RegForm").classList.add("regLeft-a");
	
	
}

function onmouse() {
	document.querySelector("#RegForm").classList.remove("regLeft");
	document.querySelector("#LoginForm").classList.add("logLeft");
}*/

// const logingForm = document.querySelector("#spLog");
// var regForm = document.getElementById("spReg");
// var indicator =document.getElementById("indicator");

// var loginC = document.querySelector(".login-c");
// var regg = document.querySelector("#RegForm");

// loginC.onclick = function () {
    
// 	document.querySelector("#RegForm").classList.remove("regLeft");
// 	document.querySelector("#LoginForm").classList.add("logLeft");
// }

// var loginC = document.querySelector(".reg-c");

// loginC.onclick = function () {
//     regg.classList.toggle("regLeft");
// 	// document.querySelector("#LoginForm").classList.remove("logLeft");
// 	// document.querySelector("#RegForm").classList.add("regLeft-a");
//     console.log("hi")
// }

// logingForm.addEventListener('click', function () {

// 	regForm.classList.remove("regLeft");
// 	logLeft.classList.add("logLeft");
// });

// preloader area

var loader = document.getElementById('preloader');

function myload() {
	
	setTimeout(function() {
		loader.style.display = "none";
	}, 1100);
	
	
}