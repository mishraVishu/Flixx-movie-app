let x;

const person = {
    name: 'Vaishali',
    age: 30,
    isAdmin: true,
    address: {
        block: 'H',
        houseNo: '216',
        locality: 'Sanjay Nagar',
        city:'Ghaziabad'
    },
    hobbies:['music','sports']
}
console.log(person);


x = person.name;
x = person['age'];
x = person['address']['locality']
x = person['hobbies'][0]
person.name = 'Vaishali Mishra';
person.isAdmin = false;
delete person.age;
person.hasChildren = true;

person.greet = function () {
    console.log(`Hello my name is Vishu`);   // this refers to the object itself
}

person.greet();

const person2 = {
    'first name':'vaishali'
}//is possible to so but not recommanded.

x = person2['first name'];

console.log(x);



