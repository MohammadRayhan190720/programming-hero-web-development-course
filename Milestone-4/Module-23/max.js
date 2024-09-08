//max between 2 conditions
//1 way
const syed = 80;
const mugdho = 60;
if ( syed > mugdho ) {
  console.log("Syed marks is bigger than mugdho");
} else{
  console.log("Mugdho marks is bigger than syed");
}


//2way
function biggerMarks (num1,num2){
  if ( num1 > num2){
    return num1;
  }else{
    return num2;
  }

}
const heightestMarks = biggerMarks(syed,mugdho);
console.log(`Height number: ${heightestMarks}`);

//3way

const maxNum = Math.max(80,50);
console.log(maxNum);