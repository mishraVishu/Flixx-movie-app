console.log(addDollarSign(200));//$200;

//Function Declaration
function addDollarSign(value) {
    return '$' + value;
}

console.log(addDollarSign(200));

//console.log(addPlusSign(400));//gives error saying not defined because only function declaration moves to top not function expressions.

//Function Expression
const addPlusSign = function (value){
    return '+' + value;
} 

console.log(addPlusSign(400));

//So there is a concept of hoisting which means moving all the variables and function declarations on the top of tha page so here also function declaration will be moved to the top of the page before execution. 