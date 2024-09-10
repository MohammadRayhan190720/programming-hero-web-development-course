//kno year leep year kina ber kro

//leap year => if the year not divisible by 100 and Divisible by 4 
//leap year => if the year divisible by 100 and divisible by 400

// const isLeapYear = (year) => {
//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log(`${year} is a leap year`);
//   } else {
//     console.log(`${year} is not a leap year`);
//   }
// };

// isLeapYear(2020);

function isLeapYear(year){
  if ( year % 100 !== 0  && year % 4 === 0){
      return true;

  } 
  else if ( year % 400 === 0 && year % 100 === 0){
    return true;
  }
  else{
    return false;
  }


}
const isLipi = isLeapYear(2022);
console.log(isLipi);

