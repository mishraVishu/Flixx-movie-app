//We use IIFE to less populate the Global Scope . so that we can use same variable .

// const user = 'Vaishali';
//can't use 'user' variable here because it is already used in otherscript.js . To use this we have to use IIFE

(function () {
    const user = 'Vaishali';
    console.log(user);
    const hello = () => console.log('Hello from IIFE');
    hello()//can call from here only
})();

// hello()//reference Error

(function (user) {
    console.log('Hello ' + user)
})('Shaurya');//you can pass arguments in IIFE like this.

//we can use named function in IIFE but not usually we do that.
(function hello() {
    console.log('Hello vaishali');
})();


