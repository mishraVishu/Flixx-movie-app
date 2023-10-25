console.log(window);
console.dir(window.document);

console.log(document.body.innerHTML);

console.log(document.body.innerText);

console.log(document.links[0]);//gives collection of links on the HTML page in the form of HTMLCollection .

//document.body is not readonly we can change the value of it.

// document.body.innerHTML = '<h1>Hello Vaishali</h1>';

document.write('hello from Js.')//adds at the end of document.

console.dir(document.getElementById('main'));

const main = document.getElementById('main');

// main.innerHTML = `<h1>Hello from main</h1>`;
// console.log(document.getElementById('main'));

console.log(document.querySelector('#main h1').innerText="Hello")