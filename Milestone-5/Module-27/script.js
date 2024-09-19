// find button
const loginBtn = document.getElementById('login-btn');
const inputNumber = document.getElementById('input-number');


loginBtn.addEventListener('click',function(event){
  event.preventDefault();

  console.log("login button clicked");
  console.log(inputNumber.value);
  

});