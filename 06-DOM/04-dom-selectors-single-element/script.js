//querySlectorAll
const items = document.querySelectorAll('.item');
console.log(items, items[1].innerText);

items.forEach((item,index) => {
    item.style.color = 'red';
    if (index === 2) {
        item.innerText = 'Orange Juice ';
        item.style.color = 'Orange';
    }
});


const listItems = document.getElementsByClassName('item');
console.log(listItems, listItems[2].innerText);

// listItems.forEach(item => console.log(item));
//gives error because listItems is an HTMLCollection not NodeList.
//for using  forEach we firtsly need to convert it to array.

const listItemsArray = Array.from(listItems);

listItemsArray.forEach(item => console.log(item.innerText));


const listItems2 = document.getElementsByTagName('li');
console.log(listItems2,listItems2[0].innerText)//gives HTMLCollection