console.log("Leatning Javascript DOM");

const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);

for (const li of liCollection) {
  // console.log(li);   // array like object
  console.log(li.innerText);
  
}