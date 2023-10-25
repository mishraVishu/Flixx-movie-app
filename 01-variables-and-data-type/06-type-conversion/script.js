let amount = '100.34';

//Change string to Number
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);
console.log(amount,typeof amount);

//Change Number to string
amount = amount.toString();
//here amount id primitive type but still we are able to use methods on it while methods are available on Objects resaon is tha js creates a wrapper and attach methods of appropriate type extinsically.
amount = String(amount);
console.log(amount ,typeof amount);

//Change string to decimal;
x = '99.5';
x = parseFloat(amount);
console.log(x ,typeof x);

//Change number to boolean
let y = 1;
y = Boolean(1)
console.log(y ,typeof y);

let a = 'hello';
a = parseInt(a);
console.log(a ,typeof a);

console.log(typeof (NaN))//number
// The type of NaN , which stands for Not a Number is, surprisingly, a number. The reason for this is, in computing, NaN is actually technically a numeric data type. However, it is a numeric data type whose value cannot be represented using actual numbers.
