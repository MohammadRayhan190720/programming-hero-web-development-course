console.log('1')
console.log('2')
console.log('3')
setTimeout(() => console.log("I am very lazy man!"),4000);
console.log('5')
console.log('6')
console.log('7')
console.log('8')

function fetchData(){
  fetch("https://jsonplaceholder.typicode.com/albums")
  .then((res => res.json()))
  .then((data) => console.log(data))
}

async function asyncAwait(){
  const res = await fetch('https://jsonplaceholder.typicode.com/albums')
  const data = await res.json()
  console.log(data)
}

const arrowAsync = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/albums')
  const data = await res.json()
  console.log(data)
}

const tryCatch = async() =>{
  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    const data = await res.json()
    console.log(data)

  }
  catch(err){
    console.log('ERROR: ' + err)
  }
}