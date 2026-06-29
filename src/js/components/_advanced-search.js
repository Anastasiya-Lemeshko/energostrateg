import { COUNT_VISIBLE_FIELDS, SMALL_DESKTOP_WIDTH, TABLET_WIDTH } from "../_vars.js";

const filter = document.querySelector('.filters');
const form = filter ? filter.querySelector('.filters__form') : null;
const buttonOpen = filter ? filter.querySelector('.filters__button-open') : null;
const filterContainer = form ? form.querySelector('.filters__fields-list') : null;
const fieldsList = filterContainer ? filterContainer.querySelectorAll('.filters__group') : null;
const advansedButton = form ? form.querySelector('.filters__advanced-search') : null;
const controls = filter ? filter.querySelector('.filters__controls') : null;

let initialHeightForm = 0;
let initialHeightList = 0;
let isClasses = true;
let isControlsMoved = false;

// функция расчета высоты формы
const heightCalculate = () => {
  if (!fieldsList || !fieldsList.length) return;

  // сброс рассчитаной высоты

  filterContainer.style.removeProperty('max-height');
  form.style.removeProperty('max-height');

  // расчет высоты формы в открытом виде
  initialHeightForm = form.scrollHeight;

  // расчет высоты списка со скрытыми элементами
  fieldsList.forEach((field, index) => {
    if (index >= COUNT_VISIBLE_FIELDS) {
      field.classList.add('hidden');
    }
  });

  initialHeightList = filterContainer.scrollHeight;
  filterContainer.style.maxHeight = `${initialHeightList}px`;

  fieldsList.forEach((field, index) => {
    if (index >= COUNT_VISIBLE_FIELDS) {
      field.classList.remove('hidden');
      field.classList.add('field-hidden');
    }
  });
};

// функция открытия дополнительных полей
const showTags = () => {
  fieldsList.forEach((field, index) => {
    if (index >= COUNT_VISIBLE_FIELDS) {
      field.classList.remove('field-hidden');
    }
  });
  filterContainer.style.maxHeight = `${filterContainer.scrollHeight}px`;
  form.style.maxHeight = `${initialHeightForm}px`;
  advansedButton.classList.add('js-hide-all');
  advansedButton.textContent = 'Простой поиск';
};

// функция закрытия дополнительных полей
const hideTags = () => {
  form.style.maxHeight = `${initialHeightForm}px`;
  filterContainer.style.maxHeight = `${initialHeightList}px`;
  fieldsList.forEach((field, index) => {
    if (index >= COUNT_VISIBLE_FIELDS) {
      field.classList.add('field-hidden');
    }
  });
  advansedButton.classList.remove('js-hide-all');
  advansedButton.textContent = 'Расширенный поиск';
};

// проверка необходимости аккордеона
const checkAccordion = () => {
  // снимает классы аккордеона на десктопе
  if (buttonOpen && form && SMALL_DESKTOP_WIDTH.matches && isClasses) {
    buttonOpen.classList.remove('accordion-button', 'accordion-button--active');
    form.classList.remove('accordion-content', 'accordion-content--opened');
    isClasses = false;
  }

  // вешает классы аккордеона на десктопе
  if (buttonOpen && form && !SMALL_DESKTOP_WIDTH.matches && !isClasses) {
    buttonOpen.classList.add('accordion-button', 'accordion-button--active');
    form.classList.add('accordion-content', 'accordion-content--opened');
    isClasses = true;
  }
};

// двигает блок контролов
const moveControls = () => {
  // ставит контролы после фильтров
  if (form && controls && SMALL_DESKTOP_WIDTH.matches && !isControlsMoved) {
    form.insertAdjacentElement('afterend', controls);
    isControlsMoved = true;
  }

  // ставит контролы перед фильтрами
  if (form && controls && !SMALL_DESKTOP_WIDTH.matches && isControlsMoved) {
    form.insertAdjacentElement('beforebegin', controls);
    isControlsMoved = false;
  }
};

const setAdvancedSearch = () => {
  if (!advansedButton || !fieldsList || !fieldsList.length) return;

  // если фильтров мало, прячет кнопку расширенного поиска
  if (fieldsList.length <= COUNT_VISIBLE_FIELDS) {
    advansedButton.classList.add('hidden');
    return;
  }

  heightCalculate();
  checkAccordion();
  moveControls();

  advansedButton.addEventListener('click', () => {
    if (!advansedButton.classList.contains('js-hide-all')) {
      showTags();
    } else {
      hideTags();
    }
  });
};

// обработчики на ресайзы
let moveTimeoutDecktop = null;
let moveTimeoutTablet = null;

SMALL_DESKTOP_WIDTH.addEventListener('change', () => {
  clearTimeout(moveTimeoutDecktop);
  moveTimeoutDecktop = setTimeout(() => {
    if (advansedButton.classList.contains('js-hide-all')) {
      hideTags();
    }
    heightCalculate();
    checkAccordion();
    moveControls();
  }, 10);
});

TABLET_WIDTH.addEventListener('change', () => {
  clearTimeout(moveTimeoutTablet);
  moveTimeoutTablet = setTimeout(() => {
    if (advansedButton.classList.contains('js-hide-all')) {
      hideTags();
    }
    heightCalculate();
  }, 10);
});

export { setAdvancedSearch };
