const submitBtn = document.querySelector('.submit-btn');
const body = document.querySelector('body div:nth-child(6)');
console.log(body.innerHTML);


const onClick = (e) => {
    alert('button Clicked');
    e.stopPropagation();
}

const onBodyClick = (e) => {
    e.preventDefault();
    alert('Body Clicked');
}


submitBtn.addEventListener('click', onClick);
body.addEventListener('click',onBodyClick)