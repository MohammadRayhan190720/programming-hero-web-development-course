//Inch to feet convert

//12 inch = 1 feet

function feetHeight (inch){
  const feet = heightInch / 12 ;
  return  feet ;

}
const heightInch = 75;
const result = feetHeight(heightInch);
console.log(result);

// 6 feet 25 inchs - these type of result

function inchConvert (inch){
  

}
const inch = 75;
const result4 = inchConvert(inch);
console.log(result4);


//convert 5 mile t kilometers

function mileConvert (miles){
  const kilometers = 5 * 1.6;
  return kilometers;

}
const miles = 5;
const result2 = mileConvert(miles);
console.log(result2);

//convert 10 kilometers in Mile

function kilometersConvert(kilo){
  const mile = 10 / 1.6;
  return mile;

}
const kilometer = 10;
const result3 = kilometersConvert(kilometer);
console.log(result3);