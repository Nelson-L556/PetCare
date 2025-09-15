const slider = document.getElementById('slider');
const slides = slider.children;
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let index = 0;

function showSlide(i) {
  if (i < 0) index = slides.length - 1;
  else if (i >= slides.length) index = 0;
  else index = i;
  slider.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));
