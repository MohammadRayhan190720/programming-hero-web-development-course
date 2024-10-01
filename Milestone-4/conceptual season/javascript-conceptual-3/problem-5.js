/*
jdi honours and Hsc mile 80 hoy tahole job conform ar ar kom hole job hbe na.kintu jdi candidate fffamily ar hoy tahole 20% marks bonous paben.
*/

function jobselection(info){
  if (typeof info !== 'object'){
    return 'invalid Object';
  }
  let totalmarks = info.honours + info.HSC;

  if (info.isFFfamily){
    totalmarks = totalmarks + (totalmarks * 0.2);
    
  }
  
  if ( totalmarks >= 80){
    return "You got the job selection"
  }else{
    return "You fail";
  }
}

const person1 = {
  name : "kashem",
  honours : 40,
  HSC : 30,
  isFFfamily : true,
}
console.log(jobselection(person1));


const person2 = {
  name : "Mugdho",
  honours : 45,
  HSC : 32,
  isFFfamily : false,
}