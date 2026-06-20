import { SMALL_DESKTOP_WIDTH } from "../_vars.js";

const popups = document.querySelectorAll('.popup-item');

const setPopup = () => {
  if (!popups || !popups.length) return;

  popups.forEach((popup) => {
    const button = popup.querySelector('.popup-button');
    let isPopup = false;

    if (!button) return;

    const openPopup = () => {
      popup.classList.add('open');
      document.addEventListener('click', onDocumentClick);
      popup.addEventListener('focusout', onFocusOut);
    };

    const closePopup = () => {
      popup.classList.remove('open');
      document.removeEventListener('click', onDocumentClick);
      popup.removeEventListener('focusout', onFocusOut);
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

    SMALL_DESKTOP_WIDTH.addEventListener('change', checkPopup);
  });
};

export { setPopup };
