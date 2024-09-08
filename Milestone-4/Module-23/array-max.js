function maxHeight (numbers){
  let max = numbers[0];
  for (const number of numbers) {
       if ( number > max){
           max = number;
       }
    
  }
  return max;

}
const height = [65,70,56,42,62,65];
const maxHeightNumber = maxHeight(height);
console.log(maxHeightNumber);


//min number form an Array

function minHeight(numbers){
  let min = numbers[0];
  for (const number of numbers) {
    if ( number < min){
      min = number;
    }
  }
  return min;

}
const minHeightNumber = minHeight(height);
console.log(minHeightNumber);