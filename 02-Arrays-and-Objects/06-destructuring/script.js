let x;

const person = {
    firstName: "Vaishali",
    lastName:'Mishra',
    age: 26,
    address: {
        block: 'H',
        houseNo: '216',
        locality: 'Sanjay Nagar',
        city:'Ghaziabad'
    }
}

//destructuring
const { firstName:name, lastName, age,address:{ block,houseNo,locality,city} } = person;

//x = firstName;
x = age;
x = city;
x = name
console.log(x);
console.log(person);


//Destructuring Arrays
const numbers = [23, 45, 67, 78];

const [first, second,...rest] = numbers;//here it is rest operator not spread operator.

console.log(first, second, rest);

// Both spread and rest operators have the same syntax in JavaScript, but they perform different functionalities. The spread operator in JavaScript expands values in arrays and strings into individual elements, whereas the rest operator puts the values of user-specified data into a JavaScript array.

