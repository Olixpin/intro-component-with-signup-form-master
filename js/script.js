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
  // const passwordValue = password.value.trim();

  if (firstNameValue === '') {
    setErrorFor(firstName, 'First name cannot be blank');
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === '') {
    setErrorFor(lastName, 'Last name cannot be blank');
  } else {
    setSuccessFor(lastName);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }

  if (password.value === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else if (password.value.length < 6) {
    setErrorFor(password, 'Password must be at least 6 characters');
  } else {
    setSuccessFor(password);
  }
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
