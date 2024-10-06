setTimeout(() =>{
  console.log("Timeout")
}, 4000)


let count = 0;
setInterval(()=>{
  count++;
  console.log(count)

},2000);