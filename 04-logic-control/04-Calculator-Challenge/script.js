const Calculator = (num1, num2, operator) => {
    let res;
    switch (operator) { 
        case '+':
            res= num1 + num2;
            break;
        case '-':
            res= num1 - num2;
            break;
        case '*':
            res= num1 * num2;
            break;
        case '/':
            res= num1 / num2;
            break;
        default:
            return 'This is error'
    }

    console.log(res);
    return res;
}

console.log(Calculator(50, 10,'+'));