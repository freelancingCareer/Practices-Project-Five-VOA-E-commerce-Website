
// for hamburger menu

const manuclick = document.querySelector('.manuIcon');

manuclick.addEventListener('click', function () {
	
	
	const nev = document.querySelector('.nav-area ul');
	nev.classList.toggle('show-nav');
	
});

// active ul li

// let ul = document.querySelector('ul');
// let li = document.querySelectorAll('li');

// li.forEach(el => {
// 	el.addEventListener('click', function(){
// 		ul.querySelector('.active').classList.remove('active');
// 		el.classList.add('active');
// 	});
// });


// For product details page multiple same t-shirt images

var productimg = document.getElementById("productimg");
var smallimg =document.getElementsByClassName("small-img");

smallimg[0].onclick = function() {
	productimg.src = smallimg[0].src;
}
smallimg[1].onclick = function() {
	productimg.src = smallimg[1].src;
}
smallimg[2].onclick = function() {
 	productimg.src = smallimg[2].src;
}
smallimg[3].onclick = function() {
 	productimg.src = smallimg[3].src;
}

// preloader area




