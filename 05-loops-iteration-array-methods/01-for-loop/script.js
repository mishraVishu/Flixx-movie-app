const names = ['Brad', 'John', 'Sara', 'Vaishali', 'Preeti'];

for (let i = 0; i < names.length; i++){
    console.log(names[i]); // Brad, John...etc..
}

//Break - Break will take you out of that loop.
for (let i = 0; i <= 20; i++){
    if (i === 15) {
        console.log('Breaking....');
        break;
    }
    console.log(i);
}

//continue - Continue will skip the code in current iteration and continue withe the next iteration.
for (let i = 0; i <= 20; i++){
    if (i === 13) {
        console.log('Skipping...');
        continue;
    }
    console.log(i);
}

//while loop => 
// it is mostly used when we don't know how many times we have to iterate.
//let i = 0;
// while (i <= 20) {
//     console.log(i);
//     i++;
// }

//loop over arrays
const arr = [10, 20, 30, 40, 50];

let j = 0;
while (j < arr.length) {
    console.log('j',arr[j]);
    j++;
}

//Nesting while loop
let k = 1;
while (k <= 2) {
    console.log('Number' + k);
    let j = 1;
    while (j <= 10) {
        console.log(`${k}*${j} = ${k * j}`)
        j++;
    }

    k++;
}

//do-while loop

// used when you want to execute the block of code atleast once.
let m = 31;

do {
    console.log('Number do-while ' + m);
    m++;
} while (m <= 20);

