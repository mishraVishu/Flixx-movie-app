//reduce() method reduce down the whole aaray to a single value.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 0);

//short way 
const sum2 = numbers.reduce((acc,cur)=>acc+cur,0)

console.log('sum', sum2);

const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 160 },
    { id: 3, name: 'Product 3', price: 190 },
    { id: 4, name: 'Product 4', price: 150 },
    { id: 5, name: 'Product 5', price: 120 },
]

const cartTotal = cart.reduce((acc, item) => {
    return acc + item.price;
}, 0)
console.log('cartTotal', cartTotal);