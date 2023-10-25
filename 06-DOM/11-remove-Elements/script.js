function removeClearButton() {
    const items = document.querySelectorAll('.item');

    items.forEach((item, i) => {
        item.remove();
    })
}

function removeItem(index) {
    const li = document.querySelector(index);
    li.parentElement
    li.parentElement.remove();
    li.remove();
    
}

function removeItems(val) {
    const li = document.querySelectorAll('li');
    li[val - 1].remove();
}

//removeItems(4);

//there is another method removeChild(),it works if the element to be deleted is direct child.

