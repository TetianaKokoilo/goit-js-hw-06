const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

console.dir(textInput);

textInput.addEventListener('input', onTextSetting)

function onTextSetting (evt) {
    return evt.currentTarget.value
        ? (textOutput.textContent = evt.currentTarget.value)
        : (textOutput.textContent = 'Anonymous');
}

