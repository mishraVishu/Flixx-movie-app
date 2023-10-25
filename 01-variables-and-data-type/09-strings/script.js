let x;

const name = 'john';
const age = 30;

x = 'hello my name is ' + name + 'and i am ' + age;

// //Template Literals
x = `Hello, my name is ${name} and my age is ${age}.`

// //properties and methods
const s = 'hello World';//as it is primitive data type so what angular does is 
const q = new String('Hello world') 
//and its type is object so now we can aplly methods and properties on it.

x = typeof q;//object

x = s.length;

//Access value by index.
 x = s[2]// l

x = s.__proto__;

x = s.toUpperCase();//HELLO WORLD

x = s.toLowerCase();//hello world

x = s.charAt(3);//l

x = s.indexOf('W')//6

x = s.indexOf('e')//here more than one e so will give index of first e // 1

x = s.substring(0,5)//hello (takes two index from where to start and upto which index. if so 5 till index 4 only.)

x = s.slice(-10, -7)//ell here we can give -ive values also, this also  gives upto end value so if -7 then  till -6 only.

x = '      Hello World    #';
x = x.trim();

x = s.replace('World', 'John')//hello John  1st is which we want to replace ,2nd is with which we want to replace.

x = s.includes('hell')//true

x = s.includes('helli')//false

x = s.split(' ')//['hello','World']
// //it takes argument with which we want to split and returns an array.

x = s.split('e')//['h','llo World'];

x = s.split('')//['h','e','l','l','o','w','o','r','l','d']

console.log(x);
console.log(s);

//Challenge
//  Make 'developer' to 'Developer'
let a = 'developer';

// //solution 1:
myNewString = a.charAt(0).toUpperCase() + a.substring(1);

myNewString = `${a.charAt(0).toUpperCase()}eveloper`;

myNewString = a.charAt(0).toUpperCase() + a.slice(1);

console.log(myNewString);
