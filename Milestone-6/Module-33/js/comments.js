function loadComment(){
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error('error happent',err));
}

//use async-await
const loadComment2 = async() =>{
  try{
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
    const data = await res.json();
    console.log(data);
  }
  catch(err){
    console.error('error loading data',err);
  }

}