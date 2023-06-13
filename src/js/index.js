import '../scss/style.scss';

import script from './feedback';
import scripE from './script';
import scrpE from './services';

import Swiper from 'swiper';

if (window.matchMedia("(max-width: 700px)").matches) {

  let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,

  });
  
  }

  let swiper = new Swiper('.services', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.services-pagination',
      clickable: true,
    },

  });

  if (window.matchMedia("(min-width: 768px)").matches) {
    const wrapper = document.querySelectorAll('.swiper-wrapper');
    const swiperSlide = document.querySelectorAll('.swiper-slide.services__slide');

    console.log(swiperSlide);

    for (let i = 0; i < swiperSlide.length; i++) {
      swiperSlide[i].classList.remove('swiper-slide');
    }
    
    for (let i = 0; i < wrapper.length; i++) {
      wrapper[i].classList.remove('swiper-wrapper');
    }
    
    services.destroy();

  }