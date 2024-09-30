/***
 * Write a arrow function that will take 3 parameters ,will multiply the parametes and will return the result
 */
const multiply = (num1,num2,num3) => num1 * num2 * num3;
const number = multiply(5,5,2);
// console.log(number);

/**
 * Write a following sentence in Three lines and Print the result
 * I am a fronted web developer. I always love code.I want to be a successful web developer.
 * 
 */
const aboutMy = `I am a fronted web developer.
I always love code.
I want to be a successful web developer.
`
// console.log(aboutMy);

/**
 * write a arrow function that will take 2 parameters ,one parameter come form you and other is default.add these two parameters and return the result
 */
const add = (num1 = 0,num2 = 0) => num1 + num2;
const sum = add(5);
// console.log(sum);

/**
 * write a arrow function where it will do the following
 * 1.it will take an array where the array element will name of your friends
 * 2.Check if the length of each element is even ,push elements with even length to a new array and return the result
 */

// useing arrow function
const evenLenFriends = [];
const myFriends = (friends) => {
  for (const friend of friends) {
    if ( friend.length % 2 === 0){
        evenLenFriends.push(friend);
    }
    
  }
  return evenLenFriends;
  
}
const friends = ["sakib", "Tamim", "Jahid", "Asif", "Mudgho", "Younus"];
console.log(myFriends(friends));

// useing Array.filter
// const friends = ["sakib" , "Tamim","Jahid","Asif","Mudgho","Younus"];
// const evenFriends = friends.filter(friend => friend.length % 2 === 0);
// console.log(evenFriends);


/**
 * write a arrow function where it will do the following
 * 1.squire each array element
 * 2.calculate the sum of squire elements
 * 3.return the average of the sum of the squired element
 */

const avarageOfSquire = (numbers) =>{
  const squireNumbers = numbers.map((number) => number * number);
  // console.log(squireNumbers);
  const total = squireNumbers.reduce((p, c) => p + c, 0);
  // console.log(total);
  return total / numbers.length;
}


const numbers = [5,10,15,10,5];
console.log(avarageOfSquire(numbers));
/**
 * write a arrow function where it will do the following
 * 1.it will take two arrays input
 * 2.combine two arrays and assain them in a new array
 * 3.find the maximum number from array and return the result
 */

const combineArrays = (nums1,num2) => {
  const newArray = [...nums1,...nums2];
  const maxNumber = Math.max(...newArray);
  return maxNumber;

}
const nums1 = [1,2,3,4,5,6,7,8];
const nums2 = [10,15,20,30,40];
// console.log(combineArrays(nums1,nums2));



