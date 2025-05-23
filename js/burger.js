"use strict"

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('menu-burger');
    const mobileMenu = document.querySelector('.nav-mobile-menu');

    burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    burger.classList.toggle('bx-x'); // Optionnel pour changer l'icône burger/croix
    });

    // Optionnel : fermer le menu en cliquant sur un lien
    mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        burger.classList.remove('bx-x');
    });
    });
});