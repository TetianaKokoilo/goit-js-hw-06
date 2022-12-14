const form = document.querySelector('.login-form');

console.dir(form);

form.addEventListener('submit', onSubmit);
function onSubmit(evt) {

  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;
  console.log('email', email.value);
  console.log('password', password.value);

    if (form.email.value || form.password.value === '' ) {
   alert ( "Всі поля повинні бути заповнені." );
    } else {
      return evt.currentTarget.elements
  }
  // form.reset()
  
}