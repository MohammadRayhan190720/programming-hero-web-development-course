//calculate the cost of the products in a shoping Cart

// sum of an array

function sumArray (numbers){
  let sum = 0 ;
  for (const number of numbers) {
        sum += number;
    
  }
  return sum;

}
const numberArray =[ 50,60,70,80,90,120,180];
const totalPrize = sumArray(numberArray);
console.log("total prize of product " + totalPrize);


//