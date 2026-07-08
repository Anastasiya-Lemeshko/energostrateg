import { showAllTags, onTabChange } from './_show-more.js';
import { checkBigTextHeight } from './_hide-big-text.js';

const tabs = document.querySelectorAll('.tabs');

const setTabs = () => {
  if (!tabs || !tabs.length) return;

  tabs.forEach((tab) => {
    const tabLinkContainer = tab.querySelector('.tabs__tablinks');
    const tabContentContainer = tab.querySelector('.tabs__tabcontents');

    if (!tabLinkContainer) return;

    const tabLinks = [...tabLinkContainer.children].map(item => item.querySelector('.tabs__tablink'));
    const tabContents = tabContentContainer ? [...tabContentContainer.children].filter(el => el.classList.contains('tabs__tabcontent')) : null;

    const openTabs = (evt) => {
      const btnTarget = evt.currentTarget;
      const section = btnTarget.dataset.tab;

      tabLinks.forEach((link) => {
        link.classList.remove('tabs__tablink--active');
      });

      if (tabContents && tabContents.length) {
        tabContents.forEach((item) => {
          item.classList.remove('tabs__tabcontent--active');
        });
      }

      const activeList = tab.querySelector('.js-show-more-list-active');
      if (activeList) {
        activeList.classList.remove('js-show-more-list-active');
      }

      const newContent = tab.querySelector(`[data-tab-content="${section}"]`);

      // проверяет, есть ли у табконтента функция "показать все"
      if (newContent) {
        const listElement = newContent.classList.contains('js-show-more-list') ? newContent : newContent.querySelector('.tabs__tabcontent--active.js-show-more-list');

        if (listElement) {
          listElement.classList.add('js-show-more-list-active');
          showAllTags(listElement);
          onTabChange(listElement);
        }

        newContent.classList.add('tabs__tabcontent--active');
      }

      btnTarget.classList.add('tabs__tablink--active');

      checkBigTextHeight();
    };

    tabLinks.forEach((tablink) => {
      tablink.addEventListener('click', openTabs);
    });
  });
};

export { setTabs };
