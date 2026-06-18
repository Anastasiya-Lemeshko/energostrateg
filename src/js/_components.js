// import { openVisibleFontCardContent, setAccordeonToggles } from './components/_accordion.js';
import { renderCustomSelect } from './components/_custom-select.js';
import { setMobileMenu } from './components/_open-mobile-menu.js';
import { moveheader } from './components/_move-header.js';

document.addEventListener('DOMContentLoaded', () => {
  renderCustomSelect();
  setMobileMenu();
  moveheader();
});
