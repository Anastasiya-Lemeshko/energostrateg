import { TABLET_WIDTH } from "../_vars.js";

const heroTop = document.querySelector('.hero__top');
const content = heroTop ? heroTop.querySelector('.hero__content') : null;
let isHeroMoved = false;
let moveTimeout = null;

const moveHero = () => {
  clearTimeout(moveTimeout);
  moveTimeout = setTimeout(() => {
    if (heroTop && TABLET_WIDTH.matches && !isHeroMoved) {
      heroTop.insertAdjacentElement('afterbegin', content);

      isHeroMoved = true;
    }

    if (heroTop && !TABLET_WIDTH.matches && isHeroMoved) {
      heroTop.insertAdjacentElement('beforeend', content);

      isHeroMoved = false;
    }
  }, 10);
};

TABLET_WIDTH.addEventListener('change', moveHero);

export { moveHero };
