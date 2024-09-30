const products = [
  { id : 1, name : "HP" , price : 800000},
  { id : 2, name : "Dell" , price : 600000},
  { id : 3, name : "Apple" , price : 1800000},
  { id : 4, name : "Lenovo" , price : 450000}
];

//map

const names = products.map(product => product.name);
// console.log(names);
const prices = products.map(product => product.price);
console.log(prices);

//forEach
products.forEach(product => console.log(product.id));