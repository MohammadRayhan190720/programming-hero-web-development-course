//for of loop

const numbers = [12, 32, 14, 85, 25, 23];

for (const num of numbers) {
  console.log(num)

  
}

const fruits = ["mango","banana","apple","jackfruits","orange"]
for (const fruit of fruits) {
  console.log(fruit);
  console.log("I eat fruits: " + fruit);
}

//while loop

// const num = 7;
// if(num < 10){
//   console.log("Small number")
// } else{
//   console.log("Big number")
// }

let num = 0;
while(num < 5){
  console.log("Number: " + num)
  // num ++;
  // num = num + 1;
     num += 1;
}

//while loop problem solveing

//print 1-10;

let num1 = 1;
while(num1 <= 10){
  console.log(num1);
  num1++;
}

//print 1-100

let num2 = 1;
while (num1 <= 100) {
  console.log(num1);
  num1++;
}

//sum of 1-10

let num3 = 1 ;
let sum = 0 ;

while( num3 <= 10){
  sum = sum + num3;
  console.log(sum)
  num3++;
}

//print even number

let num4 = 1 ;
while( num4 <=10){
  if(num4 % 2 ===  0){
    console.log("Even numbr is " + num4)
  }
 num4++;

}
