// Task-1:
// Count how many times a string has the letter a

let sentence = 'I Love My Country Bangladesh';

function countLetterA (letter){
  letter = letter.toLowerCase();

  let count = 0;

  for (let i = 0; i < sentence.length; i++) {
    if ( letter[i] === "a"){
      count++;
    }

  }
      return count;

  

}
console.log(countLetterA(sentence));



// Task-2:
// Count how many times a string has the letter a or A

const sentence1 = "My Name is Apple And I love to eat Apple and a Ant is Very Little Animal";

function countLetterA1 (letter){
  let count = 0;
  for (let i = 0; i <sentence1.length; i++) {
    if (letter[i] ==="a" || letter[i] === "A"){
      count++;
    }

}
    return count;

}
console.log(countLetterA1(sentence1));

// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u

const sentence2 = "My Name is Apple And I love to eat Apple and a Ant is Very"

function checkVowels (str){
  str = str.toLowerCase();

  const vowels = ["a", "e", "i", "o", "u"];

  for (let vowel of vowels) {
    if (!str.includes(vowel)){
      return false;
    }
    
  }
  return true;

 }
 console.log(checkVowels(sentence2));




// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

// 
// Task-5:
// Capitalize Every first Letter of each word in a String