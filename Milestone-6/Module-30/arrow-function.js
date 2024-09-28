
//normal function

function multiply(x,y){
  const result = x * y;
  return result;
}
const multi = multiply(5,10);
console.log(multi);

//arrow function
// const multiply2 = (x,y) => {return x * y };
//if we not use return then remove {}
const multiply2 = (x, y) =>  x * y;
console.log(multiply2(10,10))
