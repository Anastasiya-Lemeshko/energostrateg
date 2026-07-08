import { MODAL_CONTENT } from "./../_vars.js";
import { initVideo } from './_video.js';

const renderPhotoToModal = (modal, button) => {
  const modalImgContainer = modal.querySelector('.modal-photo__img');
  const fullImgContainer = button.parentElement.querySelector('[data-full-photo]');

  if (!modalImgContainer || !fullImgContainer) return;

  const copyFullImg = fullImgContainer.cloneNode(true);

  modalImgContainer.innerHTML = '';
  modalImgContainer.appendChild(copyFullImg);

  initVideo(copyFullImg);
};

const renderModalContent = (modal, button) => {
  // Отрисовка динамического заголовка
  if (button.hasAttribute('data-modal-dynamic')) {
    let sourceTitle = button.closest('[data-modal-title]');
    const modalTitle = modal.querySelector('[data-modal-title]');

    if (!sourceTitle) sourceTitle = button.parentElement.querySelector('[data-modal-title]');

    if (sourceTitle && modalTitle) {
      modalTitle.textContent = sourceTitle.textContent;
    };
  }

  // заполнение поля "услуги"
  if (button.hasAttribute('data-service')) {
    const service = button.dataset.service;
    const serviceField = modal.querySelector('input[name="service"]');

    if (service && serviceField) {
      serviceField.value = `Услуга: ${service}`;
    }
  }
};

export { renderPhotoToModal, renderModalContent };
