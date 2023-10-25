//Get child elements

const parent = document.querySelector('.parent');
console.log(parent);
console.log(parent.children);
console.log(parent.children[1]);
console.log(parent.children[1].innerText);
console.log(parent.children[1].className);
console.log(parent.children[1].nodeName);

parent.children[1].innerText = 'Changed Innertext';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'First Child Innertext';
parent.firstElementChild.style.color = 'Orange';

parent.lastElementChild.innerText = 'last Child Innertext';
parent.lastElementChild.style.color = 'green';

//get parent element from child

const child = document.querySelector('.child');
console.log(child);
console.log(child.parentElement);
console.log(child.parentElement.innerText);
console.log(child.parentNode);

//get sibling elements

const secondItem = document.querySelector('.child:nth-child(2)');
console.log(secondItem.innerText);//2nd child
console.log(secondItem.nextElementSibling.innerText);
secondItem.nextElementSibling.style.color = 'green';

console.log(secondItem.previousElementSibling);
secondItem.previousElementSibling.style.color = 'orange'
