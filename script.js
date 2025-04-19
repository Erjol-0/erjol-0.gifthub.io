document.addEventListener("DOMContentLoaded", function () {
  // Gjej të gjitha slide-t
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  // Vendos slide-in e parë active
  if (slides.length > 0) {
    slides[currentSlide].classList.add('active');
  }

  // Funksion për të shkaktuar ndryshimin e slide-ve çdo 3 sekonda
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 3000);
});
