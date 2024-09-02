for ( let i = 0 ; i <= 20 ; i++){
  console.log(i);
  if(i >=10){
    break;
  }
}
for ( let i = 0 ; i <= 20 ; i++){
  if(i % 2 === 1){
    continue;
  }
  console.log(i);
}