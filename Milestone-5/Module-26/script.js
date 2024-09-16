
//option-2
function makePurple(){
  document.body.style.backgroundColor = 'purple';
}


//option-3
const pinkBtn = document.getElementById('pink-btn');
pinkBtn.onclick = makePink;

function makePink(){
  document.body.style.backgroundColor = 'red';
}

//option-3 another

const redBtn = document.getElementById('gray-btn');
redBtn.onclick = function makeRed(){
  document.body.style.backgroundColor = 'gray';
}