//Javascript Object Notation.
//its a light way of interchanging data format.
// Storing data in human readbale form.
// it is very much similar to objects in javascript but here key will also be in double quotes and value will be also in double'quotes' but not numbers.

const post = {
    id:1,
    title: 'Post one',
    body:'This is body.'
}
console.log(post);

//convert object to JSON
const str = JSON.stringify(post);
console.log(str);
console.log(str.id)//undefined can't access on JSON

//convert JSON to Object
const obj = JSON.parse(str);
console.log(obj);
console.log(obj.id);//1 we can access on Objects.

const posts = [
    {
        id:1,
        title: 'Post one',
        body:'This is body.'
    },
    {
        id:2,
        title: 'Post two',
        body:'This is body.'
    }
]

const str2 = JSON.stringify(posts);
console.log(str2);


// Challenge

//step1 - create an array of Object with title,author and status and status has own,reading and read which are boolean.
const library = [
    {
    title: 'Atomic habits',
    author: 'James Clare',
    status: {
        own: true,
        reading: false,
        read:false
    }
    },
    {
        title: 'Life divine',
        author: 'Sir Aurobindo Ghosh',
        status: {
            own: true,
            reading: false,
            read:false
        }
    },
    {
        title: 'Lost Child',
        author: 'Mulk raj Anand',
        status: {
            own: true,
            reading: false,
            read:false
        }
        }
]  

//step 2- set read to true for each.
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//step 3- destructure title to firstbook ;
const {title:firstBook } = library[0];
console.log(firstBook);

//step 4 - Turn the library object into a JSON string.
console.log(JSON.stringify(library));

console.log(library);
