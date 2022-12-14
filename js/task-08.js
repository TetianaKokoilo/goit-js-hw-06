const form = document.querySelector('.login-form');
console.dir(form);

form.addEventListener('submit', onSubmit);
const validateForm = true;
function onSubmit(event) {
  event.preventDefault();
  if (document.login-form == '') {
    alert('Всі поля повинні бути заповнені!');
    validateForm = false;
  }

  
  const formData = new FormData(event.currentTarget);

  console.log(formData);

  formData.forEach((value, name) => {
    console.log(`name`, name);
    console.log(`value`, value);
  });
    return validateForm;

  //   document.getElementById(".login-form").reset();
}
// function validate_form() {
//   valid = true;

//   if (document.login - form.email.password.value == '') {
//     alert('Все поля должны быть заполнены.');
//     valid = false;
//   }

//   return valid;
// }

// function onSubmit(evt) {
//     evt.preventDefault()

//     const {email, password} = evt.currentTarget.elements;
//     console.log('email', email.value);
//     console.log('password', password.value);

// }
