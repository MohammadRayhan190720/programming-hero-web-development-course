// if, else if, else
let money = 490;

if ( money >= 500){
  console.log("Traveling National Zoo")
} else{
  console.log("Rest in Bed")
}

let age = 24;
if(age >= 24){
  console.log("Perfect time for merrage")
} else if(age <= 20){
  console.log("Take time for marrage")
} else{
  console.log("early marrage")
}

//multiple conditional Logical Operators

// program-1

const shoping = 1000;

if ( shoping >= 5000){
  //discount 20%
  let discountAmount = shoping * 20 / 100 ;
  let payAmount = shoping - discountAmount;
  console.log(payAmount);
}
else if ( shoping >= 2000){
  let discountAmount = shoping *10 / 100 ;
  let payAmount = shoping - discountAmount;
  console.log(payAmount);
}

else{
  console.log(shoping);
}
// program-2

const year = 42 ;
const foodPrize = 1000;
if( year <= 12){
  console.log("you can eat free as a child")
}
else if( year >=40){
  let discountAmount = foodPrize * 10 / 100 ;
  let payAmount = foodPrize - discountAmount;
  console.log(payAmount);
}
else if( year >=50){
  let discountAmount = foodPrize * 20 / 100 ;
  let payAmount = foodPrize - discountAmount;
  console.log(payAmount);
}
else if( year >=60){
  let discountAmount = foodPrize * 50 / 100 ;
  let payAmount = foodPrize - discountAmount;
  console.log(payAmount);
}

else {
  console.log(foodPrize);
  
}

// grade calculation

//tarnary operator

// normal case
// const roll = 15;
// if(roll <= 10){
//   console.log("Good student")
// }
// else{
//   console.log("Avarage student")
// }

// roll <= 10 ? console.log("Good student") : console.log("Avarage student");

// advence ternary
// let prize = 500;
// const isLeader = true;
 
// if(isLeader === true){
//   prize = 0;
// }else{
//   prize = prize +100;
// }
// console.log(prize)

// use tarnary

// prize = isLeader === true ? 0 : prize + 100 ;
// console.log(prize);
// more advance
// advence ternary
let prize = 1500;
const isLeader = true;
 
// if(isLeader === true){
//   if(prize >= 1000){
//     prize = prize /2;
//   }else{
//     prize = 0;
//   }
// }else{
//   prize = prize +100;
// }
// console.log(prize)

// use tarnary

// prize = isLeader === true ? 
//                     prize >=1000 ?
//                      prize /2 : 0 : 
//                      prize + 100 ;
// console.log(prize);

//logical not(!)

let mullo = 500;
const isneta = false;
 
if(!isneta){
  mullo = 0;
}else{
  mullo = mullo +100;
}
console.log(mullo)

// use tarnary

// prize = isLeader === true ? 0 : prize + 100 ;
// console.log(prize);


let result = 10 < "5";
console.log(result);

// task-1
/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

//task-2
/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

//task-3

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

//task-4

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

//task-5

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

//task-6

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/




