// =========================
// NAVIGATION.JS
// Gestion navigation
// =========================


// =========================
// DOM LOADED
// =========================

document.addEventListener('DOMContentLoaded', () => {

    initSmoothNavigation();

    initActiveLinks();

    initMobileMenu();

});


// =========================
// SMOOTH SCROLL
// =========================

function initSmoothNavigation() {

    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {

        link.addEventListener('click', event => {

            event.preventDefault();

            const targetId = link.getAttribute('href');

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

            }

        });

    });

}


// =========================
// LIEN ACTIF NAVBAR
// =========================

function initActiveLinks() {

    const sections = document.querySelectorAll('section');

    const navLinks = document.querySelectorAll('.nav-links a');


    window.addEventListener('scroll', () => {

        let currentSection = '';

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight) {

                currentSection = section.getAttribute('id');

            }

        });


        navLinks.forEach(link => {

            link.classList.remove('active-link');

            const href = link.getAttribute('href');

            if (href === `#${currentSection}`) {

                link.classList.add('active-link');

            }

        });

    });

}


// =========================
// MENU MOBILE
// =========================

function initMobileMenu() {

    const menuButton = document.querySelector('.menu-toggle');

    const navMenu = document.querySelector('.nav-links');


    // Vérifie si le bouton existe

    if (!menuButton) return;


    menuButton.addEventListener('click', () => {

        navMenu.classList.toggle('nav-active');

        menuButton.classList.toggle('toggle-active');

    });

}