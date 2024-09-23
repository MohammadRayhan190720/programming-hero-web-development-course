const income = document.getElementById('income');
const software = document.getElementById('software');
const courses = document.getElementById('courses');
const internet = document.getElementById('internet');

// converted to number



document.getElementById("calculate").addEventListener("click", function(){
  const incomeNumber = parseFloat(income.value);
  const softwareNumber = parseFloat(software.value);
  const coursesNumber = parseFloat(courses.value);
  const internetNumber = parseFloat(internet.value);

  const totalExpences = softwareNumber + coursesNumber + internetNumber ;
  const balance = incomeNumber - totalExpences ;
  
  const totalExpencesElement = document.getElementById("total-expenses");
  totalExpencesElement.innerText = totalExpences ;

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = balance;
  
    



})