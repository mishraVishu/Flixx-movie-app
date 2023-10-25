const heading = document.querySelector('#heading');
const textInput = document.querySelector('#textInput');
const SelectInput = document.querySelector('#priority-input');
const checkboxInput = document.querySelector('#checkbox-input');

const onInput = (e) => {
    heading.innerHTML = e.target.value;
    console.log(e.target.value)
}

const onChecked = (e) => {
    heading.innerHTML = e.target.checked;
}

const onFocus = (e) => {
    console.log('Input is focused');
}

const onBlur = (e) => {
    console.log('Input is not focused,blur')
}

textInput.addEventListener('input', onInput);//it binds the value whatever we type in input field but keydown,keyup,keypress don't bind the values.
SelectInput.addEventListener('change', onInput);
checkboxInput.addEventListener('input', onChecked);
textInput.addEventListener('focus', onFocus);
textInput.addEventListener('blur', onBlur);