const allSection = document.querySelectorAll('section');
// console.log(allSection);
for (const section of allSection) {
  // console.log(section);
  section.style.border = '1px solid gray';
  section.style.paddingBottom = "20px"
  section.style.marginBottom = "20px"
  section.style.borderRadius = "10px";
  section.style.backgroundColor = "gray";
  
}

const uniqeStyle = document.getElementById('section-2');
// console.log(uniqeStyle);
uniqeStyle.style.backgroundColor = "lightgray";

//add and Remove class

const sectionThree = document.getElementById('section-3');
sectionThree.classList.add('black-bg');
sectionThree.classList.remove('large-text');