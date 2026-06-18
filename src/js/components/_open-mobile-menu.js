import { isEscapeKey, getScrollWidth, setTabIndex, removeTabIndex } from './../_utils.js';
import { DESKTOP_WIDTH } from "./../_vars.js";

const header = document.querySelector('.header');
const menuButtons = document.querySelectorAll('[data-mobile-menu-button]');

const setMobileMenu = () => {
  if (!menuButtons || !menuButtons.length) return;

  menuButtons.forEach((menuButton) => {
    const menuName = menuButton.getAttribute('data-mobile-menu-button');

    if (!menuName) return;

    const menu = document.querySelector(`[data-mobile-menu="${menuName}"]`);

    if (!menu) return;

    const headerLinks = menu.querySelectorAll('a, button');
    const closeButton = menu.querySelector('.js-button-close');

    let scrollSize = 0;

    const openMobileMenu = () => {
      menu.classList.add('is-open');
      menuButton.classList.add('active');
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', onDocumentKeydown);
      document.addEventListener('click', onDocumentClick);
      closeButton.addEventListener('click', onCloseButtonClick);
      header.addEventListener('focusout', onMenuFocusOut);
      setTabIndex(headerLinks);

      scrollSize = getScrollWidth();
      document.body.style.paddingRight = `${scrollSize}px`;
    };

    const closeMobileMenu = () => {
      menu.classList.remove('is-open');
      menuButton.classList.remove('active');
      document.body.style.overflow = 'visible';
      document.body.style.paddingRight = 0;
      document.removeEventListener('keydown', onDocumentKeydown);
      document.removeEventListener('click', onDocumentClick);
      closeButton.removeEventListener('click', onCloseButtonClick);
      header.removeEventListener('focusout', onMenuFocusOut);
      removeTabIndex(headerLinks);
    };

    function onDocumentKeydown(evt) {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        closeMobileMenu();
      }
    }

    function onMenuFocusOut(evt) {
      if (evt.relatedTarget === null || !header.contains(evt.relatedTarget)) {
        closeMobileMenu();
      }
    }

    function onDocumentClick(evt) {
      if (!header.contains(evt.target)) {
        closeMobileMenu();
      }
    }

    function onCloseButtonClick() {
      closeMobileMenu();
    }

    const toggleMenuButton = () => {
      if (!menuButton) return;

      menuButton.addEventListener('click', () => {
        if (menu.classList.contains('is-open')) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });
    };

    if (!DESKTOP_WIDTH.matches && headerLinks && headerLinks.length) {
      removeTabIndex(headerLinks);
    }

    DESKTOP_WIDTH.addEventListener('change', () => {
      if (!headerLinks || !headerLinks.length) return;

      if (DESKTOP_WIDTH.matches) {
        setTabIndex(headerLinks);
      } else {
        removeTabIndex(headerLinks);
      }
    });

    toggleMenuButton();
  });
};

export { setMobileMenu };
