import { isEscapeKey, getScrollWidth, setTabIndex, removeTabIndex } from './../_utils.js';
import { SMALL_DESKTOP_WIDTH } from "./../_vars.js";

const menuButtons = document.querySelectorAll('[data-mobile-menu-button]');

const setMobileMenu = () => {
  if (!menuButtons || !menuButtons.length) return;

  menuButtons.forEach((menuButton) => {
    const menuName = menuButton.getAttribute('data-mobile-menu-button');
    const parentContainer = menuButton.closest('[data-mobile-menu-container]');

    if (!menuName) return;

    const menu = document.querySelector(`[data-mobile-menu="${menuName}"]`);

    if (!menu) return;

    const menuLinks = menu.querySelectorAll('a, button');
    const closeButton = menu.querySelector('.js-button-close');
    const isOverlay = menu.classList.contains('js-overlay');

    let scrollSize = 0;

    const openMobileMenu = () => {
      menu.classList.add('is-open');
      menuButton.classList.add('active');
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', onDocumentKeydown);
      document.addEventListener('click', onDocumentClick);
      closeButton.addEventListener('click', onCloseButtonClick);
      if (parentContainer) parentContainer.addEventListener('focusout', onMenuFocusOut);
      if (isOverlay) document.body.classList.add('overlay');
      setTabIndex(menuLinks);

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
      if (parentContainer) parentContainer.removeEventListener('focusout', onMenuFocusOut);
      if (isOverlay) document.body.classList.remove('overlay');
      removeTabIndex(menuLinks);
    };

    function onDocumentKeydown(evt) {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        closeMobileMenu();
      }
    }

    function onMenuFocusOut(evt) {
      if (evt.relatedTarget === null || (parentContainer && !parentContainer.contains(evt.relatedTarget))) {
        closeMobileMenu();
      }
    }

    function onDocumentClick(evt) {
      if (parentContainer && !parentContainer.contains(evt.target)) {
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

    if (!SMALL_DESKTOP_WIDTH.matches && menuLinks && menuLinks.length) {
      removeTabIndex(menuLinks);
    }

    let moveTimeout = null;

    SMALL_DESKTOP_WIDTH.addEventListener('change', () => {
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        if (!menuLinks || !menuLinks.length) return;

        if (SMALL_DESKTOP_WIDTH.matches) {
          setTabIndex(menuLinks);
        } else {
          removeTabIndex(menuLinks);
        }
      }, 10);
    });

    toggleMenuButton();
  });
};

export { setMobileMenu };
