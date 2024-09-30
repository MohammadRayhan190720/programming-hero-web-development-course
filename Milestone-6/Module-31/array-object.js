const products = [
  { id : 1, name : "HP" , price : 80000},
  { id : 2, name : "Dell" , price : 60000},
  { id : 3, name : "Apple" , price : 180000},
  { id : 4, name : "Lenovo" , price : 45000},
  { id : 5, name : "XXX" , price : 47000}
];

//map

const names = products.map(product => product.name);
// console.log(names);
const prices = products.map(product => product.price);
console.log(prices);

//forEach
products.forEach(product => console.log(product.id));

//filter 
const expences = products.filter(product => product.price > 60000);
console.log(expences);

//find
const affortable = products.find(product => product.price < 50000 );
console.log(affortable);

//reduce
const totalPrice = products.reduce((previous,current) => previous + current.price, 0);
console.log(totalPrice);