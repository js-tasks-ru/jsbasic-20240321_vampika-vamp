function initCarousel() {
  // ваш код...
  let right = document.querySelector(".carousel__arrow_right");
  let left= document.querySelector(".carousel__arrow_left");
  let carousel = document.querySelector(".carousel__inner");
  let width = carousel.querySelector(".carousel__slide").offsetWidth;
  let currentSlide = 1;
  left.style.display = 'none';
  right.onclick = () => {
    left.style.display = '';
    carousel.style.transform = `translateX(-${width*currentSlide}px)`;
    currentSlide++;
    if(currentSlide === 4)
      right.style.display = 'none';
  }
  left.onclick = () => {
    right.style.display = '';
    currentSlide--; 
    console.log(currentSlide)
    carousel.style.transform = `translateX(-${width*currentSlide-width}px)`;       
    if(currentSlide === 1)
      left.style.display = 'none';

  }
}
