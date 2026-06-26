import { SMALL_DESKTOP_WIDTH } from "../_vars.js";
import { setTabIndex, removeTabIndex } from './../_utils.js';

const popups = document.querySelectorAll('.popup-item');

// эти попапы появляется только на ширине вьюпорта выше 1024px
const setPopup = () => {
  if (!popups || !popups.length) return;

  popups.forEach((popup) => {
    const button = popup.querySelector('.popup-button');
    const popupList = popup.querySelector('.popup-list');
    let isPopup = false;

    if (!button) return;

    const popupLinks = popupList ? popupList.querySelectorAll('a, button') : null;

    const openPopup = () => {
      popup.classList.add('open');
      document.addEventListener('click', onDocumentClick);
      popup.addEventListener('focusout', onFocusOut);
      if (popupLinks && popupLinks.length) {
        setTabIndex(popupLinks);
      }
    };

    const closePopup = () => {
      popup.classList.remove('open');
      document.removeEventListener('click', onDocumentClick);
      popup.removeEventListener('focusout', onFocusOut);
      if (popupLinks && popupLinks.length) {
        removeTabIndex(popupLinks);
      }
    };

    const togglePopup = () => {
      if (popup.classList.contains('open')) {
        closePopup();
      } else {
        openPopup();
      }
    };

    const checkPopup = () => {
      if (SMALL_DESKTOP_WIDTH.matches && !isPopup) {
        button.addEventListener('click', togglePopup);
        isPopup = true;
      }

      if (!SMALL_DESKTOP_WIDTH.matches && isPopup) {
        button.removeEventListener('click', togglePopup);
        isPopup = false;
      }
    };

    function onFocusOut(evt) {
      if (evt.relatedTarget === null || !popup.contains(evt.relatedTarget)) {
        popup.classList.remove('open');
      }
    }

    function onDocumentClick(evt) {
      const target = evt.target;

      if (!popup.contains(target)) {
        popup.classList.remove('open');
        return;
      }

      if (target.closest('a') && target !== button) {
        popup.classList.remove('open');
      }
    }

    checkPopup();

    if (popupLinks && popupLinks.length) {
      removeTabIndex(popupLinks);
    }

    SMALL_DESKTOP_WIDTH.addEventListener('change', checkPopup);
  });
};

export { setPopup };
