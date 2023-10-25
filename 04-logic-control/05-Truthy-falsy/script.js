const email = 'test@test.com';

if (email) {
    console.log('You passed in an email.s');
}

console.log(Boolean(email));

//false values:
// - false
// - 0
// - "" or ''(Empty String)
// - null
// - undefined
// - Nan

//Truthy Values:
// - Evevry thing else that is not falsy
// - true
// -'0'
// - ' '
// - 'false'
// - []
// - {}
// - function () {}(empty function)

//Truthy and falsy caveats(chetavani):
const children = 2;

if (children) {
    console.log(`You have ${children} children.`);
} else {
    console.log('Please enter number of children.');
}

//Checking for empty arrays
const posts = ['post one', 'post 2'];

if (posts) {
    console.log('List Posts');//this printes which we don't want as array is empty but empty array is truthy value so prints this.
} else {
    console.log('No Posts')
}

//solution
if (posts.length>0) {
    console.log('List Posts');
} else {
    console.log('No Posts')
}


//Checking for empty objects
// const user = {
//     name: 'Vaishali',
//     email: "email@email.com"
// }
const user = {};

if (user) {
    console.log('List User')//same as object
} else {
    console.log('No user');
}

//solution
if (Object.keys(user).length >0) {
    console.log('List User')//same as object
} else {
    console.log('No user');
}


//Loose equality 
console.log(false == 0);//true
console.log("" == 0); // true
console.log(null == undefined)//true

console.log(false === 0);//false
console.log("" === 0); // false
console.log(null === undefined)//false


