//problem-1

// function calculateMoney (tickets){
//   console.log(typeof tickets);

//   if ( typeof tickets !== 'number'){
//     return 'Please input a number';
//   } 
//   else if( tickets < 0){
//     return 'Please input a Positive number';
//   }
  
  // const perTicketPrice = 120;
  // const totalTicketPrice = tickets * perTicketPrice;
  
  // const sicurityBill = 500;
  // const staffLunchBill = 8 * 50;

  // const PerDayTotalCost = sicurityBill + staffLunchBill ;

  // const afterCostTotalTicketAmount = totalTicketPrice - PerDayTotalCost;
  // return afterCostTotalTicketAmount;
  

// }
// const sellTicketAmount = calculateMoney(-10);
// console.log(sellTicketAmount);

// more easy soulution

function calculateMoney(ticketSale){
  if ( ticketSale < 0){
    return 'Please Input a positive number';
  }
  else if ( typeof ticketSale !== 'number'){
    return 'Please Input a Valid Number';
  }
  return (ticketSale * 120) - (500 + (8*50));

}
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-10));


// problem-2

function checkName (name){
  if (typeof name !== 'string'){
    return 'Please input a valid string Name';
  }
  const lastLetter = name [name.length - 1].toLowerCase();
  const checkLetters = ['a','y' , 'i' , 'e', 'o' , 'u' ,' w'];

//   for (const letter of checkLetters) {
//     if ( letter === lastLetter ){
//       return 'Good Name';
    
//   }

// }
// return 'Bad Name';

const result4 = checkLetters.includes(lastLetter);
return result4 ? 'Good Name' : 'Bad Name';

}



console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName(199));
console.log(checkName(['Rayhan']));


//problem-3

function deleteInvalids(array){
  if (Array.isArray(array) !== true) {
    return 'Please Input a Valid  Array';

  }
  const numbersArray = [];
  for (const element of array) {
    if (typeof element === 'number' && isNaN(element) === false) {
      numbersArray.push(element);
        
    }
    
  }
   return numbersArray;

}

const result = deleteInvalids([1, null, 18, -19, NaN, "12", [1, 2], { ob: "lala"}]);
const result1 = deleteInvalids(["1" , {num:2} , NaN ]);
const result2 = deleteInvalids([1, 2, -3]);
const result3 = deleteInvalids({ num: [1, 2, 3] });

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);



//problem-4

function password(person){
  if ( person.name === undefined || person.birthYear === undefined || person.siteName === undefined || person.birthYear.toString().length !== 4){
    return 'Invalid Input';
  }
  const capitalized = person.siteName[0].toUpperCase() + person.siteName.slice(1);
  const strongPassword = capitalized+'#'+person.name+'@' +person.birthYear;
    return strongPassword;

}
const person = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
const passwordGenerate = password(person);
console.log(passwordGenerate);

const person2 = { name: "rahat", birthYear: 2002, siteName: "Facebook" };
const passwordGenerate2 = password(person2);
console.log(passwordGenerate2);
const person3 ={ name: "toky", birthYear: 200, siteName: "Facebook" }
;
const passwordGenerate3 = password(person3);
console.log(passwordGenerate3);



//problem-5

function monthlySavings(array,cost){
  if (Array.isArray(array) === false || typeof cost !== 'number'){
    return 'Invalid Input';
  }
  let totalIncome = 0;

  for (const number  of array) {
    if (number >= 3000){
      const tax = number *20 /100;
      const withoutTax = number - tax;
      totalIncome += withoutTax;
    }else{
      totalIncome += number;
    }

  }
  const saveings = totalIncome - cost;
  if (saveings >= 0){
    return saveings;
  }else{
    return 'eran more'
  }

  // return saveings >=0 ?  saveings : 'earn More';
 

}
const result5 = monthlySavings([1000, 2000, 3000], 5400);
const result6 = monthlySavings([1000, 2000, 2500], 5000);
const result7 = monthlySavings([900, 2700, 3400], 10000);
const result8 = monthlySavings(100, [900, 2700, 3400]);

console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);