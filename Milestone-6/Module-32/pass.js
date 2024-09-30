//primitive => pass by value
let num1 = 5;
let num2 = 7;
function multiply(a,b){
  a = 20;
  const result = a * b;
  return result;

}
console.log(num1);
multiply(num1, num2);
console.log(num1);

//non-primitive => pass by reference
let friends1 = { name : "Asif" , partner : "Josna"}
let  friends2 = { name : "Mudgho" , partner : "borsha"}

function bestFriend(x,y){
  x.name = "Sakib";
  y.partner = "Purnima";

}
 console.log(friends1)
 bestFriend(friends1,friends2);
 console.log(friends1);