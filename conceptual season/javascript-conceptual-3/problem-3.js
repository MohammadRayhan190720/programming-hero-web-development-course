//একটা array এর ভিতর কয়টা boolean value আছে তা count কর?

function countBoolean (arr){
  let count = 0;
  for (const element of arr ) {
    if ( typeof element === 'boolean'){
         count++;
    }
    
  }
  return count;

}



const array = ["20","Rayhan", 20, true, 30, false, 30, true];
const numberofBoolean = countBoolean(array);
console.log(numberofBoolean);