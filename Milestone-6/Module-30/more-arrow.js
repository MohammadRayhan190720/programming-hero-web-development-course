const sum = (a,b) => a + b ;  //two parameters
const multiply = (x,y,z) => x * y * z ;  //more two parameters


//if one parameter => you may use curly brackets or not...
const getAge = (person) => person.age;
const person = {name: 'John', age: 20};
const age = getAge(person);
console.log(age);

const getThird = numbers => numbers[2];
const numbers = [2,4,6,8,10];
const third = getThird(numbers);
console.log(third);

//no parametes
const math = () => Math.PI;
console.log(math());

//large function
const multiTasks = (a,b,c) =>{
  const sum = a + b + c;
  const multi = a * b * c;
  const result = sum / multi;
  return result;
}