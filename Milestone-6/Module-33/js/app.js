function loadData2(){
  fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res => res.json()))
  .then((data) => console.log(data))
}

function loadUsers(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => displayUsers(data))

}

function displayUsers(data){
  console.log(data);
}


//optional practice

function creatAPost(){
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function updateAPost(){
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "foo",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function deleteAPost(){
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
}