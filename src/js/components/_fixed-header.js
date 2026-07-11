import { debounce } from './../_utils.js';
import { HEADER_FIXED_OFFSET, SMALL_DESKTOP_WIDTH } from "./../_vars.js";

const header = document.querySelector('.header');
let isFixedHeader = false;
let moveTimeout = null;

const headerScrollHandler = () => {
  if (!SMALL_DESKTOP_WIDTH.matches) return;

  const scrollTop = window.pageYOffset;
  header.classList.toggle('header--fixed', scrollTop >= HEADER_FIXED_OFFSET);
};

const debouncedHeaderScrollHandler = debounce(headerScrollHandler, 50);

const addFixedHeader = () => {
  if (!header || !SMALL_DESKTOP_WIDTH.matches) return;

  window.addEventListener('scroll', debouncedHeaderScrollHandler);
  headerScrollHandler();
  isFixedHeader = true;
};

const removeFixedHeader = () => {
  if (!header) return;

  window.removeEventListener('scroll', debouncedHeaderScrollHandler);
  header.classList.remove('header--fixed');
  isFixedHeader = false;
};

const checkFixedHeader = () => {
  clearTimeout(moveTimeout);
  moveTimeout = setTimeout(() => {
    if (!header) return;

    if (SMALL_DESKTOP_WIDTH.matches && !isFixedHeader) {
      addFixedHeader();
    }

    if (!SMALL_DESKTOP_WIDTH.matches && isFixedHeader) {
      removeFixedHeader();
    }
  }, 10);
};

SMALL_DESKTOP_WIDTH.addEventListener('change', checkFixedHeader);

export { addFixedHeader };
