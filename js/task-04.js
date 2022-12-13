const counterValue = {
    value: 0,
     increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};


const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

console.dir(decrementBtn);
console.dir(incrementBtn);
console.dir(valueEl);

decrementBtn.addEventListener('click', onClickDecrement)

function onClickDecrement(evt) {
    counterValue.decrement()
    valueEl.textContent = counterValue.value;
    console.log(evt.currentTarget.textContent);
}

incrementBtn.addEventListener('click', onClickIncrement)

function onClickIncrement(evt) {
    counterValue.increment()
    valueEl.textContent = counterValue.value;
    console.log(evt.currentTarget.textContent);
}













