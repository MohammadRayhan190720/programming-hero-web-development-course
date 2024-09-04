const numbers = [2,3,4,8,9,12];
// numbers.reverse()
// console.log(numbers);

// let revNumber = [];

// for (const number of numbers) {
//   revNumber.unshift(number);
// }
  // console.log(revNumber);


//for loop

let reversed = [];

for ( let i = numbers.length - 1; i >= 0; i-- ) {
  // console.log(numbers[i]);
const num = numbers[i];
// console.log(num);
reversed.push(num);
}
console.log(reversed);
