"use strict";

let scrollY = 0;

function openModal() {
    // Mémorise la position du scroll - intéressant (penser à enlever "scroll-behavior: smooth", sinon il y a l'animation)
    scrollY = window.scrollY;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden'; // pas obligatoire avec fixed, mais par sécurité

    document.getElementById("modal-padel").classList.add("active");
}

// Fonction pour fermer la modale proprement
function closeModal() {
    document.getElementById("modal-padel").classList.remove("active");
    document.documentElement.classList.remove("noscroll");
    document.body.classList.remove("noscroll");

    // Nettoyer les styles
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.overflow = '';

    // Restaurer le scroll
    window.scrollTo(0, scrollY);
}

document.addEventListener("DOMContentLoaded", function(){

    // Ouvre la modale
    document.getElementById("btnmodale-padel").addEventListener("click", openModal);

    // Ferme la modale quand on clique sur la croix
    document.querySelector(".modale-close").addEventListener("click", closeModal);

    // Ferme la modale quand on clique sur le fond sombre
    document.getElementById("modal-padel").addEventListener("click", function (e) {
    if (e.target.classList.contains("modal")) {
        closeModal();
    }
    });
})