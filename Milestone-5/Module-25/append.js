const skillList = document.getElementById('skill-list');
const li = document.createElement('li');
li.innerText = "This list added dynamically";
skillList.appendChild(li);

const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h3 = document.createElement('h3');
h3.innerText = "Learning Javascript-4";
section.appendChild(h3);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = "skill-1";
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = "skill-2";
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = "skill-3";
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = "skill-4";
ul.appendChild(li4);

const li5 = document.createElement('li');
li5.innerText = "skill-5";
ul.appendChild(li5);

section.appendChild(ul);

mainContainer.appendChild(section);


//set innerHTML Drectly

const advencedSkillSection = document.createElement('section');
section.innerHTML = `
<h3>This is Advance Skill Section</h3>
<ul> 
      <li> React</li>
      <li> Node js</li>
      <li> Mongo DB</li>
      <li> Express js</li>
      <li> SQL </li>
</ul>
`
mainContainer.appendChild(advencedSkillSection);