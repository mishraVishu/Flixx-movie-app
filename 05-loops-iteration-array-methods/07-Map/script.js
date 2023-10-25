//Map returns a new array.doesn't manipulate the original array.
const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];

const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

//with ForEach
const doubledNumbers2 = [];
numbers.forEach(num => doubledNumbers2.push(num * 2));
console.log(doubledNumbers2);

//Create array of companies name.
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

const CompaniesName = Companies.map(companies => companies.name)
console.log(CompaniesName);

//create an array with just company name and category as an Object.

const companyNameAndCategory = Companies.map(com => (
    {
        company_name: com.name,
        company_category: com.category
    }
));

console.log('companyNameAndCategory', companyNameAndCategory);

//Create an array with comapny length in years.

const companyYear = Companies.map(com => ({
    name: com.name,
    length:com.end-com.start + ' years'
    }
));
console.log('companyYear', companyYear);

//Chain map methods

const squareAndDouble = numbers
    .map(num => Math.sqrt(num))
    .map(sqrt => sqrt * 2)
    .map(sqrtDoubled => sqrtDoubled * 2);

console.log(squareAndDouble);

//Chaining different methods ;

const evenDouble = numbers
    .filter(num => num % 2 === 0)
    .map(even => even * 2);

console.log('evenDouble', evenDouble);
