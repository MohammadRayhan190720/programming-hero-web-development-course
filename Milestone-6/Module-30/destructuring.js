
//object destructuring

const persons = {
  name : "Jonh",
  phone : "01723408269",
  address : "Rangpur",
  id : 101,
}
//if the right sight will be an object left side will be an object as well
const {phone,address} = persons;

//change property name
const  { name:identity, id} = persons;  //its called alias
console.log(phone);
console.log(address);
// console.log(name);
console.log(identity);

//array destructuring
const numbers = [20,30,40];
const [num1,num2,num3] = numbers;
// console.log(num1);
// console.log(num2);
// console.log(num3);
const [x,y] = [45,50];

//advanced destructuring
function doubleIt(x,y){
  return [x*2 , y*2];

}
const [number1,number2] = doubleIt(5,10);
console.log(number1,number2);
