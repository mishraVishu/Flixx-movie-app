//ways to declare variables.
//var,let and const.

let firstName = 'Vaishali';
let lastname = 'Mishra';

console.log(firstName, lastname);
let age = 30;
console.log(age);
//Naming Conventions
//only letters,numbers,underscores, and dollar signs.
//can't start witha a number.

//Multi-Word Formatting
//1.fisrtName = camelCase.
//2. first-name = underscore.
//3. FirstName = PascalCase.
//4. firstname = lowercase.
    
//Re-assigning variables.
age = 31;
console.log(age);

const x = 100;
//x = 200;
console.log(x);
//const a;

//with const values must be initialized.
//we can't re-assign with const.

const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);
//here we have manipulated a const variable with array method we can do so because it is not primitive data type same with objects.

const person = {
    name: 'Baed'
};

console.log(person);

person.name = 'vaishali';
person.email = 'mvaishali951@gmail.com';

console.log(person);

//declare multiple values at once.
let e, b, c;
const f = 30,
    d = 50,
    g = 40;
