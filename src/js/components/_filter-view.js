const filters = document.querySelector('.filters');
const filterView = filters ? filters.querySelector('.filters__view') : null;
const filterList = filters ? filters.querySelector('.filters__products') : null;

const setFilterToggles = () => {
  if (!filterView || !filterList) return;

  filterView.addEventListener('click', (evt) => {
    const button = evt.target.closest('button');

    filterView.querySelector('.filters__view-toggle--active').classList.remove('filters__view-toggle--active');
    button.classList.add('filters__view-toggle--active');

    filterList.classList.remove('filters__products--animated');
    filterList.classList.add('filters__products--hidden');

    setTimeout(() => {
      if (button.classList.contains('filters__view-toggle--list')) {
        filterList.classList.add('filters__products--list', 'products-list');
      } else {
        filterList.classList.remove('filters__products--list', 'products-list');
      }

      filterList.classList.add('filters__products--animated');
      filterList.classList.remove('filters__products--hidden');
    }, 50);
  });
};

export { setFilterToggles };
