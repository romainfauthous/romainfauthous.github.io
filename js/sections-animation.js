"use strict";

document.addEventListener("DOMContentLoaded", function() {

  gsap.registerPlugin(ScrollTrigger);

  // Scroll reveal
  const sr = ScrollReveal();

  sr.reveal('.home-left h3, .home-left h1', {
    origin: 'top',
    easing: 'ease-in-out',
    duration: '1000',
    distance: '50px',
    scale: '0.7',
    reset: true
  });

  sr.reveal('.social-icons a', {
    origin: 'left',
    distance: '500px',
    delay: '250',
    interval: '500'
  });

  sr.reveal('.infos, .home-right', {
    origin: 'bottom',
    easing: 'ease-in-out',
    duration: '1000',
    delay: '0',
    distance: '50px',
    scale: '0.7',
    reset: true
  })

  // sr.reveal('#about', {
  //   origin: 'left',
  //   easing: 'ease-in-out',
  //   distance: '1500px'
  // });


  // Skills

  // Animation du titre principal (h2)
  gsap.from(".skills h2", {
    scrollTrigger: {
      trigger: ".skills h2",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  // Animation des blocs de catégories
  gsap.utils.toArray(".category-content, .skills-family").forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        toggleActions: "play reverse play reverse",
      },
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    });
  });




  // Projets
  if (window.innerWidth > 750) {
    // Animation de la ligne gauche
    gsap.from(".left-line", {
      x: -500,
      rotate: -300,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".portfolio-container",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
      }
    });

    // Animation de la ligne droite
    gsap.from(".right-line", {
      x: 500,
      rotate: 300,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".portfolio-container",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
      }
    });
  }

  if (window.innerWidth > 750) {
    const cards = document.querySelectorAll('.cards');

    cards.forEach(card => {
      const cardInner = card.querySelector('.card-inner');

      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 8;
        const rotateY = (x - centerX) / -8;

        cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      });

      card.addEventListener('mouseleave', () => {
        cardInner.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      });
    });
  }

  // Carrousel
  






  // Contact
  const scrollSettings = {
    trigger: ".contact",
    start: "top 70%",
    end: "top 10%",
    scrub: true
  };

  // Bordure gauche (verticale PUIS horizontale)
  const tlLeft = gsap.timeline({ scrollTrigger: scrollSettings });

  tlLeft.to(".card-left .border-left", {
    height: "100%",
    ease: "none"
  })
  .to(".card-left .border-top", {
    width: "100%",
    ease: "none"
  });

  // Bordure droite (verticale PUIS horizontale)
  const tlRight = gsap.timeline({ scrollTrigger: scrollSettings });

  tlRight.to(".card-right .border-right", {
    height: "100%",
    ease: "none"
  })
  .to(".card-right .border-bottom", {
    width: "100%",
    ease: "none"
  });

})