const filters = document.querySelector('.filters');
const filterView = filters ? filters.querySelector('.controls__view') : null;
const filterList = filters ? filters.querySelector('.filters__products') : null;

const setFilterToggles = () => {
  if (!filterView || !filterList) return;

  filterView.addEventListener('click', (evt) => {
    const button = evt.target.closest('button');

    filterView.querySelector('.controls__view-toggle--active').classList.remove('controls__view-toggle--active');
    button.classList.add('controls__view-toggle--active');

    filterList.classList.remove('filters__products--animated');
    filterList.classList.add('filters__products--hidden');

    setTimeout(() => {
      if (button.classList.contains('controls__view-toggle--list')) {
        filterList.classList.add('filters__products--list', 'products-view-list');
      } else {
        filterList.classList.remove('filters__products--list', 'products-view-list');
      }

      filterList.classList.add('filters__products--animated');
      filterList.classList.remove('filters__products--hidden');
    }, 50);
  });
};

export { setFilterToggles };
