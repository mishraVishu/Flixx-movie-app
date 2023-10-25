//Challenege 1

// create a function called get Celsius that takes a temperature in Fahrenheit as an argument and then returns the temperature in Celsius

const getCelsius = (f) => Math.round((f - 32) * 5 / 9);

console.log(`The temperature is ${getCelsius(75)}\xB0C `);

//Challenge 2

// Create an arrow function called `minMax()` that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.

const numbers = [1, 2, 3, 4, 5];
const max = Math.max(...numbers);//spread operator spread the value of an array  into seperate arguments.
const min = Math.min(...numbers);

const minmax = () => ({
    min: min,
    max: max
});

console.log('Object', minmax());

//Challenge 3

//Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a rectangle outputs it to the console in a message as soon as the page loads.

(function (l, b) {
    console.log(`The area of rectangle of length ${l} and width ${b} is ${l * b}.`)
})(5,10);