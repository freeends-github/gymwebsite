const hamburger = document.querySelector('.header i');
const pop = document.querySelector('.pop_list');
const list = document.querySelector('.pop_items');
const x = document.querySelector('.pop_list i');
const body = document.querySelector('body');
const section = document.querySelector('.header_section');

hamburger.addEventListener("click", function(){
	pop.style.width="50%";
	pop.style.transition = " all 300ms ease-out";
	list.style.display = "flex";
	x.style.display= "block";
	body.style.overflow = "hidden";
});

x.addEventListener("click", function(){
	pop.style.width="0%";
	pop.style.transition = " all 400ms ease-in";
	list.style.display = "none";
	x.style.display= "none";
	body.style.overflow = "unset";
});