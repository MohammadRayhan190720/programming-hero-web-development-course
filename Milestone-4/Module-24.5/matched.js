const numbers = [ 25, 30, 10 ,12 ,15];
// for ( let i = 0; i < numbers.length; i++){
//   const number = numbers[i];
//   console.log(number);
// }

// for (const number of numbers) {
//   console.log(number);
// }



const products = [
  { id : "1" , name : "Tecno phone" , price : 15000},
  { id : "2" , name : "Nokia phone" , price : 15000},
  { id : "3" , name : "Sungsung phone" , price : 15000},
  { id : "4" , name : "Lexo phone" , price : 15000},
  { id : "5" , name : "Realme phone for Gift" , price : 15000},
  { id : "6" , name : "HP Laptop" , price : 15000},
  { id : "7" , name : "Lenovo laptop" , price : 15000},
  { id : "8" , name : "Asus Latop" , price : 15000},
  { id : "9" , name : "Walton Laptop" , price : 15000},
  { id : "10" , name : "Apple Laptop" , price : 15000},
  { id : "11" , name : "One Plus Phone" , price : 15000},

]

// for (const product of products) {
  
//   console.log(product);
// }

function matchedProduct (products, search){
  let phones = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())){
      phones.push(product);
    }

  }
  return phones;

}
const result = matchedProduct(products, "phone");
console.log(result);