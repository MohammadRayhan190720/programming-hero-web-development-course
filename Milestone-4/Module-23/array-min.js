//find the cheapest phone form an Array


// const phonePrizes = [20000, 15000, 25000, 30000, 40000, 35000];

// function cheapestPhone (numbers){
//   let cheapPrize = numbers[0];
//   for (let number of numbers) {
//     if ( number < cheapPrize ) {
//          cheapPrize = number;

//     }
  
//   }
//   return cheapPrize;

// }
// const cheapPhone = cheapestPhone(phonePrizes);
// console.log("cheap phone prizes: " + cheapPhone);


//find the cheapest phone form an Array of Phone Objects

const phones = [
  { name : "Sumsun", phice : 25000 , color : "Green" , chamera : " 12MGP"},
  { name : "Itel", phice : 21000 , color : "Green" , chamera : " 12MGP"},
  { name : "Sony", phice : 55000 , color : "Green" , chamera : " 12MGP"},
  { name : "Vivo", phice : 35000 , color : "Green" , chamera : " 12MGP"},
  { name : "Nokia", phice : 45000 , color : "Green" , chamera : " 12MGP"},
  { name : "Lenovo", phice : 65000 , color : "Green" , chamera : " 12MGP"},
  { name : "Tecno", phice : 15000 , color : "Green" , chamera : " 12MGP"},
  { name : "Iphone", phice : 100000 , color : "Green" , chamera : " 12MGP"}
]

function cheapMobile(numbers){
  let minPrize = numbers[0];
  for (const number of numbers) {
      if ( number.phice < minPrize.phice){
           minPrize = number;
      }
    
  }
  return minPrize;

}
const minPrizePhone = cheapMobile(phones);
console.log(minPrizePhone);