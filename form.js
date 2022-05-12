const formName = document.querySelector('#name');
const email = document.querySelector('#email');
const formtext = document.querySelector('#text');
const inputData = {};
const storage = window.localStorage;
/**@returns form data */
r
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
      e.code === 22 ||
      e.code === 1014 ||
      e.name === 'QuotaExceededError' ||
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0);
  }
}

function retrieveFormData() {
  if (storageAvailable('localStorage')) {
    const formDataString = storage.getItem('formData');
    const formData = JSON.parse(formDataString);
    return formData;
  }
  return false;
}

function populateForm() {
  const formData = retrieveFormData();
  if (formData) {
    if (formData.name) {
      formName.value = formData.name;
    }
    if (formData.email) {
      email.value = formData.email;
    }
    if (formData.text) {
      formtext.value = formData.text;
    }
  }
}
populateForm();

formName.addEventListener('change', () => {
  inputData.name = formName.value;
  inputData.email = email.value;
  inputData.text = formtext.value;
  storage.setItem('formData', JSON.stringify(inputData));
});

email.addEventListener('change', () => {
  inputData.name = formName.value;
  inputData.email = email.value;
  inputData.text = formtext.value;
  storage.setItem('formData', JSON.stringify(inputData));
});

formtext.addEventListener('change', () => {
  inputData.name = formName.value;
  inputData.email = email.value;
  inputData.text = formtext.value;
  storage.setItem('formData', JSON.stringify(inputData));
});
