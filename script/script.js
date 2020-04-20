const slider = document.querySelector('.slider');
const sliderStage = document.querySelector('.slider-stage');
const slides = document.querySelectorAll('.slider li');
const prevBtn = document.querySelector('.previous-arrow');
const nextBtn = document.querySelector('.next-arrow');

const slideWidth = slides[0].clientWidth;
let currentIndex = 0;
let slidesNumber = slides.length - 1;

const goToSlide = (index) => {
    if(index < 0) {
        index = slidesNumber;
    } else if(index > slidesNumber) {
        index = 0;
    }
    slider.style.transition = 'transform 0.4s ease-in-out';
    slider.style.left = index * (-slideWidth) + 'px';
    currentIndex = index;
}

const slideToNext = () => {
    goToSlide(currentIndex + 1);
}

const slideToPrev = () => {
  goToSlide(currentIndex - 1);
}

prevBtn.addEventListener('click', slideToPrev);
nextBtn.addEventListener('click', slideToNext);

setInterval(slideToNext, 4000);