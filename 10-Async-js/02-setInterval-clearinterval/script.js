let intervalId;
//start change
document.getElementById('start').addEventListener('click', () => {
     intervalId= setInterval(() => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = `#${randomColor}`
    }, 500)
})

//stop change
document.getElementById('stop').addEventListener('click', () => {
    clearInterval(intervalId);
});