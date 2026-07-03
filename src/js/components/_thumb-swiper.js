import Swiper from 'swiper';
import { Navigation, Thumbs, EffectFade } from 'swiper/modules';
import { getSwiperClass } from '../_utils.js';

const sections = document.querySelectorAll('[data-swiper="thumb"]');

const setThumbSwiper = () => {
  if (!sections || !sections.length) return;

  sections.forEach((section) => {
    const mainSwiper = section.querySelector('.main-swiper');
    const thumbSwiper = section.querySelector('.thumb-swiper');
    let mainSwiperContainer = null;

    const sectionClass = getSwiperClass(mainSwiper);

    const thumbSwiperContainer = new Swiper(thumbSwiper, {
      slidesPerView: 4,
      spaceBetween: 5,
      watchSlidesProgress: true,
      centeredSlidesBounds: true,

      breakpoints: {
        768: {
          spaceBetween: 10,
          direction: 'vertical',
          watchSlidesProgress: false,
          centeredSlidesBounds: false,
        },
      }
    });

    const initMainSwiper = () => {
      if (!mainSwiper) return;

      mainSwiperContainer = new Swiper(mainSwiper, {
        modules: [Navigation, Thumbs, EffectFade],
        direction: 'horizontal',
        speed: 500,
        allowTouchMove: true,
        slidesPerView: 1,
        spaceBetween: 10,

        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },

        navigation: {
          nextEl: `.${sectionClass}swiper-button-container .button-swiper--next`,
          prevEl: `.${sectionClass}swiper-button-container .button-swiper--prev`,
        },

        thumbs: {
          swiper: thumbSwiperContainer,
          slideThumbActiveClass: `${sectionClass}thumb-slide--active`
        },
      });
    };

    initMainSwiper();
  });
};

export { setThumbSwiper };
