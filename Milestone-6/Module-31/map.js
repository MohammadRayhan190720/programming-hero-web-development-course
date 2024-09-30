const numbers = [2,4,6,8,10];

//for of
// const doubleNumbers = [];
// for (const num of numbers) {
//   const double = num*2;
//   doubleNumbers.push(double);
  
// }
// console.log(doubleNumbers);




// function doubleIt(num){
//   return num*2 ;
// }

//arrow function
// const doubleIt = (num) => num*2;

// const result = numbers.map(doubleIt);
// console.log(result);

//more simple
const result = numbers.map( num => num * 2);
// console.log(result);
const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus);
const halves = numbers.map(num => num / 2);
// console.log(halves)

const friends = ["Asif" , "sakil" , "Roman" , "Fahid" , "Mitu"];

const len = friends.map(friend => friend.length);
console.log(len);

const fristLetter = friends.map(friend => friend[0]);
console.log(fristLetter);
