const numbers = [10,15,10,5,10];
const add = numbers.reduce((previous,current) => previous + current, 0);
console.log(add);