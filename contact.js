const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let valid = true;
  successMessage.style.display = 'none';

  const fields = ['name', 'email', 'subject', 'message'];
  fields.forEach(field => {
    const input = document.getElementById(field);
    const error = document.getElementById(error-${field});
    error.textContent = '';
    const value = input.value.trim();

    if (!value) {
      error.textContent = 'This field is required';
      valid = false;
    } else if (field === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
      error.textContent = 'Enter a valid email';
      valid = false;
    } else if (field === 'message' && value.length < 10) {
      error.textContent = 'Message must be at least 10 characters';
      valid = false;
    }
  });

  if (valid) {
    form.reset();
    successMessage.style.display = 'block';
  }
});
