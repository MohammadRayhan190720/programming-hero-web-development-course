function doubleNumber (number){
  const double = number * 2;
  console.log(`${number} double is ${double}`); 

}
console.log(`I will print double number`);
doubleNumber(15);
console.log(`----------------------`);
doubleNumber(30);
console.log(`----------------------`);
doubleNumber(50);
console.log(`----------------------`);

const money = 100;
doubleNumber(money);


//age difference

function ageDifference(num1,num2){

  const diff = num1 - num2;
  console.log(`$(num1) and $(num2) different is ${diff}`);
}

const myAge = 24;
const fatherAge = 50;
ageDifference(myAge, fatherAge);