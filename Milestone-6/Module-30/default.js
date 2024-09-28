//default parameter => if value is not provided, take this as a default value

function sum(num1,num2 = "0"){
  const result =  num1 + num2;
  console.log(num1 , num2 , result);
  return result ;
}
// const add = sum(20,30);
const add = sum(20);

console.log(add);
