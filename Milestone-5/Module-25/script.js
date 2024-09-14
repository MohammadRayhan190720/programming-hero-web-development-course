console.log("Leatning Javascript DOM");



//option-1 document.getElementsByTagName()
const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);

for (const li of liCollection) {
  // console.log(li);   // array like object
  console.log(li.innerText);
  
}

//option-2 document.getElementById()
//id secector

const section2 = document.getElementById('section-2');
console.log(section2);
// section2.innerText = "changed Heading By js";
// console.log(section2.innerText);

//option-3 document.getElementsByClassName()
// class selectors
const skills = document.getElementsByClassName('must-learn');
// console.log(skills);
for (const skill of skills) {
  console.log(skill);
  
}

//option-4 document.querySelector()
const someLi = document.querySelector('li');
console.log(someLi);