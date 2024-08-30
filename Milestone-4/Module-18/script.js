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


const roll = 15;
// if(roll <= 10){
//   console.log("Good student")
// }
// else{
//   console.log("Avarage student")
// }

roll <= 10 ? console.log("Good student") : console.log("Avarage student");




