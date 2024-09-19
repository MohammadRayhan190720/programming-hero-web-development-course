
let count = 0;

document.getElementById('add-btn').addEventListener('click', function(){
  let countNumber = document.getElementById('count-number');
  count+=1;
  countNumber.innerHTML+= count + "<br>";

  let todoText = document.getElementById('todo-text');
  
  const todoDesc = document.getElementById('todo-description');
  todoDesc.innerHTML+= todoText.value + "<br>";

  const actions = document.getElementById('action');
  const descContainer = document.getElementById('desc-container');
  console.log("actions ocures");

  actions.innerHTML = `
   <input type="checkbox">
   <span>Completed</span>
      `;
  descContainer.appendChild(actions);
  
  //clear all 

  document.getElementById('clear-btn').addEventListener('click', function(){

  });
  
  

});