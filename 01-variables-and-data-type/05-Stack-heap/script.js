//values are stored on the stack.
const name = 'john';
const age = 30;
console.log('name', name);
console.log('age', age);

//Refrence values are stored on heap
const person = {
    name: 'Brad',
    age : 40
}

let newname = name;
console.log('newname',newname);

newname = 'johnathon';
console.log('newname', newname);//newname is changed
console.log('name', name);//but name is still having same value as previous.

newname = person;
console.log('newname',newname);

newname.name = 'Vaishali';
newname.age = 26;

console.log('newname',newname);//{name: 'Vaishali', age: 26}
console.log('person', person);//{name: 'Vaishali', age: 26} 
// we have changed newname but person is also changed becauuse it is derived data type, stored on heap and we have only reference of it on stack so if we change the value of one othere will be changed automatically.
console.log(name);
// name is still john because it is stored on stack and we are accessing it from that only.