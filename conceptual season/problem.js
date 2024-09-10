//একটা array থেকে সবথেক বিগ নাম্বার টি Return kore?
//without function;

const numbers = [20,40,80,166,170];
let maxNumber = numbers[0];
for (let i = 1; i < numbers.length; i++){
      if ( numbers[i] > maxNumber){
          maxNumber = numbers[i];
      }
      
}
const result = maxNumber;
console.log(result);