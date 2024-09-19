// find button
const loginBtn = document.getElementById('login-btn');
const inputNumber = document.getElementById('input-number');
const inputPin = document.getElementById('input-pin');


loginBtn.addEventListener('click',function(event){
  event.preventDefault();

  console.log(inputNumber.value);
  console.log(inputPin.value);
  

});