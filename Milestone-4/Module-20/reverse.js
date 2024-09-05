const sentence = 'I am learning web development';

let reverse = '';
for ( let letter of sentence){
  // console.log(letter);
  reverse = letter + reverse;
}
  console.log(reverse);


//for loop

let rev = '';

for ( let i = 0; i < sentence.length; i++){
  // console.log(i);
  // console.log(sentence[i]);
  let letters = sentence[i];
  rev = letters + rev;
  //  rev = rev + letters;
}
console.log(rev);


//split()

let reversed = sentence.split('').reverse().join('');

console.log(reversed);