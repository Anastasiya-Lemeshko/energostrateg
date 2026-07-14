import { SMALL_DESKTOP_WIDTH } from "../_vars.js";

const product = document.querySelector('.product');
const tabs = document.querySelector('.product-tab');
const productFeatures = document.querySelector('.features');

let isFeaturesMoved = false;
let moveTimeout = null;

const moveProductFeatures = () => {
  if (!product || !tabs || !productFeatures) return;

  clearTimeout(moveTimeout);
  moveTimeout = setTimeout(() => {
    if (SMALL_DESKTOP_WIDTH.matches && !isFeaturesMoved) {
      tabs.insertAdjacentElement('beforebegin', productFeatures);

      isFeaturesMoved = true;
    }

    if (!SMALL_DESKTOP_WIDTH.matches && isFeaturesMoved) {
      tabs.insertAdjacentElement('afterend', productFeatures);

      isFeaturesMoved = false;
    }
  }, 10);
};

SMALL_DESKTOP_WIDTH.addEventListener('change', moveProductFeatures);

export { moveProductFeatures };
