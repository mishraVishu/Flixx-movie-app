//Default Params
function registerUser(user = 'BOT') {
    if (!user) {
        user = 'BOT'
    }
    return user + ` is registerd`;
}

console.log(registerUser());

//Rest params
function sum(...numbers) {
    return numbers;//returns an array of passed arguments
}

console.log(1, 2, 3, 4)//[1,2,3,4]

function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1,2,3,4,100,5,6))//121

//object params
function loginUser(user) {
    return `The user ${user.name} with id ${user.id} is logged in.`
}

const user = {
    name: 'vaishali',
    id:201
}

console.log(loginUser(user));

// Array as params
function getRandom(...arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    console.log(item);
}

getRandom(1,2,3,6,8,5,9)//don;t need to pass array because rest converts arguments into array.