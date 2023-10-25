// insertAdjacentElement Example
function insertElement() {
    const ul = document.querySelector('#ul');

    const h3 = document.createElement('h3');
    const textNode1 = document.createTextNode('insertAdjacentElement');
    h3.appendChild(textNode1);

    const h4 = document.createElement('h1');
    const textNode = document.createTextNode('insertAdjacent');
    h4.appendChild(textNode);

    ul.insertAdjacentElement('beforebegin', h3);

    // ul.insertAdjacentElement('afterbegin', h4);
}

// InsertAdjacentText Example
function inserttext() {
    const firstItem = document.querySelector(".item");
    
    firstItem.insertAdjacentText('afterend','foo')
}

// InsertAdjacentHTML Example
function insertHTML() {
    const btn = document.querySelector('.btn');
    btn.insertAdjacentHTML('afterend','<h2>hello</h2>')
}

// Insertbefore Example
function insertBeforeItem() {
    const ul = document.querySelector('#ul');

    const li = document.createElement('li');
    li.textContent = 'NewInserted Item';
    li.className = "item";

    const thirdItem = document.querySelector('li:nth-child(3)');

    ul.insertBefore(li, thirdItem);
}

//Custom insertAfter() Example
function insertAfter() {
    const li = document.createElement('li');
    li.textContent = 'Insert After Item';
    li.className = "item";

    const thirdItem = document.querySelector('li:nth-child(3)');

    thirdItem.insertAdjacentElement('afterend', li);
    
}

insertElement();
inserttext();
insertHTML();
insertBeforeItem();
insertAfter();

/*
<!-- beforebegin -->
    <p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
    </p>
<!-- afterend -->    
*/