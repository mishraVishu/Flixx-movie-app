function sayhello() {
    console.log("Hello Everyone");
}//defining a function

sayhello();//calling a afunction

//parameters
function add(num1,num2){
    console.log(num1 + num2);
}

//arguments
add(5, 10);

function subtract(num1,num2) {
    return num1 - num2;
}

const res = subtract(10, 2);
console.log(res);