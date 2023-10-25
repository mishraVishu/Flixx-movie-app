function first() {
    const x = 100;

    function second() {
        const y = 200;
        console.log('function scope x+y',x + y);//you can access paarent variables in child function.
    }

    //console.log(y);//error you can't access child variables in parent function
    second();
}

first();

if (true) {
    const x = 100;

    if (x === 100) {
        const y = 200;
        console.log('block scope x+y',x + y);//300
    }

    console.log(y);//error because y is a const let and const ate block scoped and accessiblw outside that.
}