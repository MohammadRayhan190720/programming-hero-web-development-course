const persons = {
  name : "Jonh",
  phone : "01723408269",
  address : "Rangpur",
  id : 101,
}
//if the right sight will be an object left side will be an object as well
const {phone,address} = persons;

//change property name
const  { name:identity, id} = persons;
console.log(phone);
console.log(address);
// console.log(name);
console.log(identity);