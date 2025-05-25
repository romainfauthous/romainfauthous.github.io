"use strict";

const switchToggle = document.querySelector('.switch');
const switchCircle = document.querySelector('.switch-circle');
const body = document.body;

// Fonction pour appliquer le thème selon la valeur stockée
function applyTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    switchCircle.style.left = '1.8rem';
    switchToggle.style.background = 'var(--blue)';
  } else {
    body.classList.remove('dark-mode');
    switchCircle.style.left = '0.2rem';
    switchToggle.style.background = 'var(--bg)';
  }
}

// Récupérer le thème sauvegardé (s'il existe) au chargement
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  // Par défaut, thème clair
  applyTheme('light');
}

switchToggle.addEventListener('click', () => {
  // Basculer la classe sur body
  body.classList.toggle('dark-mode');

  // Déterminer le thème actuel
  const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';

  // Appliquer le style au switch
  applyTheme(currentTheme);

  // Sauvegarder dans localStorage
  localStorage.setItem('theme', currentTheme);
});
