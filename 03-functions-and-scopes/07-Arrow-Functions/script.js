//This is introduced in ES6.

// Function Declaration using Function keyword.
// function add(a, b) {
//     return a + b;
// }

//Arrow functions
const add = (a, b) => {
    return a + b;
};

console.log('add',add(2, 3));

//implicit return 
const subtract = (a, b) => a - b;
console.log('subtract', subtract(3, 2));

// can leave off () with a single param;
const double = a => a * 2;
console.log('subtract', double(3));

//Returning an Object
const createObj = () => ({
    name: 'Vaishali',
});
console.log('object', createObj());


const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (n) {
//     console.log('array Element',2 * n);
// })

//Arrow function in a callback
numbers.forEach(n => console.log('arr element',n*2))


