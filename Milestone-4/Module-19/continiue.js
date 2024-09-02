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

//do-while loop

let num = 100 ;
do{
  console.log(num);
  num++;

}
while( num <=10)

  // quiz test

  const array = [1,2,3,4,5,6,7];

  for ( let i = 1; i <= array.length; i++ ){
    if ( i == 5){
      continue;
    }
    console.log(array[i]);
  }