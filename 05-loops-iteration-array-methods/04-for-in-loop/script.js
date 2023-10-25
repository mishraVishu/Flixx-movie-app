//Used for loop through Objects

const colorObj = {
    color1: 'Red',
    color2: 'Black',
    color3: 'Orange',
    color4: 'Pink',
    color5: 'Yellow',
    color6: 'green',
}

for (const key in colorObj) {
    console.log(`${key} : ${colorObj[key]}`);
}

const colors = ['red', 'yellow', 'green', 'pink'];

for (const color in colors) {
    console.log(colors[color])
}

const obj = {
    name: 'Vaishali',
    sister: 'Preeti',
    brother: 'Vikas',
}

for (const data in obj) {
    console.log(`${data} : ${obj[data]}`)
}