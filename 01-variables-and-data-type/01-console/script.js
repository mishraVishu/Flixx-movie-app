//console is an object and log is a function on it
console.log(100); 
console.log('Hello World!');
console.log(20, 'Hello', true);

const cx = 100;
console.log(cx);    

console.warn('Warning');
console.error('Error');

console.table({ name: 'Vaishali', email: 'vaishali@g.com' });

console.group('Starting grouping');
console.log(100); 
console.log('Hello World!');
console.log(20, 'Hello', true);
console.groupEnd();

const style = 'padding:10px;border:1px solid red;color;white;'
console.log('%cVaishali', style);