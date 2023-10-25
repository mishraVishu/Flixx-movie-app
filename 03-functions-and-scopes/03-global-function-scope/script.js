let x = 100;
console.log(x, 'in global');

function run() {
    console.log(window.innerHeight);
    console.log(x, 'in function');
    //console.log(y)//reference Error Y is not defined
}

run();

if (true) {
    console.log(x, 'in block');
}

function add() {
    const x = 1;
    const y = 50;//function scoped
    console.log(x+y);//51 prefers local x if x is not available in function scope then it will look for x in global scope.
}

//console.log(y)//reference Error Y is not defined
add();
