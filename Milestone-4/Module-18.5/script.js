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

//join()
console.log(fruits.join('|'))

//concate()

const food =  fruits.concat(favouriteFood);
console.log(food);

//slice()
const pizza = [5,10,20,30,40,50]
console.log(pizza.slice(2,4));

//splice()
const pizza1 = [5, 10, 20, 30, 40, 50];
console.log(pizza1.splice(3,3));

//task-1
// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

const fruits123 = ["mango","banana","appple","orange","jackfruits"];
console.log(fruits123[3])
fruits123[2] = "jamubura";
console.log(fruits123);

//task-2
// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

const favouritePlace = ["coxbazar","Slyhet","Ctg"]
favouritePlace.push("Pakistan");
console.log(favouritePlace);
favouritePlace.push("sigapur");
favouritePlace.push("soudiArobia");
console.log(favouritePlace);
favouritePlace.pop()
console.log(favouritePlace);




//task-3
// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.

// task-4
// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

//task--5
// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().