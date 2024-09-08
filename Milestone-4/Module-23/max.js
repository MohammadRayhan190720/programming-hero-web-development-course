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


//maxof three numbers

const kim = 80;
const jim = 90;
const putin = 70;

if (kim > jim && kim > putin){
  console.log("max number is " + kim);
  
}
else if( jim > kim && jim > putin){
  console.log("max number is " + jim);
}else{
  console.log("max number is " + putin);
}

function maxNumber (num1,num2,num3){
  if ( num1 > num2 && num1 > num3){
    return num1;
  }
  else if( num2 > num3 && num2 > num1){
    return num2;
  }
  else {
    return num3;
  }

}
const maxOfThree = maxNumber(kim,jim,putin);
console.log(maxOfThree);

