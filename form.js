form.addEventListener('keyup', () => {
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    text: document.getElementById('text').value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
},
);
const formData = JSON.parse(localStorage.getItem('formData'));
document.getElementById('name').value = formData.name;
document.getElementById('email').value = formData.email;
document.getElementById('text').value = formData.text;

window.onload = () => {
    let savedFormData = localStorage.getItem('contactFormInput');
    savedFormData = JSON.parse(savedFormData);
    // Check if the form data object is found on localStorage
    if (savedFormData) {
    // populate inputs values if data was found
    // ex: nameInput.value = savedFormData.name
    }
  };