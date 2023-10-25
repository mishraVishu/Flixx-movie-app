//1st way (Quick and dirty) less efficient it causes web browsers to  re-parse and re-create DOM nodes 
function createListItem(item) {
    const ul = document.querySelector("#ul");
    const li = document.createElement('li');
    li.innerHTML = `${item}` 
    li.className = 'item';
    ul.appendChild(li);
}

createListItem('Eggs');

//2nd way (Clean and performant)
function createListItems(item) {
    const ul = document.querySelector("#ul");
    const li = document.createElement('li');
    const itemText = document.createTextNode(item);
    li.appendChild(itemText);
    li.className = 'item';
    ul.appendChild(li);
}

createListItems('Bread');
