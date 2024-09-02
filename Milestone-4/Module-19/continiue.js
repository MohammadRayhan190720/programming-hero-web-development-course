for (let i = 0; i <= 20; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}

//while loop

let number = 0;
while (number <= 50){
  number ++;
  if ( number % 5 !== 0 ){
    continue;
  }
  console.log(number);
}