const sliderContent = document.querySelector('.slider-content');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

function updateSlider() {
    sliderContent.style.transform = `translateX(-${currentSlide * 100}%)`;
}