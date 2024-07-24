let currentIndex = 0;
function moveSlider(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (direction === 'left') {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
    } else {
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}