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
