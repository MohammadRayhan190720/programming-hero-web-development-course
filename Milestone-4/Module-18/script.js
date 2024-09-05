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
const roll = 15;
if(roll <= 10){
  console.log("Good student")
}
else{
  console.log("Avarage student")
}

roll <= 10 ? console.log("Good student") : console.log("Avarage student");

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
  mullo = mullo + 100;
}else{
  mullo = 0;
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

let burgerPrize = 450 ;
if( burgerPrize >=500){
  console.log("free coke")
} else{
  console.log("coke :30tk")
}


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
let weight = 75;
let height = 3.40;
let BMI = weight / (height)
if(BMI < 18.5){
  console.log("you are underweight")
}
else if(BMI >= 18.5 && BMI <= 24.9){
  console.log("you are normal");
}
  else if(BMI >= 25 && BMI <= 29.9){
    console.log("you are overweight");
  
  }
  else{
    console.log("you are obese")
  }


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
const marks = 55;
if(marks >= 90 && marks <=100){
  console.log("Your grade is : A")
} else if (marks >= 80 && marks <=89){
  console.log("Your grade is : B");
  
}
else if(marks >=70 && marks <=79){
  console.log("Your grade is : C");
}
else if(marks >=60 && marks <=69){
  console.log("Your grade is : D");
}
else{
  console.log("Your grade is : F");
}



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
const myMarks = 70;
const friendMarks = 30;

if(myMarks >=80){
       if(friendMarks >=80){
        console.log("Lets go for a lunch");
  } 
        else if(friendMarks <80 && friendMarks >=60){
        console.log("Good luck next-time")
   }
   else if(friendMarks <60 && friendMarks >=40){
        console.log("I will unseen you message")
   } else{
       console.log("Block my friend")
   }
}else{
  console.log("Go to home and sleep and act sad")
}



//task-5

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
const num1 = 10;
const num2 = 20;
let result1;
// if(num1> num2){
//   result1 = num1*num1;
//   console.log(result1);
// }else{
//   result1 = num1 + num2;
//   console.log(result1);
// }

num1>num2 ? console.log(result = num1*num1): console.log(result = num1 + num2)


//task-6

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const ticket = 800;
let age1 = 60;
let students = false;
if( age1 <10 ){
  ticket = 0;
  console.log(ticket)
} else if( students === true){
  // 50% discount
  const discountAmount = 800*50/100;
  const payAmount = ticket - discountAmount;
  console.log(payAmount);

} else if(age1 >=60){
  // 15% discount
  const discountAmount = 800*15/100;
  const payAmount = ticket - discountAmount;
  console.log(payAmount)
} else{
  console.log(ticket);
}

//reallife conditions practice from MDN

// const weather = document.querySelector("select");
// const result2 = document.querySelector("#pera");

// weather.addEventListener("change", setWeather);

// function setWeather (){
//   const choice = weather.value;


//    if(choice === "sunny"){
//     result2.textContent =
//       "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
//    }
//    else if( choice === "Rainy"){
//     result2.textContent =
//       "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
//    }
//    else if (choice === "snowing") {
//      result2.textContent =
//        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
//    } else if (choice === "overcas") {
//      result2.textContent =
//        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
//    }
//    else{
//     result2.textContent = "";
//    }
// }




