var hamburger = document.querySelector('.header i');
var pop = document.querySelector('.pop_list');
var list = document.querySelector('.pop_items');
var x = document.querySelector('.pop_list i');
var body = document.querySelector('body');
var section = document.querySelector('.header_section');

hamburger.addEventListener("click", function(){
	pop.style.width="50%";
	pop.style.transition = "all 300ms ease-out";
	list.style.display = "flex";
	x.style.display= "block";
	body.style.overflow = "hidden";
	hamburger.style.transition = "opacity 300ms ease-out";
	hamburger.style.opacity = "0";
	hamburger.style.pointerEvents = "none";
});

x.addEventListener("click", function(){
	pop.style.width="0%";
	pop.style.transition = "all 400ms ease-in";
	list.style.display = "none";
	x.style.display= "none";
	body.style.overflow = "unset";
	hamburger.style.transition = "opacity 300ms ease-out";
	hamburger.style.opacity = "1";
	hamburger.style.pointerEvents = "auto";
});