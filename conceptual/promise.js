fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(res => res.json())
.then(data => console.log(data))

const fetchData = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = console.log(data);
}

//make promise

const prosime1 = new Promise((resolve, reject) =>{
  console.log("make a promise");
  const error = true;
  if(!error){
    resolve("promise is resolved");
  }else{
    reject('promise is rejected');
  }
})

prosime1
.then(response =>{
  console.log(response);
  console.log('this is a response block')
})
.catch(error =>{
  console.log(error);
  console.log('this is an error block')
})
.finally(() =>{
  console.log("I am always love you")
})