//  ||= assign right side value if the left side is a falsy value.

let a = false;

// if (!a) {
//     a = 10;
// }

// or

a = a || 10;

//  or

a ||= 10;

console.log(a);

// &&= assign right side value only if left side is a truthy value.

let b = 20;

if (b) {
    b = 30;
}

//  or

b = b && 30;

// or

b &&= 30;

console.log(b);

// ??= assign the right side value only if the left side is null or undefined.
//  it works pnly for null and undefined
let c = null;

if (c === null || c === undefined) {
    c = 20;
}

c = c ?? 20;

c ??= 20;

console.log(c);