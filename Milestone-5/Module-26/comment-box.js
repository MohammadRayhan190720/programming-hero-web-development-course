document.getElementById('post-btn').addEventListener('click', function(){
   const commentBox = document.getElementById('comment-box');
   const boxText = commentBox.value;
   
   const divContainer = document.getElementById('comment-container');
   const p = document.createElement('p');
   p.innerText = boxText;
   divContainer.appendChild(p);

   commentBox.value = '';
});