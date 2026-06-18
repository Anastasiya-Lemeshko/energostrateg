import { SMALL_DESKTOP_WIDTH } from "../_vars.js";

const header = document.querySelector('.header');
const logo = header ? header.querySelector('.header__logo') : null;
const select = header ? header.querySelector('.header__select') : null;
const menu = header ? header.querySelector('[data-mobile-menu="main"]') : null;
const menuContainer = menu ? menu.querySelector('.header__menu-container') : null;
const user = header ? header.querySelector('.header__user-list') : null;
const socials = header ? header.querySelector('.js-header-socials') : null;
const fixButton = header ? header.querySelector('.header__fix-button--catalog') : null;

const headerTop = header ? header.querySelector('.header__top') : null;
const headerBottom = header ? header.querySelector('.header__bottom') : null;
let isUserheaderMoved = false;

const moveheader = () => {
  if (header && SMALL_DESKTOP_WIDTH.matches && !isUserheaderMoved) {
    headerBottom.insertAdjacentElement('afterbegin', logo);
    headerBottom.insertAdjacentElement('beforeend', user);
    headerBottom.insertAdjacentElement('beforeend', socials);


    isUserheaderMoved = true;
  }

  if (header && !SMALL_DESKTOP_WIDTH.matches && isUserheaderMoved) {
    select.insertAdjacentElement('afterend', logo);
    fixButton.insertAdjacentElement('afterend', user);
    menuContainer.insertAdjacentElement('beforeend', socials);

    isUserheaderMoved = false;
  }
};

SMALL_DESKTOP_WIDTH.addEventListener('change', moveheader);

export { moveheader };
