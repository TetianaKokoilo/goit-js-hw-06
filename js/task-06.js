const input = document.querySelector('#validation-input');
console.dir(input);

input.addEventListener('input', onCheck)


function onCheck() {
  if (input.value.length !== Number(input.dataset.length)) {
    input.classList.add(`invalid`);
  } else input.classList.replace(`invalid`, `valid`);
}