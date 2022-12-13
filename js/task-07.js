const input = document.querySelector('#font-size-control');
const output = document.querySelector('#text')
console.dir(input);
console.dir(output);

input.addEventListener('input', onChangeStyle)

function onChangeStyle () {
    return output.style.fontSize = `${input.value}px`;

}

