import { isBackspaceKey } from './../_utils.js';
import {
  ERROR_TEXT,
  FIELD_STANDARD
} from './../_vars.js';
import IMask from 'imask';

const forms = document.querySelectorAll('.form-validate');

const inputValidate = (field) => {
  const input = field.querySelector('input');

  if (!input) return true;

  const value = input.value.trim();

  if (value === '') {
    field.classList.add('error');
    input.setCustomValidity(ERROR_TEXT.empty);
    return false;
  }

  if (FIELD_STANDARD[input.name] && !FIELD_STANDARD[input.name].test(value)) {
    field.classList.add('error');
    input.setCustomValidity(ERROR_TEXT[input.name] || ERROR_TEXT.default);
    return false;
  }

  input.setCustomValidity('');
  return true;
};

const checkboxValidate = (field) => {
  const checkbox = field.querySelector('input');

  if (!checkbox) return true;

  if (!checkbox.checked) {
    checkbox.setCustomValidity(ERROR_TEXT.checkbox);
    return false;
  }

  checkbox.setCustomValidity('');
  return true;
};

const setFormValidate = () => {
  if (!forms || !forms.length) return;

  forms.forEach((form) => {
    const formFields = form.querySelectorAll('.field-validate');
    const submitButton = form.querySelector('button[type="submit"]');

    if (!formFields || !formFields.length) return;

    const validateForm = () => {
      const formIsValid = [];

      formFields.forEach((field) => {
        if (field.className.includes('accept')) {
          formIsValid.push(checkboxValidate(field));
        } else {
          formIsValid.push(inputValidate(field));
        }
      });

      return !formIsValid.includes(false);
    };

    const updateSubmitButton = () => {
      if (!submitButton) return;
      const isValid = validateForm();
      if (isValid) {
        submitButton.removeAttribute('disabled');
      } else {
        submitButton.setAttribute('disabled', 'disabled');
      }
    };

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      const formIsValid = validateForm();

      if (!formIsValid) {
        form.reportValidity();
      }
    });

    formFields.forEach((field) => {
      if (field.className.includes('accept')) {
        const checkbox = field.querySelector('input');
        checkbox.addEventListener('change', () => {
          updateSubmitButton();
        });
      } else {
        const input = field.querySelector('input');
        input.addEventListener('input', () => {
          input.setCustomValidity(' ');
          field.classList.remove('error');
          input.blur();
          input.focus();
          updateSubmitButton();
        });
      }
    });
  });
};

const formatPhone = () => {
  if (!forms || !forms.length) return;

  if (typeof IMask === 'undefined') {
    console.warn('IMask library not loaded');
    return;
  }

  const maskOptions = {
    mask: '+{7} (000) 000-00-00',
    prepare: (str) => {
      let digits = str.replace(/\D/g, '');

      if (digits.startsWith('8')) {
        digits = '7' + digits.slice(1);
      }

      return digits;
    }
  };

  forms.forEach((form) => {
    const phoneInput = form.querySelector('input[type="tel"]');

    if (!phoneInput) return;

    IMask(phoneInput, maskOptions);
  });
};

const formatName = () => {
  if (!forms || !forms.length) return;

  forms.forEach((form) => {
    const nameInput = form.querySelector('input[name="name"]');

    if (!nameInput) return;

    nameInput.addEventListener('input', () => {
      nameInput.value = nameInput.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s-]/g, '');

      const hasEnglish = /[a-zA-Z]/.test(nameInput.value);

      if (hasEnglish) {
        nameInput.classList.add('error');
      } else {
        nameInput.classList.remove('error');
      }
    });
  });
};

export { setFormValidate, formatPhone, formatName };
