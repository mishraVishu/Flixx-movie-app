// Primitive data types: The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types.

//String
const firstName = 'Sara';
const output = firstName
console.log(output, typeof (firstName));

//Number 
const age = 30;
const temp = 98.6;
console.log(age, typeof (age));
console.log(temp, typeof (temp));

//boolean
const hasKids = true;
console.log(hasKids, typeof (hasKids));

//null
const aptNumber = null;
console.log(aptNumber, typeof (aptNumber));
//type of null is object.
// So null simply meant nothing or void and was represented by all 0’s. Hence all its 32 bits were 0’s. So whenever the JavaScrit interpreter reads null, it considers the first 3 bits as type “object”. That is why typeof null returns “object”.


//undefined
let score;
console.log(score, typeof (score));

//Symbol
const id = Symbol('id');
console.log(id, typeof (id));

//bigInt
const n = 90034563782863672782n;
console.log(n, typeof (n));

//Refernce Types
// Non-primitive data types: The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types. It is also known as derived data types or reference data types.

//array
const num = [1, 2, 3, 4];
console.log(num, typeof (num));
//This because in javascript all derived data type is always a type object. Included functions and array. In case you need to check if it's an array you can use isArray method of Array. 


//Object
const person = {
    name: 'sara',
    age: 30,
}
console.log(person, typeof (person));

//using Array.isArray() method
console.log('checking for array',Array.isArray(num));
console.log('checking for Object',Array.isArray(person));

//using instanceof operator
console.log(num instanceof Array);
console.log(person instanceof Array)

//function
function sayHello() {
    console.log('hello');
}
console.dir(sayHello);
console.log(sayHello, typeof (sayHello));
//Functions are not normal objects (with properties and methods), they are called first-class objects. The reason for this is that functions can be called while objects cannot. This helps Javascript in differentiating between functions and objects.

//To confirm that functions are objects, we can use the instanceof operator
console.log(sayHello instanceof Object);