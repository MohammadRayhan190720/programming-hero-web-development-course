//একটা array থেকে সবথেক বিগ নাম্বার টি Return kore?
//without function;

const numbers = [20,40,80,166,170];
let maxNumber = numbers[0];
for (let i = 1; i < numbers.length; i++){
      if ( numbers[i] > maxNumber){
          maxNumber = numbers[i];
      }
      
}
console.log(maxNumber);


//spread operator

const biggestNumber = Math.max(...numbers);
console.log(biggestNumber);

//using function

function maximumNumber(array){
  if (!Array.isArray(array)){
    return 'Please Input a valid Array'
  }
  let maxNumber = array[0];
  for (const number of array) {
     if ( number > maxNumber){
      maxNumber = number;
     }
    
  }
  return maxNumber;

}
const numbers1 = {Name: "Rayhan",id : 5058}
const maxi = maximumNumber(numbers);
const maxi2 = maximumNumber(numbers1);
console.log(maxi);
console.log(maxi2);

// object theke string return

function userDatails (info){
  if (typeof info !== 'object'){
    return 'please provide a Object';
  }
  const newPassword = info.name +'#'+info.Address+'@'+info.age+'.'+'com';
  return newPassword;

}


const person = { name : "Rayhan", Address : "rangpur" , age : "24"}
const password = userDatails(person);
console.log(password);