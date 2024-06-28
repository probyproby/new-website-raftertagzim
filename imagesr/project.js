/*document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");
    const slides = document.querySelectorAll(".slide");
  
    let index = 0;
  
    setInterval(() => {
      index++;
      if (index === slides.length) {
        index = 0;
      }
      const slideWidth = slides[index].clientWidth;
      gallery.style.transform = `translateX(-${slideWidth * index}px)`;
    }, 3000); // Change slide every 3 seconds (adjust as needed)
  });*/
/*----------------------------------------------------------------------------------------------------------------*/

/*
  let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const gallery = document.querySelector('.gallery');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  gallery.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});
*/

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const gallery = document.querySelector('.gallery');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  gallery.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});

  