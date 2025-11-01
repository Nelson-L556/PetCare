const carrusel = document.querySelector(".carrusel");
const slides = carrusel.children;
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let index = 0;

function showSlide(i) {
  const visibleCards = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const maxIndex = slides.length - visibleCards;

  if (i < 0) index = maxIndex;
  else if (i > maxIndex) index = 0;
  else index = i;

  carrusel.style.transform = `translateX(-${index * (100 / visibleCards)}%)`;
}


prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));
