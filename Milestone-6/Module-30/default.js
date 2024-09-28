//default parameter => if value is not provided, take this as a default value

//number as a default parameter
function sum(num1 = 10,num2 = 0){
  const result =  num1 + num2;
  console.log(num1 , num2 , result);
  return result ;
}
// const add = sum(20,30);
const add = sum(20);
console.log(add);

//string as a default paremeter
function fullName (fname,lname = ' '){
  const full = fname + ' ' + lname ;
  return full ;
}
// const name = fullName('rakib','sakib');
const name = fullName('rakib');
console.log(name);


//array as a default paremeter

function arr(numbers = []){

}
//object as a default paremeter
function obj(numbers = {}){

}
