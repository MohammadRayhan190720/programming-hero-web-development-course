document.getElementById('event-btn').addEventListener('click', function(){
  console.log('clicked');
})
// document.getElementById('event-btn').addEventListener('mouseenter', function(){
//   console.log('clicked');
// })
// document.getElementById('event-btn').addEventListener('mouseover', function(){
//   console.log('clicked');
// })
// document.getElementById('event-btn').addEventListener('mousemove', function(){
//   console.log('clicked');
// })

// document.getElementById('input-field').addEventListener('focus',function(){
//   console.log("focus in input text");
// })
// document.getElementById('input-field').addEventListener('blur',function(){
//   console.log("blur in input text");
// })
// document.getElementById('input-field').addEventListener('keydown',function(event){
//   console.log(event.target.value);
// })
// document.getElementById('input-field').addEventListener('keypress',function(event){
//   console.log(event.target.value);
// })
document.getElementById('input-field').addEventListener('keyup',function(event){
  console.log(event.target.value);
})