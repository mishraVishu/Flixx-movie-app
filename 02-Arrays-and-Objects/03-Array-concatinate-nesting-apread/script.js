let x;

const fruits = ['orange', 'apple', 'pear'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

//nesting
fruits.push(berries);

x = fruits[3][1]//blueberry

//nesting
const allFruits = [fruits, berries];

x = allFruits[1][0];//strawberry

//concate
x = fruits.concat(berries)//adds two aaray elements into one.

//Spread operator(...)
x = [...fruits, ...berries] //same result as concat
 
//Flatten array 
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

//Static Methods on Array objects

x = Array.isArray(fruits)//true

x = Array.isArray('fruits')//false

x = Array.from('123456789');//['1','2','3','4','5']

const a = 23;
const b = 9;
const c = 67;
const d = 34;

x = Array.of(a,b,c,d)// [23, 9, 67, 34]

console.log('x',x);


//Challenge 1
const arr1 = [1, 2, 3, 4, 5];
//output = [6,5,4,3,2,1,0];

let y = arr1.unshift(0);
y = arr1.push(6);
y = arr1.reverse();

console.log(arr1);

// Challenge 2
const i = [1, 2, 3, 4, 5];
const j = [5, 6, 7, 8, 9, 10];
//op = [1,2,3,4,5,6,7,8,9,10];

//solution 1
let p;
const k = [...i, ...j];
console.log(k);
p = k.splice(5, 1);
console.log(k);

// //solution 2
const l = i.slice(0, 4).concat(j);
console.log(l);