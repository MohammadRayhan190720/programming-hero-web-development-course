function add ( num1, num2){
  return num1 + num2 ;
}
function subtract ( num1, num2){
  return  num1 - num2;
}
function multiply ( num1, num2){
  return num1 * num2 ;
}
function divide ( num1, num2){
  return num1 / num2 ;
}

function calculator (a,b, operation){
  if ( operation === 'add'){
    const sum = a + b ;
    return sum;
  }
  else if ( operation === 'subtract'){
    const subs = a- b ;
    return subs ;

  }
  else if ( operation === ' multiply'){
    const mul = a * b ;
    return mul ;
  }
  else if ( operation === 'divide'){
    const div = a / b ;
    return div ;
  }

}
const calculation = calculator( 5,10, 'divide');
console.log(calculation);