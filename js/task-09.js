const changeColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
// console.dir(changeColor);
// console.dir(textColor);

changeColor.addEventListener('click', () => {

  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  textColor.textContent = color;
})


function getRandomHexColor () {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
