document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les carrousels
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-img');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
        const project = carousel.getAttribute('data-project');
        const modal = document.getElementById('modal-' + project);
        const modalImg = document.getElementById('modal-img-' + project);
        const modalPrev = modal.querySelector('.modal-prev');
        const modalNext = modal.querySelector('.modal-next');
        const closeBtn = modal.querySelector('.close');
        let currentIndex = 0;

        // Fonction pour afficher l'image active dans le carrousel
        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }

        // Fonction pour ouvrir la modal avec l'image actuelle
        function openModal(index) {
            modalImg.src = images[index].src;
            modalImg.alt = images[index].alt;
            modal.style.display = 'flex';
            currentIndex = index;
        }

        // Fonction pour fermer la modal
        function closeModal() {
            modal.style.display = 'none';
        }

        // Événement pour le bouton précédent du carrousel
        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            showImage(currentIndex);
        });

        // Événement pour le bouton suivant du carrousel
        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            showImage(currentIndex);
        });

        // Événement pour cliquer sur une image pour ouvrir la modal
        images.forEach((img, index) => {
            img.addEventListener('click', function() {
                openModal(index);
            });
        });

        // Événements pour la modal
        modalPrev.addEventListener('click', function() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            modalImg.src = images[currentIndex].src;
            modalImg.alt = images[currentIndex].alt;
        });

        modalNext.addEventListener('click', function() {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            modalImg.src = images[currentIndex].src;
            modalImg.alt = images[currentIndex].alt;
        });

        closeBtn.addEventListener('click', closeModal);

        // Fermer la modal en cliquant en dehors
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });

        // Afficher la première image au départ
        showImage(currentIndex);
    });
});