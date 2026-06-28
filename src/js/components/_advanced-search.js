import { COUNT_VISIBLE_FIELDS } from "../_vars.js";

const filter = document.querySelector('.filters');
const form = filter ? filter.querySelector('.filters__form') : null;
const filterContainer = form ? form.querySelector('.filters__fields-list') : null;
const fieldsList = filterContainer ? filterContainer.querySelectorAll('.filters__group') : null;
const advansedButton = form ? form.querySelector('.filters__advanced-search') : null;

const setAdvancedSearch = () => {
  if (!advansedButton || !fieldsList || !fieldsList.length) return;

  // если фильтров мало, прячет кнопку расширенного поиска
  if (fieldsList.length <= COUNT_VISIBLE_FIELDS) {
    advansedButton.classList.add('hidden');
    return;
  }

  // расчет высоты формы в открытом виде
  const initialHeightForm = form.scrollHeight;

  // расчет высоты списка со скрытыми элементами
  fieldsList.forEach((field, index) => {
    if (index >= COUNT_VISIBLE_FIELDS) {
      field.classList.add('hidden');
    }
  });

  const initialHeightList = filterContainer.scrollHeight;
  filterContainer.style.maxHeight = `${initialHeightList}px`;

  fieldsList.forEach((field, index) => {
    if (index >= COUNT_VISIBLE_FIELDS) {
      field.classList.remove('hidden');
    }
  });

  // функции открытия и закрытия дополнительных полей
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

  advansedButton.addEventListener('click', () => {
    if (!advansedButton.classList.contains('js-hide-all')) {
      showTags();
    } else {
      hideTags();
    }
  });
};

export { setAdvancedSearch };
