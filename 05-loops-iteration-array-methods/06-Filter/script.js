//filter returns so we store it in variable which is array,
//so it returns an array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

//Same with forEach
let evenNumber =[];
numbers.forEach(num => {
    if (num % 2 === 0) {
        evenNumber.push(num);
    }
    return evenNumber;
})

console.log('EvenNumber', evenNumber);

const Companies = [
    { name: 'Comapany One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Comapany two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Comapany Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Comapany four', category: 'technology', start: 2009, end: 2014 },
    { name: 'Comapany five', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Comapany Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Comapany Seven', category: 'Retail', start: 1999, end: 2011 },
    { name: 'Comapany Eight', category: 'Technologu', start: 2011, end: 2016 },
    {name:'Comapany Nine',category:'Retail',start:1981,end:1989},
]

const Retail = Companies.filter(com => com.category === 'Retail');
console.log('category - Retail', Retail);

const StartEnd = Companies.filter(com => com.start >=1980 && com.end <=2005);
console.log('Early Companies', StartEnd);