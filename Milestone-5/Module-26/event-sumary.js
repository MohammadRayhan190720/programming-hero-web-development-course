function clickHandler(){
  const changeEvent = document.getElementById('text');
  changeEvent.innerText = 'This is Dynamic change Text';
}

// document.getElementById("clicked-btn").addEventListener("click", function () {
//   console.log("clicked");
// });

document.getElementById('clicked-btn').addEventListener('click',function(){
  const changeText = document.getElementById('text');
  changeText.innerText = 'This is Dynamic change Text by event Listener';
})


document.getElementById('update-btn').addEventListener('click', function(){
  const inputText = document.getElementById('input-text');
  const changText = inputText.value;
   
  const p = document.getElementById('text-change');
  p.innerText = changText;
  inputText.value = ' ';

})