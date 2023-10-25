let x;

x = 5 + '5';//this is an example of type coersion where js has implicitly converted 5 to string because we rae using + operator which is concatination operator.

x = 5 + Number('5');//10

x = 5 * '5';//25

x = 5 + null;//5+0 null is converted to 0 by js.

x = Number(null)//0

x = Number(true)//1

x = Number(false)//0

x = 5 + true//6

x = 5 + false //0

x = 5 + undefined //Nan if we add anything with undefined it gives Nan,type will be Number.

console.log(x, typeof x);
