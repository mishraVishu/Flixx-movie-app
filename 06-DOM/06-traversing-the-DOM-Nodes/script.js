const parent = document.querySelector('.parent');

console.log(parent.childNodes);
console.log(parent.childNodes[3].textContent);
console.log(parent.childNodes[3].nodeName);
console.log(parent.childNodes[3].outerHTML);
console.log(parent.childNodes[3].innerText = 'Child One');
console.log(parent.childNodes[5].style.color = 'red');


//firstChild
 console.log(parent.firstChild);//white space;

// //lastChild
console.log(parent.lastChild.textContent = 'Hello')

// //getting Child 
 const child = document.querySelector('.child');

// getting parent form child
console.log(child);
console.log(child.parentNode);
//console.log(child.parentNode.innerText='Hii');
child.parentNode.style.border = '1px solid black';
child.parentNode.style.padding = '10px';
child.parentNode.style.color = 'Orange'

//Siblings

const seconditem = document.querySelector('.child:nth-child(2)');
console.log(seconditem);
console.log(seconditem.innerText);
console.log(seconditem.nextSibling.textContent);//whitespace;
console.log(seconditem.previousSibling.textContent);//whitespace;



