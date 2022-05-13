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

