//loop over arrays
const items = ['book', 'table', 'chair', 'kite'];
const users = [
    { name: 'John' ,id:1},
    { name: 'Sara' ,id:1},
    { name: 'Binni' ,id:1},
    { name: 'Ashu' ,id:1},
    {name:'Vicky',id:1}
]

for (const item of items) {
    console.log(item);
}

for (const user of users) {
    console.log(user, user.name);
}

//Loop over Strings
const str = 'Hello World';

for (let letter of str) {
    console.log(letter);
}

//loop over Maps
const map = new Map();
map.set('name', 'Vaishali');
map.set('age', '26');

for (const [key, value] of map) {
    console.log(key, value);
}