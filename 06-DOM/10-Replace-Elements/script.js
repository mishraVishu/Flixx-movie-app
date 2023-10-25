function replaceFisrtElement() {
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.textContent = 'Replaced First Child';
    li.className = 'item';

    firstItem.replaceWith(li);
}

function replaceSecondChild() {
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = `<li class='item'>Replaced 2nd one</li>`
}

function replaceAllItem() {
    const list = document.querySelectorAll('.item');

    list.forEach((li, index) => {
        li.innerText = `Replaced All ${index}`
    })
}

function replaceChildHeading() {
    const header = document.querySelector('header');
    const h2 = document.querySelector('header h2');

    const h3 = document.createElement('h3');
    h3.id = 'app-title';
    h3.textContent = 'Shopping List with h3';

    header.replaceChild(h3, h2);
}

replaceFisrtElement();
replaceSecondChild();
replaceAllItem();
replaceChildHeading();