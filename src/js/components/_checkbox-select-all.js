const selectAllContainers = document.querySelectorAll('.select-all');

const initSelectAllCheckbox = () => {
  if (!selectAllContainers || !selectAllContainers.length) return;

  selectAllContainers.forEach((container) => {
    container.addEventListener('change', (evt) => {
      const target = evt.target;
      if (!target.matches('input[type="checkbox"]')) return;

      const selectAll = container.querySelector('.select-all-checkbox');
      const otherCheckboxes = container.querySelectorAll('input[type="checkbox"]:not(.select-all-checkbox)');

      // Клик на "Выбрать все"
      if (target === selectAll) {
        otherCheckboxes.forEach(checkbox => checkbox.checked = target.checked);
      }
      // Клик на обычный чекбокс
      else if (selectAll) {
        selectAll.checked = Array.from(otherCheckboxes).every(checkbox => checkbox.checked);
      }
    });
  });
};

export { initSelectAllCheckbox };
