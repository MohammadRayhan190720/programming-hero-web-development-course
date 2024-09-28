
//normal function declaration

// function multiply(x,y){
//   const result = x * y;
//   return result;
// }
// const multi = multiply(5,10);
// console.log(multi);
function multiply(x,y){
  return x * y;
  
}
const multi = multiply(5,10);
console.log(multi);

//function expression
const add = function(x,y){
  return x + y;
}
console.log(add(5,15));

//arrow function
// const multiply2 = (x,y) => {return x * y };
//if we not use return then remove {}
const multiply2 = (x, y) =>  x * y;
const add2 = (num1,num2,num3,num4,num5,num6) => num1 + num2 + num3 + num4 + num5 + num6;
const sum = add2(1,2,3,4,5,6);
console.log(sum);


