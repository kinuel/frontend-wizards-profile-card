document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.querySelector('[data-testid="test-contact-name"]');
  const email = document.querySelector('[data-testid="test-contact-email"]');
  const subject = document.querySelector('[data-testid="test-contact-subject"]');
  const message = document.querySelector('[data-testid="test-contact-message"]');

  const nameError = document.querySelector('[data-testid="test-contact-error-name"]');
  const emailError = document.querySelector('[data-testid="test-contact-error-email"]');
  const subjectError = document.querySelector('[data-testid="test-contact-error-subject"]');
  const messageError = document.querySelector('[data-testid="test-contact-error-message"]');
  const success = document.querySelector('[data-testid="test-contact-success"]');

  let valid = true;

  // Clear messages
  [nameError, emailError, subjectError, messageError, success].forEach(el => el.textContent = "");

  // Name
  if (name.value.trim() === "") {
    nameError.textContent = "Full name is required.";
    valid = false;
  }

  // Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email (emmanuelchukwuebuka539@gmail.com)";
    valid = false;
  }

  // Subject
  if (subject.value.trim() === "") {
    subjectError.textContent = "Subject is required.";
    valid = false;
  }

  // Message
  if (message.value.trim().length < 10) {
    messageError.textContent = "Message must be at least 10 characters.";
    valid = false;
  }

  // Success
  if (valid) {
    success.textContent = "Message sent successfully!";
    this.reset();
  }
});
