import '../scss/style.scss';

import script from './feedback';
import scripE from './script';

import Swiper from 'swiper';

if (window.matchMedia("(max-width: 700px)").matches) {
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
  });
  }
