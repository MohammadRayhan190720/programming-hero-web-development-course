
let count = 0;

document.getElementById('add-btn').addEventListener('click', function(){
  let countNumber = document.getElementById('count-number');
  count+=1;
  countNumber.innerHTML+= count + "<br>";

  let todoText = document.getElementById('todo-text');
  todoText.value = " ";
  
  const todoDesc = document.getElementById('todo-description');
  todoDesc.innerHTML+= todoText.value + "<br>";

  const descContainer = document.getElementById('desc-container');
  const actions = document.getElementById('action');
  // console.log("actions ocures");

  actions.innerHTML = `
   <input type="checkbox">
   <span>Completed</span>
      `;
  descContainer.appendChild(actions);
  
  //clear all 

  document.getElementById('clear-btn').addEventListener('click', function(){
    let countNumber = document.getElementById("count-number");
    countNumber.innerText = '';

     const todoDesc = document.getElementById("todo-description");
     todoDesc.innerText = '';

     const actions = document.getElementById("action");
     actions.innerHTML = '';
    

  });
  
  

});