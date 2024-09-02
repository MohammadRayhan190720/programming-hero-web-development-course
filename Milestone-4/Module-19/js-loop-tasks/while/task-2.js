/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */
let oddNumber = 61;
while ( oddNumber <=100){
  if( oddNumber % 2 !== 0){
    console.log("Odd Number: " + oddNumber)
  }
  oddNumber ++;
}

for ( let i = 61; i <=100; i++){
  if(i % 2 === 1){
    console.log("Odd Number between 61-100: " + i);
}
}

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

let number = 78;
while ( number <=98){
  if( number % 2 !== 1){
    console.log("Even Number  between 78-98: " + number)
  }
  number ++;
}