fetch("https://jsonplaceholder.typicode.com/todos")
.then((res => res.json()))
.then((data) => displayTodos(data))

function displayTodos(todos){
  const todosContainer = document.getElementById('todos-container');

  for (const todo of todos) {
    console.log(todo);
    
  }
}