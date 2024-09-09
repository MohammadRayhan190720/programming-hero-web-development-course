// js - problems - part1 - practice - tasks;

// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function convertTemperature(celsius){
  const fharenheit = 40*(9/5) + 32;
  return fharenheit;
  

}
const temperatureCelsius = 40;
const result = convertTemperature(temperatureCelsius);
console.log(result);

// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

function countRepeatedNumbers (numbers){
  let countMap = {};
  for (const number of numbers) {
    if (countMap[number]){
      countMap[number] = countMap[number] + 1;
    }
    else{
      countMap[number] = 1;
    }
    
    
  }
  return countMap;


}


const numbers = [5,6,11,12,98, 5,12,12,5,12];
const repetedNumber = countRepeatedNumbers(numbers);
console.log(repetedNumber);



// find: 5

// output: 2


// sample-input:
function findNumber(numbers1,targetNumber){
  let count = 0;
  for (const number of numbers1) {
    if ( number === targetNumber){
      count ++;

    }
    
  }
  return count;

}

const  numbers1 = [5,6,11,12,98, 5];
const findANumber = findNumber(numbers1,25);
console.log(findANumber);


// find: 25

// output: 0

// Task-3:
// Write a function to count the number of vowels in a string.

function vowelCount (string){
  let vowelCount = 0;
  let vowels = ['a' , 'e', 'i', 'u' , 'o' , 'A' , 'E' , 'I' , 'O' , 'U'];
  for (const letter of string) {
    if ( vowels.includes(letter)){
      vowelCount++;
    }
    
  }
  return vowelCount;


}
const sentence = "I Love Bangladesh";
const countVowel = vowelCount(sentence);
console.log(countVowel);



// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

 function longestWordFinding(string){
  const words = string.split(' ');
  let maxword = words[0];
  

  
  for (const word of words) {
    
    if ( word.length > maxword.length){
         maxword = word;

    }
    
    
      
    
  }
  return maxword;

 }
 const sentence2 = 'I am Learning ProgrammingTHhfdggdfgj to become a programmer';
 const longWord = longestWordFinding(sentence2);
//  const longWord = sentence2.split(' ') ;
 console.log(longWord);
 

// sample-output: Programming

// Task-5:
// Generate a random number between 10 to 20.

const randomNumber = Math.floor(Math.random() * 11 + 10);
console.log(randomNumber);