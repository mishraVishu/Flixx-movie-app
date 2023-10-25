console.log(10 > 20 && 30 > 15);//false because both expression should be true;

console.log(10 > 20 || 30 > 15)//true if one of the expression is true.

//&& - return first falsy value or last value
let a;
a = 10 && 20;//20
a = 10 && 20 && 30;//30
a = 10 && '' && 20 && 30;//''

console.log(a);

const posts = ['post 1', 'post 2'];

posts.length > 0 && console.log(posts[0]);

// || - will retuen the first truthy value or the last value;

let b;

b = 10 || 20;//10
b = 0 || 20; //20
b = 0 || null || '' || undefined // undefined because no one is truthy so last value

console.log(b);



