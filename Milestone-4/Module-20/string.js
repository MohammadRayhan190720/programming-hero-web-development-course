// string declaration

const country = 'Bangladesh';
const nationalGame = "Criclet";
const primeminister = `Dr. Mohammad Younus`;
const money = new String('onlu money is real');

//array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers[3])
numbers[3] = 100;
console.log(numbers);
console.log(numbers.length);

//string

const student = "Rayhan";
console.log(student.length);
console.log(student[3]);

//string is immutable => not changeable
// array is mutable => changable


//uppercase (),lowercase(). trim()

const subject = '  chemestry';
const book = 'ChemesTry';

if ( subject.toLocaleLowerCase().trim() === book.toLocaleLowerCase().trim() ){
  console.log("Exam vlo hbe beaucse I read both subject")
}
else{
  console.log("Exam vlo hbe na")
}