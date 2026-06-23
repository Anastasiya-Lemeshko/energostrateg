import { TABLET_WIDTH } from "../_vars.js";

const activeLists = document.querySelectorAll('.js-show-more-list-active');

const onButtonClick = (evt) => {
  const showButton = evt.target;

  const container = showButton.closest('.js-show-more');
  const activeList = container ? container.querySelector('.js-show-more-list-active') : null;

  const tags = activeList ? [...activeList.children].filter(el => !el.classList.contains('js-show-more-button')) : null;

  if (!tags || !tags.length) return;

  if (!showButton.classList.contains('js-hide-all')) {
    tags.forEach((tag, index) => {
      if (index >= 12) {
        tag.classList.remove('hidden');
      }
    });
    showButton.classList.add('js-hide-all');
    showButton.textContent = 'Скрыть';
  } else {
    tags.forEach((tag, index) => {
      if (index >= 12) {
        tag.classList.add('hidden');
      }
    });
    showButton.classList.remove('js-hide-all');
    showButton.textContent = 'Показать еще';
  }
};

const showAllTags = (list) => {
  const container = list.closest('.js-show-more');
  const buttonMore = container ? container.querySelector('.js-show-more-button') : null;
  if (!list || !buttonMore) return;

  const tags = [...list.children].filter(el => !el.classList.contains('js-show-more-button'));
  if (!tags || !tags.length) return;

  // если скрытие нужно только на моб.версии, а открыт десктоп - показывает все теги и выходит из функции
  if (list.classList.contains('js-show-more-mobile-only') && TABLET_WIDTH.matches) {
    buttonMore.classList.add('hidden');

    tags.forEach((tag) => {
      tag.classList.remove('hidden');
    });

    return;
  };

  if (tags.length <= 12) {
    buttonMore.classList.add('hidden');
    return;
  }

  list.appendChild(buttonMore);
  buttonMore.classList.remove('hidden');

  tags.forEach((tag, index) => {
    if (index >= 12) {
      tag.classList.add('hidden');
    }
  });

  buttonMore.removeEventListener('click', onButtonClick);
  buttonMore.addEventListener('click', onButtonClick);
};

const onWindowChange = () => {
  const activeLists = document.querySelectorAll('.js-show-more-list-active');

  activeLists.forEach((list) => {
    if (list.classList.contains('js-show-more-mobile-only') && TABLET_WIDTH.matches) {
      const buttonMore = list.querySelector('.js-show-more-button');
      const tags = [...list.children].filter(el => !el.classList.contains('js-show-more-button'));

      if (buttonMore) {
        buttonMore.classList.add('hidden');
        buttonMore.classList.remove('js-hide-all');
        buttonMore.textContent = 'Показать еще';
      }

      if (tags && tags.length) {
        tags.forEach((tag) => {
          tag.classList.remove('hidden');
        });
      }
    };

    if (list.classList.contains('js-show-more-mobile-only') && !TABLET_WIDTH.matches) {
      showAllTags(list);
    }
  });
};

if (activeLists && activeLists.length) {
  activeLists.forEach((list) => {
    showAllTags(list);
  });
}

TABLET_WIDTH.addEventListener('change', onWindowChange);

export { showAllTags };
