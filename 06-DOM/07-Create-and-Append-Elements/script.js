const div = document.createElement('div');
div.className = 'my-class';
div.setAttribute('id', 'my-id');
const text = document.createTextNode('Hello world !');
div.appendChild(text);
document.body.appendChild(div);