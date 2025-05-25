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
    delay: '500',
    interval: '500'
  });

  sr.reveal('#about', {
    origin: 'left',
    easing: 'ease-in-out',
    distance: '1500px'
  });

  // Splitting
  let selection = Splitting();
  // console.log(selection);

  selection.forEach(split => {
    gsap.from(split.chars, {
      opacity: 0,
      y: 50,
      rotation: 90,
      stagger: 0.1,
      scrollTrigger: {
        trigger: split.el,
        start: "top 70%",
        end: "bottom 70%",
        scrub: true
      }
    });
  });
  // Initialize a new Lenis instance for smooth scrolling
  const lenis = new Lenis();
  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  lenis.on('scroll', ScrollTrigger.update);
  // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  gsap.ticker.add((time) => {
    lenis.raf(time * 600); // Convert time from seconds to milliseconds
  });
  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);




  // Skills

  // Animation du titre principal (h2)
  gsap.from(".skills h2", {
    scrollTrigger: {
      trigger: ".skills h2",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  // Animation des blocs de catégories
  gsap.utils.toArray(".category-content").forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    });
  });




  // Projets

  const cards = document.querySelectorAll('.cards');

  cards.forEach(card => {
    const cardInner = card.querySelector('.card-inner');

    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (x - centerX) / -10;

      cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
      cardInner.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });
  });

})