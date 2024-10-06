fetch("https://jsonplaceholder.typicode.com/todos")
.then((res => res.json()))
.then((data) => displayTodos(data))

function displayTodos(todos){
  const todosContainer = document.getElementById('todos-container');

  for (const todo of todos) {
    console.log(todo)
    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-style');
    todoDiv.innerHTML = `
    <h3>User id : ${todo.id}</h3>
    <P>IsCompleted : ${todo.completed}</P>
    <P>Title : ${todo.title}</P>

    `
    todosContainer.appendChild(todoDiv);
    
  }
}