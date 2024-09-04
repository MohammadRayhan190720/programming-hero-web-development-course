// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

 let colors = ['red', 'blue', 'green', 'yellow', 'orange']

 const reversed = [];

for ( let i = colors.length - 1; i >= 0; i-- ) {
       reversed.push(colors[i]);
}
       console.log(reversed);

    // colors.reverse();
    // console.log(colors);

    // const rev = [];

    // for (let i = 0; i < colors.length; i++) {
    //    rev.unshift(colors[i]);
    // }
    // console.log(rev);


// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']


// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

 const numbers = [12, 98, 5, 41, 23, 78, 46];
 const evenNumbers =[];

for (let i = 0; i < numbers.length; i++) {
  if ( numbers[i] % 2 === 0){
    evenNumbers.push(numbers[i])
  }
} 

console.log(evenNumbers)



// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

 let numbers1 = ['Tom', 'Tim', 'Tin', 'Tik'];
 let str = '';

for (let number of numbers1) {
  str = str + number;   
}
  console.log(str);

// Output:

// 'TomTimTinTik'

// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output


 let sentence = 'I am a hard working person'
// let sentence = "Hello World from ChatGPT";
let words = sentence.split(' ');
let reversedSentence = '';

for (let i = words.length - 1; i >= 0; i--) {
  reversedSentence += words[i] + ' ';
}

reversedSentence = reversedSentence.trim();
console.log(reversedSentence); // Output: "ChatGPT from World Hello"




// Output:

// 'person working hard a am I'



