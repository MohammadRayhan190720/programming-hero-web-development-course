const ages = [20,15,18,21,23];
const myages = [...ages]
const [x,y,...z] = ages;
console.log(x,y,z);
console.log(myages);


const person = {
  name: "jonh",
  id: 105,
  subject: "chemestry",
  age: "24",
  isStudent: false,
};

const person2 ={...person};
console.log(person);

const {name,id,age,...rest} = person;
console.log(name,id,age,rest);

