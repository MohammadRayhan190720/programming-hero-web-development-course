// Simple function Related Practice Tasks

// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiply (num1, num2, num3, num4){
  const result = num1* num2 * num3 * num4;
      return result;
}
const numbers = multiply(5,2,3,4);
console.log(numbers)

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function doubleTripple(number){
  if ( number % 2 === 1){
    return number * 2;
  }else{
    return number / 2;
  }

}
const num = 6;
const result = doubleTripple(num);
console.log(result)

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function makeAvg(numbers,size){
  let sum = 0;

  for (const number of numbers) {
      sum +=number;
  }
  return sum / size;

}
const numbers1 = [10,20,30,40];
  const size = numbers1.length;

const avg = makeAvg(numbers1,size);
console.log(avg)

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 function count_zero(bainaryString){
  let count = 0;

  for (const char of bainaryString) { 
     if ( char === '0'){
      count ++;
     }
    
  }
  return count;

 }

 const bainaryString = "10101010101010";
 const result2 = count_zero(bainaryString);
 console.log(result2);

// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function oddEven(numbers){
  if ( numbers % 2 === 0){
    // console.log(` This is a even number`)
    return 'odd';
  }
  else{
    return 'even';
  }


}
const number = 20;
const result3 = oddEven(number);
console.log(result3)