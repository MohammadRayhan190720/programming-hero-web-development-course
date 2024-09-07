//calculate the average of the odd numbers in an Array

const oddNumbers = [];

 function oddAverage(numbers){
    for (const number of numbers) {
        if ( number % 2 === 1){
          oddNumbers.push(number);
          
        }
     
    }
    let sum = 0;
    const arrayLen = oddNumbers.length;
    for (const oddNumber of oddNumbers) {
         sum += oddNumber;
           
      
    }
    return sum / arrayLen;
 }
 const numbers = [5,10,15,16,18,25];
 const average = oddAverage(numbers);
 console.log(`odd average: ${average}`);


 //even number average
 let evenNumbers = [];

 function evenAverage(numbers){
  for (const number of numbers){
    if ( number % 2 === 0){
      evenNumbers.push(number);
    }

  
  }
  let sum = 0;

  let arrayLen = evenNumbers.length;
  for (const evenNumber of evenNumbers){
    sum += evenNumber;
  }
  return sum / arrayLen;


 }
 const numbers2 = [ 20,40,15,19,20];
 const evenAvg = evenAverage(numbers2);
 console.log(`even average: ${evenAvg}`);