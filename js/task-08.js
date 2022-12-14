const form = document.querySelector('.login-form');

console.dir(form);

form.addEventListener('submit', onSubmit);
function onSubmit(evt) {

  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;
  console.log('email', email.value);
  console.log('password', password.value);

    if (!email.value || !password.value) {
   alert ( "Всі поля повинні бути заповнені." );
    } else {
      const newInformation = {};
      newInformation.email = email.value;
      newInformation.password = password.value;
      console.log(newInformation);
      form.reset()
  }
  
  
  
  
}