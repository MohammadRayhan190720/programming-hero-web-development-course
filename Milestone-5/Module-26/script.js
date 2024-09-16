
//option-2
function makePurple(){
  document.body.style.backgroundColor = 'purple';
}


//option-3
const orangeBtn = document.getElementById('orange-btn');
orangeBtn.onclick = makeOrange;

function makeOrange(){
  document.body.style.backgroundColor = 'orange';
}

//option-3 another

const grayBtn = document.getElementById('gray-btn');
grayBtn.onclick = function makeGray(){
  document.body.style.backgroundColor = 'gray';
}

//option-4

const makePink = document.getElementById('make-pink');
makePink.addEventListener('click', makeColorPink);

function makeColorPink(){
  document.body.style.backgroundColor = 'Pink';
}

//option-4 another
const makeGreen = document.getElementById('make-green');
makeGreen.addEventListener('click', function makeColorGreen(){
  document.body.style.backgroundColor = 'green';

});

//option-4 final and We mostly use this
const makeBlue = document.getElementById('make-blue').addEventListener('click',function(){
  document.body.style.backgroundColor = 'green';
})