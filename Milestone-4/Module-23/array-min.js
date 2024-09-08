//find the cheapest phone form an Array


const phonePrizes = [20000, 15000, 25000, 30000, 40000, 35000];

function cheapestPhone (numbers){
  let cheapPrize = numbers[0];
  for (let number of numbers) {
    if ( number < cheapPrize ) {
         cheapPrize = number;

    }
  
  }
  return cheapPrize;

}
const cheapPhone = cheapestPhone(phonePrizes);
console.log("cheap phone prizes: " + cheapPhone);