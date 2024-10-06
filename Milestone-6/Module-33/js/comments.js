function loadComment(){
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.js())
    .then((data) => console.log(data))
    .catch((err) => console.error('error happent',err));
}