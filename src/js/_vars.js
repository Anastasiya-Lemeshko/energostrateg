export default {
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
}

export const TABLET_WIDTH = window.matchMedia('(min-width: 768px)');
export const SMALL_DESKTOP_WIDTH = window.matchMedia('(min-width: 1024px)');
export const DESKTOP_WIDTH = window.matchMedia('(min-width: 1366px)');

export const HEADER_FIXED_OFFSET = 500;

export const COUNT_VISIBLE_TAGS = 12;
export const COUNT_VISIBLE_FIELDS = 9;

export const HIDE_TEXT_HEIGHT = 175;

export const MODAL_TIMER = 3000000;

export const TABS_DELAY = 5000;

export const TEXTAREA_LINEHEIGHT = 22;

export const MODAL_CONTENT = {
  'title': {
    'individual-calc': 'Получите индивидуальный расчёт под ваш проект',
    'request': 'Оставьте заявку — мы подберём оптимальное решение для вашей перголы',
    'order': 'Закажите перголу с гарантией результата',
    'cost': 'Точная стоимость — для вашего проекта под ключ',
    'question': 'Не нашли нужной информации? Спросите нас напрямую',
    'design': 'Закажите перголу с индивидуальным дизайном',
  },
  'desc': {
    'question': 'Мы на связи и готовы помочь с выбором, расчётом или техническими нюансами.',
  },
  'pattern': {
    'individual-design': 'Заказать перголу {title} по индивидуальному дизайну',
  },
}

export const SLIDER_CONFIG = {
  'default': {
    'mobile_count': 1,
    'tablet_count': 2,
    'desktop_count': 3,
  },
  'hero': {
    'mobile_count': 1,
    'tablet_count': 1,
    'desktop_count': 1,
    'loop': true,
    'auto_height': false,
  },
  'products-list': {
    'mobile_count': 2,
    'tablet_count': 3,
    'desktop_count': 10000,
    'loop': false,
    'has_navigation': false,
    'has_scrollbar': true,
  },
  'products-list-short': {
    'mobile_count': 2,
    'tablet_count': 3,
    'desktop_count': 4,
    'loop': false,
    'has_navigation': false,
    'has_scrollbar': true,
  },
  'clients': {
    'mobile_count': 'auto',
    'tablet_count': 'auto',
    'desktop_count': 10000,
    'loop': false,
    'has_navigation': false,
    'has_scrollbar': true,
    'mobile_margin': 20,
    'desktop_width': SMALL_DESKTOP_WIDTH,
  },
  'reviews': {
    'mobile_count': 'auto',
    'tablet_count': 'auto',
    'desktop_count': 10000,
    'loop': false,
    'has_navigation': false,
    'has_scrollbar': true,
    'mobile_margin': 20,
    'desktop_width': SMALL_DESKTOP_WIDTH,
  },
  'product-tab': {
    'mobile_count': 'auto',
    'tablet_count': 2,
    'desktop_count': 4,
    'loop': false,
    'has_navigation': false,
    'has_scrollbar': true,
    'mobile_margin': 20,
    'desktop_margin': 20,
    'desktop_width': SMALL_DESKTOP_WIDTH,
  },
  'steps': {
    'mobile_count': 1,
    'tablet_count': 2,
    'desktop_count': 4,
    'loop': false,
    'desktop_width': SMALL_DESKTOP_WIDTH,
  },
  'thanks': {
    'mobile_count': 'auto',
    'tablet_count': 2,
    'desktop_count': 4,
    'loop': false,
    'mobile_margin': 20,
    'desktop_margin': 20,
    'desktop_width': SMALL_DESKTOP_WIDTH,
  },
  'compare': {
    'mobile_count': 2,
    'tablet_count': 3,
    'desktop_count': 4,
    'gap': 20,
  },
};

export const RANGE_VALUES = {
  'default': {
    'min': 0,
    'max': 100,
    'step': 1,
    'start': 0,
    'end': 100,
  },
  'min-price': {
    'min': 350000,
    'max': 500000,
    'step': 10000,
    'start': 300000,
  },
  'max-price': {
    'min': 500000,
    'max': 700000,
    'step': 10000,
    'start': 450000,
  },
  'price': {
    'min': 350000,
    'max': 700000,
    'step': 10000,
    'start': 300000,
    'end': 700000,
  },
  'years': {
    'min': 1,
    'max': 24,
    'step': 1,
    'start': 1,
    'end': 24,
  },
  'people': {
    'min': 1,
    'max': 24,
    'step': 1,
    'start': 1,
    'end': 24,
  },
};

export const COUNT_GRID_COLUMNS = {
  default: 2,
  multiform: {
    mobile: 1,
    tablet: 2,
    desktop: 3
  },
};
