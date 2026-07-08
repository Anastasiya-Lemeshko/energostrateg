import { debounce } from '../_utils.js';

const compare = document.querySelector('.compare__wrapper');
const compareSwiperContainer = compare ? compare.querySelector('.compare__swiper-container') : null;
const compareSwiper = compareSwiperContainer ? compareSwiperContainer.querySelector('.compare__swiper') : null;

let isScrollListenerAdded = false;

const setStickyCards = () => {
  if (!compareSwiper) return;

  const swiperHeight = compareSwiper.offsetHeight;
  const fixedHeight = compareSwiper.offsetHeight * 0.6;

  compareSwiperContainer.style.height = `${swiperHeight}px`;

  const onWindowScroll = () => {
    const swiperRect = compareSwiper.getBoundingClientRect();
    const isSwiperVisible = compareSwiperContainer.getBoundingClientRect().bottom >= fixedHeight;
    const isCompareVisible = compare.getBoundingClientRect().bottom >= fixedHeight;

    if (swiperRect.bottom < fixedHeight && !compareSwiper.classList.contains('compare__swiper--fixed')) {
      compareSwiper.classList.add('compare__swiper--fixed');
    }

    if ((isSwiperVisible || !isCompareVisible) && compareSwiper.classList.contains('compare__swiper--fixed')) {
      compareSwiper.classList.remove('compare__swiper--fixed');
    }
  };

  if (!isScrollListenerAdded) {
    isScrollListenerAdded = true;
    const debouncedOnScrollWindow = debounce(onWindowScroll, 10);
    window.addEventListener('scroll', debouncedOnScrollWindow);
  }
};

const debouncedsetStickyCards = debounce(setStickyCards, 50);
window.addEventListener('resize', debouncedsetStickyCards);

export { setStickyCards };
