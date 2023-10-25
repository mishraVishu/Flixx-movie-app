const clearBtn = document.querySelector('.btn');
const logo = document.querySelector('.img'); 

//clear Event
function clearAll(e) {
    e.target.style.backgroundColor = 'black';
    e.target.style.color = 'white';
    console.log('target', e.target);
    console.log('currentTarget', e.currentTarget);
    console.log('type', e.type);
    console.log('timeStamp', e.timeStamp);
    console.log('clientX', e.clientX);
    console.log('clientY', e.clientY);
    console.log('offsetX', e.offsetX);
    console.log('offsetY', e.offsetY);
    console.log('screenX', e.screenX);
    console.log('screenY', e.screenY);
}
clearBtn.addEventListener('click', clearAll);

document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
   
})//prevent the degault behaviour and will do what js will tell it to do

document.body.addEventListener('click', (e) => {
    console.log(e.target);
    console.log(e.currentTarget)
})

// target - element which triggered the event.
// currentTarget - element to which listener is attached.(same in above case.
// type  - type of event that was triggered.
// timeStamp - timestamp when event was triggered.
// clientX, clientY - coordinates of mouse relative to window.
// offsetX,offsetY - coordinates of mouse(button in this case ) relative to element.
// screenX , screenY - coordinates of mouse relative to monitor screen
