// array even return
const evens = [];

function evenArray (numbers){
  for (const number of numbers) {
       if ( number % 2 !== 1){
        evens.push(number);
        
       }    
  }
  return evens;

}
const numbers = [2,5,3,8,10,15];
const result = evenArray(numbers);
console.log(result);


//sum of even numbers
let sum = 0;
function sumOfEven(numbers){
  for (const number of num) {
    if ( number % 2 !== 1){
      sum += number;
    }
    
  }
  return sum;
  

}
const num = [2, 5, 3, 8, 10, 15];
const resultSum = sumOfEven(num);
console.log(resultSum);

