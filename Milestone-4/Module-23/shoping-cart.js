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

function totalShopingPrize( products){
  let total = 0;
  for (const product of products){
        total=+ product.price;
  }
  return total;
  
}
const products = [
  { name : "shampoo" , price : "300"},
  { name : "facewash" , price : "200"},
  { name : "shart" , price : "500"},
  { name : "crime" , price : "150"},
  { name : "jell" , price : "700"}
];
const totalShoping = totalShopingPrize(products);
console.log("total prize of Shoping " + totalShoping);


