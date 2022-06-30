// ' use script ';
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === '') {
    setErrorFor(firstName, 'First name cannot be blank');
  } else if (!isNaN(firstNameValue)) {
    setErrorFor(firstName, 'First name cannot be a number');
    return false;
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === '') {
    setErrorFor(lastName, 'Last name cannot be blank');
  } else if (!isNaN(lastNameValue)) {
    setErrorFor(lastName, 'Last name cannot be a number');
    return false;
  } else {
    setSuccessFor(lastName);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
    return false;
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else if (passwordValue.length < 6) {
    setErrorFor(password, 'Password must be at least 6 characters');
    return false;
  } else {
    setSuccessFor(password);
  }

  if (
    firstNameValue === '' ||
    lastNameValue === '' ||
    emailValue === '' ||
    passwordValue === ''
  ) {
    return false;
  }

  //make popup visible
  const popup = document.querySelector('.popup');
  popup.classList.add('popup--visible');
  console.log('Form Submitted successfully');

  // Close popup button
  const closePopup = document.querySelector('.popup__close');
  closePopup.addEventListener('click', () => {
    popup.classList.remove('popup--visible');

    // Clear form
    form.reset();
    // Clear all errors

    if (firstName.parentElement.classList.contains('success')) {
      firstName.parentElement.classList.remove('success');
    }
    const formControls = document.querySelectorAll('.form__control');
    formControls.forEach(element => {
      element.className = 'form__control';
    });
  });

  return true;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form__control success';
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  console.log(formControl);
  const small = formControl.querySelector('small');
  formControl.className = 'form__control error';
  small.innerText = message;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
