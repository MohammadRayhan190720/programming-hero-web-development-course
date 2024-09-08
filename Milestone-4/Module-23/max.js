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
const max1 = biggerMarks(50,60);
const max2 = biggerMarks(60,90);
const ultimateMax = biggerMarks(max1,max2);
console.log(`Height number: ${ultimateMax}`);
console.log(`Height number: ${heightestMarks}`);

