"use strict";

// ****************************************************
// SLIDER PROJETS
// ****************************************************
let currentIndex = 0;


const images = [];
for (let i = 1; i <= 17; i++) {
  images.push(`img/site-padel/slide-${i}.png`);
}

document.addEventListener("DOMContentLoaded", function() {
    
    const sliderImg = document.getElementById('slider-image');
    const btnPrev = document.getElementById('btn-previous');
    const btnNext = document.getElementById('btn-next');
    const imageCounter = document.getElementById('image-counter');

    function updateSlider(index) {
        sliderImg.src = images[index];
        imageCounter.textContent = `Slide ${index + 1}/${images.length}`;
    }

    btnNext.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider(currentIndex);
        console.log(currentIndex);
        console.log(sliderImg.src);
    });
    
    btnPrev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider(currentIndex);
        console.log(currentIndex);
        console.log(sliderImg.src);
    });
})

// ****************************************************
// SLIDER PROJETS FIN
// ****************************************************