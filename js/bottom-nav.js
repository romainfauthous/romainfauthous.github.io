"use strict";

let sections;
let header;
let headerHeight;
let navLinks;

function scrollActive() {
    console.log(header.offsetHeight);
    // position du scroll :
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        // hauteur de la section
		const sectionHeight = current.offsetHeight;
        // point de départ de la section
		const sectionTop = current.offsetTop - headerHeight;

		const sectionId = current.getAttribute('id');
		const sectionsClass = document.querySelector('.nav-bottom a[href*=' + sectionId + ']');
        const linksClass = document.querySelector('.link-top a[href*=' + sectionId + ']');

        // Si le scroll est entre le haut de la section est le bas de la section alors
		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link');
            linksClass.classList.add('active');
		}else{
			sectionsClass.classList.remove('active-link');
            linksClass.classList.remove('active');
		}                                                    
	})
}

document.addEventListener("DOMContentLoaded", function() {
    header = document.getElementById('header');
    headerHeight = header.offsetHeight;

    sections = document.querySelectorAll("section[id]");

    window.addEventListener('scroll', scrollActive);
    scrollActive();
})