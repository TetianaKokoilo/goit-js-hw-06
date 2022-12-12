const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
list.textContent = 'ingredients';
console.dir(list);

const markup = ingredients.map(ingredient => {
  const liEl = document.createElement("li");
  liEl.classList.add('item');
  liEl.textContent = ingredient;
  return liEl
  
})
list.append(...markup);
console.dir(markup);