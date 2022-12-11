const list = document.querySelector('#categories');
// console.dir(list.children);

const items = [...list.children];

const quantity = items.length
console.log('Number of categories:', quantity);


items.forEach((item) => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.childElementCount);
  });