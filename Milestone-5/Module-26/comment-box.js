

//step-1
document.getElementById('post-btn').addEventListener('click', function(){
  //step-2
   const commentBox = document.getElementById('comment-box');
   const boxText = commentBox.value;
   
   //step-3
   const divContainer = document.getElementById('comment-container');
   const p = document.createElement('p');
   p.innerText = boxText;
   divContainer.appendChild(p);

   commentBox.value = '';
});