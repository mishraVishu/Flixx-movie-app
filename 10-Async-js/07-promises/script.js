// Create a promise
const promise = new Promise((resolve, reject) => {
    // Do some async task
    setTimeout(() => {
        console.log('Async task complete');
        resolve();
    },1000)
})

promise.then(() => {
    console.log('promise consumed..');
})

const getuser = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;

        if(!error)
            resolve({ name: 'john', age: 30 });
        else
            reject('Error: Something went wrong')
    }, 1000)
})
    
getuser
    .then((user) => console.log(user))
    .catch(err => console.error(err))
    .finally(()=>console.log('The Promise has been resolved or reject'));//finally() runs always whether its resolve() or reject()

console.log('Hello from Global scope');
