// =========================
// ANIMATIONS.JS
// Animations globales
// =========================


// =========================
// DOM LOADED
// =========================

document.addEventListener('DOMContentLoaded', () => {

    initFadeAnimations();

    initHoverAnimations();

    initTextAnimations();

});


// =========================
// FADE-IN AU SCROLL
// =========================

function initFadeAnimations() {

    const elements = document.querySelectorAll(
        '.hero-content, .project-card, .skill-card, .about-content, .contact-form'
    );


    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('fade-in-visible');

            }

        });

    }, {
        threshold: 0.2
    });


    elements.forEach(element => {

        element.classList.add('fade-in-hidden');

        observer.observe(element);

    });

}


// =========================
// HOVER CARDS
// =========================

function initHoverAnimations() {

    const cards = document.querySelectorAll(
        '.project-card, .skill-card'
    );


    cards.forEach(card => {

        card.addEventListener('mouseenter', () => {

            card.classList.add('card-hover');

        });


        card.addEventListener('mouseleave', () => {

            card.classList.remove('card-hover');

        });

    });

}


// =========================
// ANIMATION TEXTE HERO
// =========================

function initTextAnimations() {

    const heroTitle = document.querySelector('.hero-text h1');

    if (!heroTitle) return;


    heroTitle.classList.add('hero-title-animation');

}