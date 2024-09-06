function add (price1,price2){
  const bill = price1 + price2;
     return bill ;
}

const totalBill = add(5,80);
console.log(totalBill);

//shortcut a

function add1 (price1,price2){
  return price1 + price2;

}
const totalBill1 = add1(5,80);
console.log(totalBill1);


function doMath (num1,num2){
  const sum = num1 + num2;
  const diff = num1 - num2;
  const multiply = sum * diff;
  const result = multiply / 2 ;
  return result ;
}
const finalResult = doMath(50,10);
console.log(finalResult);