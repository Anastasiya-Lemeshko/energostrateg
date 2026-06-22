import { TABLET_WIDTH } from "../_vars.js";

const heroTop = document.querySelector('.hero__top');
const content = heroTop ? heroTop.querySelector('.hero__content') : null;
let isHeroMoved = false;

const moveHero = () => {
  if (heroTop && TABLET_WIDTH.matches && !isHeroMoved) {
    heroTop.insertAdjacentElement('afterbegin', content);

    isHeroMoved = true;
  }

  if (heroTop && !TABLET_WIDTH.matches && isHeroMoved) {
    heroTop.insertAdjacentElement('beforeend', content);

    isHeroMoved = false;
  }
};

TABLET_WIDTH.addEventListener('change', moveHero);

export { moveHero };
