document.querySelectorAll(".carousel").forEach(carousel => {

  const images = carousel.querySelectorAll(".carousel-img");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");

  let index = 0;

  // fonction afficher image
  function showImage(i) {
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
  }

  // bouton suivant
  nextBtn.addEventListener("click", () => {
    index++;
    if (index >= images.length) {
      index = 0;
    }
    showImage(index);
  });

  // bouton précédent
  prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) {
      index = images.length - 1;
    }
    showImage(index);
  });

});