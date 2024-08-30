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

