



//different ways to use loop
// odd number print 1-20
//1

// for( i = 0 ; i <= 20 ; i++){
//   if ( i % 2 === 1){
//     console.log(i);
//   }
// }

//2
// for( i = 0 ; i <= 20 ; i++){
//   if ( i % 2 !== 0){
//     console.log(i);
//   }
// }

//3

// for (i = 1; i <= 20; i+=2) {
//   console.log(i);
  
// }

//list of number between 1-30 divided by 5

// for ( i = 1 ; i <=30 ; i++){
//   if( i % 5 === 0){
//     console.log(i)
//   }
// }

//list of number between 1-30 divided by 3

// for ( i = 1 ; i <= 30 ; i++){
//   if( i % 3 === 0){
//     console.log(i)
//   }
// }

//list of number between 1-30 divided by 3 and 5
for ( i = 1 ; i <= 30 ; i++){
  if ( i % 3 === 0 && i % 5 ===0){
    console.log(i)
  }
}


//list of number between 1-30 divided by 3 or 5
// for (i = 1; i <= 30; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     console.log(i);
//   }
// }

//list of number between 1-30 divided by 3 and sum of these number
let sum = 0 ;
for (i = 1; i <= 30; i++) {
  if (i % 3 === 0 ) {
    console.log(i);
    sum = sum + i ;
    console.log("total step setp by sum " + sum)
  }
}

console.log("Total sum of number between 1 -30 : " + sum)


