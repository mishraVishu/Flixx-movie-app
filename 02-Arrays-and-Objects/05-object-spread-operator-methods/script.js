let x;

//const todo = {};
const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false

x = todo;

const person = {
    address:{
        coords: {
            lat: 42.9384,
            lng:-71.3232
        }
    }
}

x = person['address']['coords']['lat'];

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4, e: 6 };

//object eith two objects inside it.
let obj3 = { obj1, obj2 };

obj3 = { ...obj1, ...obj2 };
//console.log(obj3)

const obj4 = Object.assign({}, obj1, obj2);
//Object.assign() is also used to concat or create a new object with some other object properties and methods before ES6 Object.assign() was used for this purpose.

x = obj3;

const todos = [
    { id: 1, name: 'Buy Milk' },
    { id: 2, name: 'Pick up kids' },
    { id: 3, name: 'take our trash' },
    { id: 4, name: 'Go to market' }
]

x = todos[3].name;

x = Object.keys(todos);//returns array

x = Object.keys(todo).length;

x = Object.values(todo);//returns array

x = Object.entries(todo);

x = todo.hasOwnProperty('name');//true

x = todo.hasOwnProperty('age');//false

console.log(x);