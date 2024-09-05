/***

Generate a multiplication table for number 9

 */
let multiplication = 9;

for (var i = 1; i <= 10; i++) {
  const multiplicationTable = multiplication * i;
  console.log(`${multiplication} * ${i} = ${multiplicationTable}`);
}