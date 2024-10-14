const person = {
  name : "jonh",
  id: 105,
  subject : "chemestry",
  age : "24",
  isStudent: false,
}

// let sentence = '';
// if (person.isStudent){
//   sentence = ('he is a student')
// }else{
//   sentence = ('he is not a student')
// }

// person.isStudent ? sentence = "he is a student" : sentence = "he is not a student";

let sentence = person.isStudent ? "he is a student" : "he is not a student";

console.log(sentence)

