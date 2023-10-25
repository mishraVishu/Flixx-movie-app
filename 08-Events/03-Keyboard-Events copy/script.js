const itemInput = document.querySelector('input');

const onKeyPress = (e) => {
    console.log('Keypress',e.target.value);
}

const onKeyUp = (e) => {
    //it will not miss the last character
    console.log('keyup',e.target.value)
}

const onKeyDown = (e) => {
    //if you will wnter something it will miss the last character.
    //console.log('keydown');
    // key
    console.log('key', e.key);
    if (e.key === 'Enter') {
        alert(`You entered ${itemInput.value}`);
    }

    // keyCode
    console.log('keycode', e.keyCode);

    // code
    console.log('code', e.code);
    //console.log(e.target.value)
}

// itemInput.addEventListener('keypress',onKeyPress);
//itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown',onKeyDown);
