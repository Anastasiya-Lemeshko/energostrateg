import Swiper from 'swiper';
import { Scrollbar } from 'swiper/modules';
import { getBlockClass } from './../_utils.js';

const sections = document.querySelectorAll('[data-swiper="cards"]');

const initCardsSwiper = () => {
  if (!sections.length) return;

  sections.forEach((section) => {
    const sectionClass = getBlockClass(section);

    const initImgSwiper = () => {
      const imgSwipers = section.querySelectorAll(`.${sectionClass}__card-swiper`);

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
              el: `.${sectionClass}__card-swiper-scrollbar`,
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
