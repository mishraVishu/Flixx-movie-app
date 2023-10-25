console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').getAttribute('src'));
console.log(document.getElementById('app-title').className);

//Set Attributes
console.log(document.getElementById('app-title').id = 'new-id');
console.log(document.getElementById('new-id').setAttribute('class', 'title'));
console.log(document.getElementById('new-id').classList);

// Get/Change content
console.log(document.getElementById('text').textContent);

console.log(document.getElementById('text').textContent = 'DOM SELECTORS CHANGED FROM JS');

console.log(document.getElementById('text').innerText = 'Dom Selectors');

console.log(document.getElementById('main-div').innerHTML = `<h3 id='text'>Shopping List</h3>`);

//Change styles
const text = document.getElementById('text')
text.style.color = 'red';
text.style.backgroundColor = 'black';
text.style.padding = '10px';
text.style.borderRadius = '10px';
text.style.width = '16vw';

//document.querySelector();
// returns first element that matches the selector, or null if no match is found

console.log(' by tag', document.querySelector('div'));
console.log('by id', document.querySelector('#text'));
console.log('by class', document.querySelector('.title'));
console.log('h3', document.querySelector('input[type="text"]'));
console.log('li',document.querySelector('li:nth-child(3)').innerText);

const thirdItem = document.querySelector('li:nth-child(3)');

thirdItem.innerText = 'Apple Juice';
thirdItem.style.color = 'red';

//Use these methods on othere elements other than document

const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';