//problem-1

function calculateMoney (tickets){

  if ( typeof tickets !== 'number'){
    return 'Please input a number';
  }
  const perTicketPrice = 120;
  const totalTicketPrice = tickets * perTicketPrice;
  
  const sicurityBill = 500;
  const staffLunchBill = 8 * 50;

  const PerDayTotalCost = sicurityBill + staffLunchBill ;

  const afterCostTotalTicketAmount = totalTicketPrice - PerDayTotalCost;
  return afterCostTotalTicketAmount;
  

}
const sellTicketAmount = calculateMoney('ten');
console.log(sellTicketAmount);