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

  for (const letter of checkLetters) {
    if ( letter === lastLetter ){
      return 'Good Name';
    
  }

}
return 'Bad Name';

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
    if (typeof element === 'number') {
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

