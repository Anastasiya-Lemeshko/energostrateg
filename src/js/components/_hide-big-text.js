import { debounce } from './../_utils.js';
import { HIDE_TEXT_HEIGHT } from './../_vars.js';

const bigTextButtons = document.querySelectorAll('.big-text-button');

const showText = (evt) => {
  const currentButton = evt.target.closest('button');
  let currentContent = currentButton.parentElement.querySelector('.big-text-content');

  if (!currentContent) return;

  currentContent.classList.toggle('big-text-content--opened');
  currentButton.classList.toggle('big-text-button--active');

  if (currentContent.classList.contains('big-text-content--opened')) {
    currentContent.style.maxHeight = `${currentContent.scrollHeight}px`;
    currentButton.textContent = 'Свернуть';
  } else {
    currentContent.style.maxHeight = `${HIDE_TEXT_HEIGHT}px`;
    currentButton.textContent = 'Читать полностью';
  }
};

const checkBigTextHeight = () => {
  if (!bigTextButtons || !bigTextButtons.length) return;

  bigTextButtons.forEach((button) => {
    const content = button.parentElement.querySelector('.big-text-content');
    if (!content) return;

    // Проверяет, нужно ли показывать кнопку
    const fullHeight = content.scrollHeight;
    if (fullHeight <= HIDE_TEXT_HEIGHT) {
      button.classList.add('hidden');
    } else {
      button.classList.remove('hidden');
      content.style.maxHeight = `${HIDE_TEXT_HEIGHT}px`;
    }
  });
};

const setBigTextToggles = () => {
  if (!bigTextButtons.length) return;

  bigTextButtons.forEach((button) => {
    button.addEventListener('click', showText);
  });
};

// пересчет высоты при ресайзе
const recalcOpenedTextHeight = () => {
  const openedContents = document.querySelectorAll('.big-text-content--opened');
  if (!openedContents.length) return;

  openedContents.forEach((content) => {
    const button = content.parentElement.querySelector('.big-text-button');

    content.style.maxHeight = null;
    setTimeout(() => {
      const fullHeight = content.scrollHeight;
      content.style.maxHeight = `${fullHeight}px`;

      if (fullHeight <= HIDE_TEXT_HEIGHT) {
        button.classList.add('hidden');
      } else {
        button.classList.remove('hidden');
      }
    }, 0);
  });
};

const debounsedRecalc = debounce(recalcOpenedTextHeight, 50);
window.addEventListener('resize', debounsedRecalc);

export { setBigTextToggles, checkBigTextHeight };
