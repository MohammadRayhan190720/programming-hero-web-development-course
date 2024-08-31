// Fundamental of Array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(numbers.length)
console.log(numbers[3])
const fifth = numbers[5];
console.log(fifth);

numbers[2] = 555;
console.log(numbers);

//push,pop,shift,unshift

const studentAge = [16,17,18,13,14,15];
studentAge.push(25);
console.log(studentAge);
studentAge.pop();
console.log(studentAge);
studentAge.shift();
console.log(studentAge);
studentAge.unshift(19);
console.log(studentAge);


//array methods

//includes()
const fruits = ['mango','banana','apple','orange','jackfruits'];
console.log(fruits.includes('orange'));

if (fruits.includes('pineapple')){
  console.log("Eat all Fruits");
}else{
  console.log("never eat Fruits");
}

//indexof()
const favouriteFood = ["mango", "banana", "apple", "orange", "jackfruits"];
console.log(favouriteFood.indexOf("mango"));

//isArray
console.log(Array.isArray(fruits));

join()