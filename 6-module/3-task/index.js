import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  slides = null;
  elem=null;
  carousel = null;
  rightArrow = null;
  leftArrow = null;
  currentSlide = 1;
  constructor(slides) {
    this.slides = slides;
    this.elem = createElement(`
    <div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner">
    ${slides.map((slide) => {return `<div class="carousel__slide" data-id="${slide.id}">
      <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${slide.price.toFixed(2)}</span>
        <div class="carousel__title">${slide.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`}).join('')}
    <div>
    </div>
    `);

    this.carousel = this.elem.querySelector('.carousel__inner');
    this.rightArrow = this.elem.querySelector('.carousel__arrow_right');
    this.rightArrow.onclick = () => {
      this.leftArrow.style.display = '';
      let width = this.elem.querySelector('.carousel__slide').offsetWidth;
      this.carousel.style.transform = `translateX(-${width*this.currentSlide}px)`;
      this.currentSlide++;
      if(this.currentSlide === this.slides.length)
      this.rightArrow.style.display = 'none';
    };

    this.leftArrow = this.elem.querySelector(".carousel__arrow_left");
    this.leftArrow.style.display = 'none';
    this.leftArrow.onclick = () => {
      this.rightArrow.style.display = '';
      let width = this.elem.querySelector('.carousel__slide').offsetWidth;
      this.currentSlide--; 
      this.carousel.style.transform = `translateX(-${width*this.currentSlide-width}px)`;       
      if(this.currentSlide === 1)
        this.leftArrow.style.display = 'none';
  
    }
    console.log(this.carousel.querySelectorAll('.carousel__button'));
    [...this.carousel.querySelectorAll('.carousel__button')].map((button) => button.addEventListener('click', this.#buttonClick));

  }

  #buttonClick = () => {
    const addProductEvent = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
      detail: event.target.closest('.carousel__slide').dataset.id, // Уникальный идентификатора товара из объекта слайда
      bubbles: true // это событие всплывает - это понадобится в дальнейшем
  });

  this.elem.dispatchEvent(addProductEvent);
  }

}
