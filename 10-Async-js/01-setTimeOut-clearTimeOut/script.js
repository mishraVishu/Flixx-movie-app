setTimeout(() => {
    console.log('Hello from callback');
}, 0);
//here its 0  we may thought that it will print first then hello from global scope but this is not the case because setTiemout will be placed in taskQueue and wait for global execution stack to be free.then event loop will place the this callback to the call stack.

const timerId = setTimeout(changeText, 3000);

function changeText() {
    document.querySelector('h1').textContent = 'hello from callback.'
}

document.querySelector('button').addEventListener('click',() => {
    console.log(timerId)
    clearInterval(timerId);
    console.log('Timer cancelled');
})

console.log('hello from global scope');
