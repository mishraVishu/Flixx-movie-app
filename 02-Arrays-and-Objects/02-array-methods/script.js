let x; 

const arr = [34, 56, 72, 23, 12];

arr.push(45);//pushes ate end of array.

arr.pop();//removes from end of array.

arr.unshift(99);//add in the begining

arr.shift()// removes from the begining.

arr.reverse() //reverse the array.

x = arr.includes(34);//returns T or F

x = arr.indexOf(23);//returns index

x = arr.indexOf(450);// -1 if element is not present.

x = arr.slice(1, 4)//36,72,23 returns the part of array.here its 23,72,26 because arr is reversed.

//x = arr.splice(1, 2)
//arr = [12,56,34], x =[23,72] it manipulates the original array while slice doesn't manipulate the original array.

//x = arr.splice(2, 1)
// //arr=[12,23,56,34] x = [72] so if we want to remove 72 from array give index of that and second argument will be 1.

x = arr.splice(1,4).reverse().toString().charAt(1)//4

console.log(x);
console.log(arr);