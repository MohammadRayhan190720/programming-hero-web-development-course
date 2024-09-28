const fristName = "Md";
const lastName = "Mia";
const middleName = "Rayhan";
const fullName = fristName + " " + middleName + " " + lastName;
console.log(fullName);

const num1 = 30;
const num2 = 20;
const sum = " sum of " + num1 + " " + "sum of " + num2 + " " + " = " + (num1 + num2);
console.log(sum);

//if we use template it is very easy
const fullName1 = `${fristName} ${middleName} ${lastName}`
console.log(fullName1);

const sum1 = ` sum of ${num1} and ${num2} is ${num1 + num2}`
console.log(sum1);