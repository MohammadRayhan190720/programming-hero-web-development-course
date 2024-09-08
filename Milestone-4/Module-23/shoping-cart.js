//calculate the cost of the products in a shoping Cart

// sum of an array

function sumArray (numbers){
  let sum = 0 ;
  for (const number of numbers) {
        sum += number;
    
  }
  return sum;

}
const numberArray =[ 50,60,70,80,90,120,180];
const totalPrize = sumArray(numberArray);
console.log("total prize of product " + totalPrize);


// sum of an object in array

function totalShopingPrize(products){
  let total = 0;
  for (const product of products){
        // total = total + product.price;
        total += product.price;
  }
  return total;
  
}
const products = [
  { name : "shampoo" , price : 500},
  { name : "facewash" , price : 400},
  { name : "shart" , price : 300},
  { name : "crime" , price : 200},
  { name : "jell" , price : 100}
];
const totalShoping = totalShopingPrize(products);
console.log("total prize of Shoping " + totalShoping);



// sum of an object in array with quentity

// function shopingTotal ( products ){
//   let total = 0 ;
//   for (const product of products){
//     const totalProductCost = product.price * product.quentity;
//     total=+ totalProductCost;
//   }
//   return total;


// }
// const products2 = [
//   { name: "shampoo", price: 500, quentity : 5 },
//   { name: "facewash", price: 400, quentity : 2 },
//   { name: "shart", price: 300, quentity : 2 },
//   { name: "crime", price: 100, quentity : 1 },
//   { name: "jell", price: 200, quentity : 1 }
// ];
// const shopingCart = shopingTotal(products2);
// console.log("shoping cart total prize " + shopingCart);