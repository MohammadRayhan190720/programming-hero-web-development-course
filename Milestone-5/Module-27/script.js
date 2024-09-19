// find button
const loginBtn = document.getElementById('login-btn');
const inputNumber = document.getElementById('input-number');
const inputPin = document.getElementById('input-pin');


loginBtn.addEventListener('click',function(event){
  event.preventDefault();

  console.log(inputNumber.value);
  console.log(inputPin.value);

  // validate
  if (inputNumber.value === '5' && inputPin.value === '1234'){
    console.log("login Successfully!")
    window.location.href="./home.html"
  }else{
    alert("Wrong Number or Pin");
  }
  

});