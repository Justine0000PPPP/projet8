// =========================
// PROJECTS.JS
// Carrousel des images de projets
// =========================

document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach((carousel) => {
        const images = Array.from(carousel.querySelectorAll('.carousel-img'));
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');

        if (!images.length) return;

        let currentIndex = 0;

        const showSlide = (index) => {
            currentIndex = (index + images.length) % images.length;
            images.forEach((image, imageIndex) => {
                image.classList.toggle('active', imageIndex === currentIndex);
            });
        };

        prevButton?.addEventListener('click', () => showSlide(currentIndex - 1));
        nextButton?.addEventListener('click', () => showSlide(currentIndex + 1));

        showSlide(0);
    });
});