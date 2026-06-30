import Swiper from 'swiper';
import { Scrollbar } from 'swiper/modules';
import { getBlockClass } from './../_utils.js';

const sections = document.querySelectorAll('[data-swiper="cards"]');

const initCardsSwiper = () => {
  if (!sections.length) return;

  sections.forEach((section) => {
    const initImgSwiper = () => {
      const imgSwipers = section.querySelectorAll(`.product-card__swiper`);

      if (imgSwipers.length) {
        imgSwipers.forEach((imgSwiper) => {
          new Swiper(imgSwiper, {
            modules: [Scrollbar],
            direction: 'horizontal',
            speed: 500,
            allowTouchMove: true,
            slidesPerView: 1,
            spaceBetween: 5,

            scrollbar: {
              el: `.product-card__swiper-scrollbar`,
              draggable: true,
              hide: false,
            },
          });
        });
      }
    };

    initImgSwiper();
  });
};

export { initCardsSwiper };
