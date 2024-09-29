//use for of of in arrays and Strings
//use for in in object


//for of in arrays
const numbers = [20,30,40,50];
for (const number of numbers) {
  console.log(number);
}

//for of in strings
const name = "My Name is Rayhan";
for (const char of name) {
  console.log(char);
  
}

//for of in objects
const glass = {
  name: "goldenGlass",
  price: 20,
  color: "golden",
  isClean: true,
};
const keys = Object.keys(glass);
for (const key of keys) {
  // console.log(glass[key]);
  // console.log(key);
  
}

//for in in objects
for (const element in glass){
  console.log(glass[element]);
  // console.log(element);
}
