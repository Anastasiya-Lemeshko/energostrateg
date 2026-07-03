import { TABLET_WIDTH, COUNT_VISIBLE_TAGS } from "../_vars.js";

const activeLists = document.querySelectorAll('.js-show-more-list-active');

const getVisibleCount = (container) => {
  const dataCount = container.dataset.count;
  if (dataCount) {
    const count = parseInt(dataCount, 10);
    if (!isNaN(count) && count > 0) return count;
  }

  return COUNT_VISIBLE_TAGS; // значение по умолчанию
};

const onButtonClick = (evt) => {
  const showButton = evt.target;
  const span = showButton.querySelector('span');

  const container = showButton.closest('.js-show-more');
  const activeList = container ? container.querySelector('.js-show-more-list-active') : null;

  const tags = activeList ? activeList.querySelectorAll('.js-show-more-tag') : null;

  if (!tags || !tags.length) return;

  const visibleCount = getVisibleCount(container);

  if (!showButton.classList.contains('js-hide-all')) {
    tags.forEach((tag, index) => {
      if (index >= visibleCount) {
        tag.classList.remove('hidden');
      }
    });
    showButton.classList.add('js-hide-all');

    if (span) {
      span.textContent = 'Скрыть';
    } else {
      showButton.textContent = 'Скрыть';
    }
  } else {
    tags.forEach((tag, index) => {
      if (index >= visibleCount) {
        tag.classList.add('hidden');
      }
    });
    showButton.classList.remove('js-hide-all');

    if (span) {
      span.textContent = 'Показать еще';
    } else {
      showButton.textContent = 'Показать еще';
    }
  }
};

const showAllTags = (list) => {
  const container = list.closest('.js-show-more');
  const buttonMore = container ? container.querySelector('.js-show-more-button') : null;
  if (!list || !buttonMore) return;

  const tags = list.querySelectorAll('.js-show-more-tag');
  if (!tags || !tags.length) return;

  const visibleCount = getVisibleCount(container);

  // если скрытие нужно только на моб.версии, а открыт десктоп - показывает все теги и выходит из функции
  if (list.classList.contains('js-show-more-mobile-only') && TABLET_WIDTH.matches) {
    buttonMore.classList.add('hidden');

    tags.forEach((tag) => {
      tag.classList.remove('hidden');
    });

    return;
  };

  if (tags.length <= visibleCount) {
    buttonMore.classList.add('hidden');
    return;
  }

  list.appendChild(buttonMore);
  buttonMore.classList.remove('hidden');

  tags.forEach((tag, index) => {
    if (index >= visibleCount) {
      tag.classList.add('hidden');
    }
  });

  buttonMore.removeEventListener('click', onButtonClick);
  buttonMore.addEventListener('click', onButtonClick);
};

const onTabChange = (list) => {
  const currentContainer = list.closest('.js-show-more');
  const buttonMore = currentContainer ? currentContainer.querySelector('.js-show-more-button') : null;

  if (buttonMore) {
    const span = buttonMore.querySelector('span');

    buttonMore.classList.remove('js-hide-all');
    if (span) {
      span.textContent = 'Показать еще';
    } else {
      buttonMore.textContent = 'Показать еще';
    }
  }
};

let moveTimeout = null;

const onWindowChange = () => {
  clearTimeout(moveTimeout);
  moveTimeout = setTimeout(() => {
    const activeLists = document.querySelectorAll('.js-show-more-list-active');

    activeLists.forEach((list) => {
      if (list.classList.contains('js-show-more-mobile-only') && TABLET_WIDTH.matches) {
        const currentContainer = list.closest('.js-show-more');
        const buttonMore = currentContainer ? currentContainer.querySelector('.js-show-more-button') : null;
        const tags = list.querySelectorAll('.js-show-more-tag');

        if (buttonMore) {
          const span = buttonMore.querySelector('span');

          buttonMore.classList.add('hidden');
          buttonMore.classList.remove('js-hide-all');
          if (span) {
            span.textContent = 'Показать еще';
          } else {
            buttonMore.textContent = 'Показать еще';
          }
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
  }, 10);
};

// скрытие табов на мобильной версии (добавление кнопки "показать все")
if (activeLists && activeLists.length) {
  activeLists.forEach((list) => {
    showAllTags(list);
  });
}

TABLET_WIDTH.addEventListener('change', onWindowChange);

export { showAllTags, onTabChange };
