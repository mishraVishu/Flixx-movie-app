window.addEventListener('resize', () => {
    document.querySelector('h1').innerHTML = `Resized to ${window.innerWidth} * ${window.innerHeight}.`
})

window.addEventListener('scroll', () => {
    console.log(`Scrolled ${window.scrollX} * ${window.scrollY}`)
})

window.addEventListener('focus', () => {
    document.querySelector('p').style.color = 'blue';
})

window.addEventListener('blur', () => {
    document.querySelector('p').style.color = 'black';
})
