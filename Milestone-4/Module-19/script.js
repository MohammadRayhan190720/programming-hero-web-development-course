//for of loop

// const numbers = [12, 32, 14, 85, 25, 23];

// for (const num of numbers) {
//   console.log(num)

  
// }

// const fruits = ["mango","banana","apple","jackfruits","orange"]
// for (const fruit of fruits) {
//   console.log(fruit);
//   console.log("I eat fruits: " + fruit);
// }

//while loop

// const num = 7;
// if(num < 10){
//   console.log("Small number")
// } else{
//   console.log("Big number")
// }

// let num = 0;
// while(num < 5){
//   console.log("Number: " + num)
//   // num ++;
//   // num = num + 1;
//      num += 1;
// }

//while loop problem solveing

//print 1-10;

// let num1 = 1;
// while(num1 <= 10){
//   console.log(num1);
//   num1++;
// }

//print 1-100

// let num2 = 1;
// while (num1 <= 100) {
//   console.log(num1);
//   num1++;
// }

//sum of 1-10

// let num3 = 1 ;
// let sum = 0 ;

// while( num3 <= 10){
//   sum = sum + num3;
//   console.log(sum)
//   num3++;
// }

//print even number

// let num4 = 1 ;
// while( num4 <=10){
//   if(num4 % 2 ===  0){
//     console.log("Even numbr is " + num4)
//   }
//  num4++;

// }

// for loop

// for ( let i = 0; i<=10 ; i++){
//   console.log(i)
// }

//even number print

// for (let i = 0; i<= 20 ; i+=2){
//   console.log(i)
// }
//odd number print

// for (let i = 1; i<= 20 ; i+=2){
//   console.log(i)
// }

//for loop problem solveing

//sum of 1-20 numbers

// let sum1 = 0;

// for( i = 1; i<=20 ; i++){
//   console.log(i);
//   sum1 = sum1 + i ;

// }
// console.log("sum of 1-20 is :" + sum1)

//decrement

// for ( i = 10; i >=0 ; i--){
//   console.log(i)
// }

//while loop decrement

// let num5 = 10 ;
// while ( num5 >= 0){
//   console.log(num5);
//   num5--;
// }

//different ways to use loop
// odd number print 1-20
//1

// for( i = 0 ; i <= 20 ; i++){
//   if ( i % 2 === 1){
//     console.log(i);
//   }
// }

//2
// for( i = 0 ; i <= 20 ; i++){
//   if ( i % 2 !== 0){
//     console.log(i);
//   }
// }

//3

// for (i = 1; i <= 20; i+=2) {
//   console.log(i);
  
// }

//list of number between 1-30 divided by 5

// for ( i = 1 ; i <=30 ; i++){
//   if( i % 5 === 0){
//     console.log(i)
//   }
// }

//list of number between 1-30 divided by 3

// for ( i = 1 ; i <= 30 ; i++){
//   if( i % 3 === 0){
//     console.log(i)
//   }
// }

//list of number between 1-30 divided by 3 and 5
for ( i = 1 ; i <= 30 ; i++){
  if ( i % 3 === 0 && i % 5 ===0){
    console.log(i)
  }
}


//list of number between 1-30 divided by 3 or 5
// for (i = 1; i <= 30; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     console.log(i);
//   }
// }

//list of number between 1-30 divided by 3 and sum of these number
let sum = 0 ;
for (i = 1; i <= 30; i++) {
  if (i % 3 === 0 ) {
    console.log(i);
    sum = sum + i ;
    console.log("total step setp by sum " + sum)
  }
}

console.log("Total sum of number between 1 -30 : " + sum)


