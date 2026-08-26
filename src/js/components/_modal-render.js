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

  // заполнение поля "товар"
  if (button.hasAttribute('data-product-name')) {
    const productName = button.dataset.productName;
    const productField = modal.querySelector('input[name="product_name"]');

    if (productName && productField) {
      productField.value = `${productName}`;
    }
  }

  // заполнение поля "id товара"
  if (button.hasAttribute('data-product-id')) {
    const productId = button.dataset.productId;
    const productField = modal.querySelector('input[name="product_id"]');

    if (productId && productField) {
      productField.value = `${productId}`;
    }
  }
};

export { renderPhotoToModal, renderModalContent };
