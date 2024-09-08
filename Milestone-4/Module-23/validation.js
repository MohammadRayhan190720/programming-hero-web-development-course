//number validation

function multiply (num1 , num2){
  if ( typeof num1 !== 'number' || typeof num2 !== 'number'){
    return 'Please input a valid Number';
  } 

}
const mult = multiply(10,"five");
console.log(mult);

//string validation
function fullName(fName,lName){
  if (typeof fName !== 'string' || typeof lName !== 'string'){
    return 'Please input a valid name';
  }
  const fullName = fName  + " " + lName;
  return fullName;

}
const name = fullName("Rayhan",10);
console.log(name);


//object validation

function getPrice(products){
  if (typeof products !== 'object') {
    return 'please select an Object with product price';
  }
  const price = products.price;
  return price;
}
const products = {
  name: "icce-cool",
  price : 500,
  color : "green",
}
// const products = [];


const price = getPrice(products);
console.log(price);


//array validation

function getSecond(numbers){
  if (Array.isArray(numbers) !== true){
    return 'Please input a Array';
  };
  const secondIndex = numbers[1];
     return secondIndex;

}
// const numbers = [10,20,30,40,50,60];
const numbers = 10;
const result = getSecond(numbers);
console.log(result);