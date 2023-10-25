let date = new Date();

date = new Date(2021, 6, 8);

date = new Date(2021, 0, 10, 7, 30, 0);

date = new Date('2023-01-10');

date = new Date('2023-01-10T12:30:00');

date = new Date('2023-07-01 11:15:00');

date = new Date('2023-07-10');

date = new Date('07-10-2023 07:15:00');

//getting time stamp 
date = new Date().getTime();//valueOf() also return the same value as getTime();

date = new Date(1693314999722);//get date from timestamp in ms

date = Math.floor(Date.now() / 1000)//will give value in second if we devide by 1000.

console.log(date, typeof date);

date = new Date();

let x = date.toString() //will give string represntation od date.

x = date.getTime() //time in ms

x = date.valueOf()//time in ms

x = date.getFullYear();//2023

x = date.getMonth()//7 its august which is 8 so it does one less than actual

x = date.getDate();//13

x = date.getDay()//0 which means sunday

x = date.getHours() //16

x = date.getMinutes() //43

x = date.getSeconds()

x = date.getMilliseconds();

x = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

x = date.toLocaleDateString('default', {
    weekday:'short',
    month: 'short',
    year: 'numeric',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone:'Asia/kolkata'
}
)

console.log(x);