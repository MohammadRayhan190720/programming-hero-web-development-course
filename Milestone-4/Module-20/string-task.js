// Task-1:
// Count how many times a string has the letter a

const myCountry = " Bangladesh is my home Country I love my country very much ant";

let count = 0;

const countLetterA = (letter) =>{
  letter = letter.toLowerCase();

  for (let i = 0; i < myCountry.length; i++){
    if ( letter[i] === 'a' ){
         count++;
    }
  }
  return count;

}
console.log(countLetterA(myCountry));




// let sentence = 'I Love My Country Bangladesh';

// function countLetterA (letter){
//   letter = letter.toLowerCase();

//   let count = 0;

//   for (let i = 0; i < sentence.length; i++) {
//     if ( letter[i] === "a"){
//       count++;
//     }

//   }
//       return count;

  

// }
// console.log(countLetterA(sentence));



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

const sentence2 = "Ant  eat ice Our U niversity";

function checkVowels (letter){
  letter = letter.toLowerCase();

  const vowels = ["a", "e", "i", "o", "u"];

  for (let vowel of vowels) {
    if (!letter.includes(vowel)){
      return false;
    }
    
  }
  return true;

 }
 console.log(checkVowels(sentence2));




// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

let sentence3 = "this axe is my agxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

function xreplacer (letter){
  return letter.split('x').join("y").split('y').join("Y");
}

console.log(xreplacer(sentence3));

// 
// Task-5:
// Capitalize Every first Letter of each word in a String
let sentence4 = "My name is rayhan i am form bangladesh";


function capitalizeEveryFirstLetter(letter){
  let words = letter.split(' ');

  for ( let i = 0 ; i < words.length;i++){
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}


console.log(capitalizeEveryFirstLetter(sentence4));

