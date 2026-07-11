import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
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
const compareButtons = compare ? compare.querySelector('.compare__swiper-buttons') : null;

// показывает кнопки свайпера (только при его инициализации)
const onWindowScroll = () => {
  const compareRect = compare.getBoundingClientRect();

  const visibleTop = Math.max(compareRect.top, 0);
  const visibleBottom = Math.min(compareRect.bottom, window.innerHeight);
  const visibleHeight = Math.max(visibleBottom - visibleTop, 0);

  const isCompareVisible = visibleHeight >= window.innerHeight * 0.5;

  if (isCompareVisible) {
    compareButtons.classList.add('compare__swiper-buttons--visible');
  } else {
    compareButtons.classList.remove('compare__swiper-buttons--visible');
  }
};

const debouncedOnScrollWindow = debounce(onWindowScroll, 30);

const addWindowListener = () => {
  window.addEventListener('scroll', debouncedOnScrollWindow);
};

const removeWindowListener = () => {
  window.removeEventListener('scroll', debouncedOnScrollWindow);
};

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
        modules: [Navigation],
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

        navigation: {
          nextEl: `.${sectionClass}swiper-button--next`,
          prevEl: `.${sectionClass}swiper-button--prev`,
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
              this.navigation.update();
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
        addWindowListener();
      } else if (imageSwiperContainer && (!isNeedMobile && !isNeedTablet && !isNeedDesktop)) {
        destroyImageSwiper(imageSwiper, sectionClass);
        removeWindowListener();
        setTimeout(() => {
          compareButtons.classList.remove('compare__swiper-buttons--visible');
        }, 10);
      } else if (imageSwiperContainer && (isNeedMobile || isNeedTablet || isNeedDesktop)) {
        destroyImageSwiper(imageSwiper, sectionClass);
        removeWindowListener();
        initImageSwiper();
        addWindowListener();
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
        modules: [Navigation],
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

        navigation: {
          nextEl: `.${sectionClass}swiper-button--next`,
          prevEl: `.${sectionClass}swiper-button--prev`,
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
