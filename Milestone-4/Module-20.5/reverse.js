const numbers = [2,3,4,8,9,12];
// numbers.reverse()
// console.log(numbers);

let revNumber = [];

for (const number of numbers) {
  revNumber.unshift(number);
}
  console.log(revNumber);
