import { Scrollbar } from 'vevet';

const scrollbarWrappers = document.querySelectorAll('.custom-scrollbar-wrapper');

const initCustomScrollbar = () => {
  if (!scrollbarWrappers || !scrollbarWrappers.length) return;

  scrollbarWrappers.forEach((wrapper) => {
    const customScrollbar = wrapper.querySelector('.custom-scrollbar');

    const scrollbar = new Scrollbar({
      container: customScrollbar,
      parent: wrapper,
      autoHide: false,
    });
  });
};

export { initCustomScrollbar };
