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