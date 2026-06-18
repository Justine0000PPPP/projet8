// =========================
// CAROUSEL.JS
// Carrousel projets
// =========================


// =========================
// DOM LOADED
// =========================

document.addEventListener('DOMContentLoaded', () => {

    initProjectsCarousel();

});


// =========================
// INITIALISATION CARROUSEL
// =========================

function initProjectsCarousel() {

    const carousel = document.querySelector('.projects-carousel');

    if (!carousel) return;


    // =========================
    // VARIABLES
    // =========================

    let scrollAmount = 0;

    const scrollStep = 320;

    let autoScroll;


    // =========================
    // BOUTONS
    // =========================

    createCarouselButtons(carousel);


    const prevButton = document.querySelector('.carousel-prev');

    const nextButton = document.querySelector('.carousel-next');


    // =========================
    // BOUTON GAUCHE
    // =========================

    prevButton.addEventListener('click', () => {

        scrollAmount -= scrollStep;

        if (scrollAmount < 0) {

            scrollAmount = 0;

        }

        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });

    });


    // =========================
    // BOUTON DROIT
    // =========================

    nextButton.addEventListener('click', () => {

        scrollAmount += scrollStep;

        if (scrollAmount > carousel.scrollWidth - carousel.clientWidth) {

            scrollAmount = 0;

        }

        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });

    });


    // =========================
    // AUTO SCROLL
    // =========================

    function startAutoScroll() {

        autoScroll = setInterval(() => {

            scrollAmount += scrollStep;

            if (scrollAmount > carousel.scrollWidth - carousel.clientWidth) {

                scrollAmount = 0;

            }

            carousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });

        }, 4000);

    }


    // =========================
    // STOP AUTO SCROLL
    // =========================

    function stopAutoScroll() {

        clearInterval(autoScroll);

    }


    // =========================
    // EVENTS SOURIS
    // =========================

    carousel.addEventListener('mouseenter', stopAutoScroll);

    carousel.addEventListener('mouseleave', startAutoScroll);


    // =========================
    // LANCEMENT
    // =========================

    startAutoScroll();

}


// =========================
// CREATION BOUTONS
// =========================

function createCarouselButtons(carousel) {

    const parentSection = carousel.parentElement;


    // =========================
    // BOUTON PRECEDENT
    // =========================

    const prevButton = document.createElement('button');

    prevButton.classList.add('carousel-prev');

    prevButton.innerHTML = '&#10094;';


    // =========================
    // BOUTON SUIVANT
    // =========================

    const nextButton = document.createElement('button');

    nextButton.classList.add('carousel-next');

    nextButton.innerHTML = '&#10095;';


    // =========================
    // AJOUT DOM
    // =========================

    parentSection.appendChild(prevButton);

    parentSection.appendChild(nextButton);

}