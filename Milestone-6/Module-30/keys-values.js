const glass = {
  name: "goldenGlass",
  price : 20 ,
  color : "golden",
  isClean : true,
}

//keys
const keys = Object.keys(glass);
console.log(keys);

//values
const values = Object.values(glass);
console.log(values);

//keys and values =>return array of arrays
const keysAndValues = Object.entries(glass);

//delete properties
// delete glass.isClean;
console.log(glass)
//destructuring delete
const {isClean, ...shortGlass} = glass ;
console.log(shortGlass);

//freeze => not allowed to change anything of an object
// Object.freeze(glass);

//seal => allowed to change exesting properties and values but not allowed to add properties
//Object.seal(glass);