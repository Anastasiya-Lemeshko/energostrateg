// import { openVisibleFontCardContent, setAccordeonToggles } from './components/_accordion.js';
import { renderCustomSelect } from './components/_custom-select.js';
import { setMobileMenu } from './components/_open-mobile-menu.js';
import { moveHeader } from './components/_move-header.js';
import { setPopup } from './components/_popup.js';
import { setNavigationSwiper } from './components/_navigation-swiper.js';
import { initCardsSwiper } from './components/_cards-swiper.js';
import { moveHero } from './components/_move-hero.js';
import { setTabs } from './components/_tabs.js';

document.addEventListener('DOMContentLoaded', () => {
  renderCustomSelect();
  setMobileMenu();
  moveHeader();
  setPopup();
  setNavigationSwiper();
  initCardsSwiper();
  moveHero();
  setTabs();
});
