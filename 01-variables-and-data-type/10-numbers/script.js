let x ;

const num = new Number(52.475);

console.log(num, typeof num);//52,object

x = num.toString();//52.675,string

x = num.toString().length;//6,string

x = num.toFixed(2);//52.67,string

x = num.toPrecision(2)//53 two in total not two decimal places

console.log(x,typeof x);


