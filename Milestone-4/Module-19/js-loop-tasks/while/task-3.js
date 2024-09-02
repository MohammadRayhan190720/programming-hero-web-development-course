

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
let number = 81;
let sum = 0;
while ( number <= 131){
  if ( number % 2 === 1){
      sum = sum + number;
     console.log("Step by step sum is " + sum);
  }
  number ++;
}
console.log("total sum: " + sum);
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let number1 = 206;
let sum1 = 0;
while ( number1 <= 311){
  if ( number1 % 2 === 0){
    sum1 = sum1 + number1;
    
  }
  number1 ++;
}
  console.log("Total even number sum is " + sum1);

  let sum2 = 0;
  for ( let i = 206; i <= 311; i++){
    if( i % 2 === 0){
          sum2 = sum2 + i;


    }
  
  }
      console.log("Even number total sum is :" + sum2);
