// NOTE - let,const are block scoped but var is not block scoped.
// NOTE - Var is function scoped.

const x = 100;//doesn't add to global window 
const foo = 1;//doesn't add to global window 
var baar = 2;//adds to global window object.

if (true) {
    const y = 20;
    console.log(x+y)//120
    console.log(x)//100 Global scope
}

// console.log(x+y)//Reference error,Y is not defined because y is in Block scope.

for (let i = 0; i <= 10; i++){
    console.log(i);
}

//console.log(i);//Reference error,i is not defined because i is in Block scope.

if (true) {
    const a = 500;
    const b = 700;
    var c = 800;
}

//console.log(a);//refernece Error
//console.log(b);//refernece Error
console.log(c); //available if declare with var because it is not  block scoped.

// NOTE - Var is function scoped.

function run() {
    var d = 100;
    console.log(d);
}

run();

//console.log(d);//Reference Error ,d nor=t defined , var is function scoped so getting this error