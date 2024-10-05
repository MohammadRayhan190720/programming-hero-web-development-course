
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// way-2
const url = "https://jsonplaceholder.typicode.com/todos/1";
fetch(url)
.then((response) => response.json())
.then((json) => console.log(json));


// way-3
function loadData(){
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));

}