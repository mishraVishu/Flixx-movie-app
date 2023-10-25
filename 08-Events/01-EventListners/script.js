const clearBtn = document.querySelector('.btn');
const logo = document.querySelector('.img'); 

//clear Event
clearBtn.addEventListener('click', clearAll)

function clearAll() {
    const ul = document.querySelector("#ul");
    ul.remove();
    //alert('Hi')
}

// In removeEventListner we have to pass the function which we have passed in addEventListner.

// setTimeout(() => {
//     clearBtn.removeEventListener('click', clearAll)
// },5000)


//clearing Progmatically
//setTimeout(() => clearBtn.click(), 5000);

//double click event 
logo.addEventListener('dblclick',dblclick)

function dblclick() {
    if (document.body.style.background !== 'green') {
        document.body.style.background = 'green';
        document.body.style.color = 'white';
    } else {
        document.body.style.background = 'white';
        document.body.style.color = 'black';
    }
}


//right click (contextmenu)
const onRightClick = (event) => {
    event.preventDefault();
    console.log('Right click event')
}
logo.addEventListener('contextmenu', onRightClick);

//mouse down event
const onMouseDown = () => {
    console.log('Mouse down event. mouse down is clicking left click or right click and holding it.if you release it then it will be click event');
}
logo.addEventListener('mousedown', onMouseDown);

//mouse up event
const onMouseUp = () => {
    console.log('Mouse Up Event.');
}
logo.addEventListener('mouseup', onMouseUp);

//mouse wheel event 
const mouseWheel = () => {
    console.log('Mouse Wheel Event.');
}
logo.addEventListener('wheel', mouseWheel);

//mouseover Event
const mouseOverEvent = () => { 
    logo.setAttribute('class','logo')
    console.log('mouse over event');
}
logo.addEventListener('mouseover', mouseOverEvent);


//mouse out Event 
const mouseOutEvent = () => { 
    logo.removeAttribute('class','logo')
    console.log('mouse out event');
}
logo.addEventListener('mouseout', mouseOutEvent);

//drag start
const dragStartEvent = () => { 
    console.log('drag start event');
}
logo.addEventListener('dragstart', dragStartEvent);

//drag event
const dragEvent = () => { 
    console.log('drag event');
}
logo.addEventListener('drag', dragEvent);

//dragEnd event 
const dragEndEvent = () => { 
    console.log('drag end event');
}
logo.addEventListener('dragend', dragEndEvent);






