import Swiper from 'swiper';
import { Scrollbar } from 'swiper/modules';
import {
  getSlidesCount,
  addSwiperClass,
  removeSwiperClass,
  setSlidesTabIndex,
  checkVisibleSlides,
  getSwiperClass,
  debounce
} from '../_utils.js';
import { TABLET_WIDTH, DESKTOP_WIDTH, SLIDER_CONFIG } from "../_vars.js";

const compare = document.querySelector('.compare__wrapper');
const imageSwiper = compare ? compare.querySelector('.compare__swiper') : null;
const charSwiper = compare ? compare.querySelector('.compare__char-swiper') : null;

const setCompareSwiper = () => {
  if (!imageSwiper || !charSwiper) return;

  const sectionClass = getSwiperClass(imageSwiper);
  const charLists = charSwiper.querySelectorAll('dl dd')
  const charItem = charSwiper.querySelector('dd span');

  const shiftChar = (index) => {
    if (!TABLET_WIDTH.matches) {
      const totalWidth = charItem.clientWidth + SLIDER_CONFIG.compare.gap;

      charLists.forEach((charList) => {
        charList.style.transform = `translateX(${-1 * totalWidth * index}px)`;
      });
    }
  };

  const deleteShiftChar = () => {
    charLists.forEach((charList) => {
      charList.style.transform = null;
    });
  }

  const setImageSwiper = () => {
    let imageSwiperContainer = null;

    const destroyImageSwiper = (swiper, el) => {
      if (imageSwiperContainer) {
        imageSwiperContainer.destroy();
        imageSwiperContainer = null;
        removeSwiperClass(swiper, el);
      }
    };

    const initImageSwiper = () => {
      addSwiperClass(imageSwiper, sectionClass);

      imageSwiperContainer = new Swiper(imageSwiper, {
        modules: [Scrollbar],
        direction: 'horizontal',
        speed: 500,
        allowTouchMove: true,
        slidesPerView: 2,
        spaceBetween: 10,
        loop: false,

        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1366: {
            slidesPerView: 4,
          },
        },

        scrollbar: {
          el: '.compare__swiper-scrollbar',
          draggable: true,
          hide: false,
        },

        on: {
          init: function () {
            const numberOfVisibleSlides = checkVisibleSlides('compare');
            setSlidesTabIndex(this, numberOfVisibleSlides);
          },
          slideChange: function () {
            const numberOfVisibleSlides = checkVisibleSlides('compare');
            setSlidesTabIndex(this, numberOfVisibleSlides);
            shiftChar(this.activeIndex);
          },
          breakpoint: function () {
            requestAnimationFrame(() => {
              this.Scrollbar.update();
              this.update();
            });
          }
        },
      });
    };

    const checkImageSwiper = () => {
      const isNeedMobile = !TABLET_WIDTH.matches && (getSlidesCount(imageSwiper) > SLIDER_CONFIG.compare.mobile_count);
      const isNeedTablet = TABLET_WIDTH.matches && !DESKTOP_WIDTH.matches && (getSlidesCount(imageSwiper) > SLIDER_CONFIG.compare.tablet_count);
      const isNeedDesktop = DESKTOP_WIDTH.matches && (getSlidesCount(imageSwiper) > SLIDER_CONFIG.compare.desktop_count);

      if (!imageSwiperContainer && (isNeedMobile || isNeedTablet || isNeedDesktop)) {
        initImageSwiper();
      } else if (imageSwiperContainer && (!isNeedMobile && !isNeedTablet && !isNeedDesktop)) {
        destroyImageSwiper(imageSwiper, sectionClass);
      } else if (imageSwiperContainer && (isNeedMobile || isNeedTablet || isNeedDesktop)) {
        destroyImageSwiper(imageSwiper, sectionClass);
        initImageSwiper();
      }
    };

    checkImageSwiper();
    TABLET_WIDTH.addEventListener('change', checkImageSwiper);
    DESKTOP_WIDTH.addEventListener('change', checkImageSwiper);
  };

  const setCharSwiper = () => {
    const charClass = getSwiperClass(charSwiper);
    let charSwiperContainer = null;

    const destroyCharSwiper = (swiper, el) => {
      if (charSwiperContainer) {
        charSwiperContainer.destroy();
        charSwiperContainer = null;
        removeSwiperClass(swiper, el);
      }
    };

    const initCharSwiper = () => {
      addSwiperClass(charSwiper, charClass);

      charSwiperContainer = new Swiper(charSwiper, {
        modules: [Scrollbar],
        direction: 'horizontal',
        speed: 500,
        allowTouchMove: true,
        slidesPerView: 2,
        spaceBetween: 10,
        loop: false,

        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1366: {
            slidesPerView: 4,
          },
        },

        scrollbar: {
          el: '.compare__swiper-scrollbar',
          draggable: true,
          hide: false,
        },

        on: {
          init: function () {
            const numberOfVisibleSlides = checkVisibleSlides('compare');
            setSlidesTabIndex(this, numberOfVisibleSlides);
          },
          slideChange: function () {
            const numberOfVisibleSlides = checkVisibleSlides('compare');
            setSlidesTabIndex(this, numberOfVisibleSlides);
          }
        },
      });
    };

    let moveTimeout = null;

    const checkCharSwiper = () => {
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        const isNeedTablet = TABLET_WIDTH.matches && !DESKTOP_WIDTH.matches && (getSlidesCount(imageSwiper) > SLIDER_CONFIG.compare.tablet_count);
        const isNeedDesktop = DESKTOP_WIDTH.matches && (getSlidesCount(imageSwiper) > SLIDER_CONFIG.compare.desktop_count);

        if (!charSwiperContainer && (isNeedTablet || isNeedDesktop)) {
          initCharSwiper();
        } else if (charSwiperContainer && (!isNeedTablet && !isNeedDesktop) || !TABLET_WIDTH.matches) {
          destroyCharSwiper(charSwiper, charClass);
        } else if (charSwiperContainer && (isNeedTablet || isNeedDesktop)) {
          destroyCharSwiper(charSwiper, charClass);
          initCharSwiper();
        }

        if (TABLET_WIDTH.matches || DESKTOP_WIDTH.matches) {
          deleteShiftChar();
        }
      }, 10);
    };

    checkCharSwiper();
    TABLET_WIDTH.addEventListener('change', checkCharSwiper);
    DESKTOP_WIDTH.addEventListener('change', checkCharSwiper);
  };

  setImageSwiper();
  setCharSwiper();
};

export { setCompareSwiper };
