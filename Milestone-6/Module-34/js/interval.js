setTimeout(() =>{
  console.log("Timeout")
}, 4000)


// let count = 0;
// setInterval(()=>{
//   count++;
//   console.log(count)

// },2000);

//how to stop setInterval
let count = 0;
const clockId = setInterval(()=>{
  count++;
  if (count > 2){
    clearInterval(clockId);
  }
  console.log(count);

},2000);