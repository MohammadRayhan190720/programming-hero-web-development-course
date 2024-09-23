
  //  calculate
document.getElementById('calculate').addEventListener("click", function(){
  
  const incomeNumber = parseFloat(document.getElementById('income').value);
  const softwareNumber = parseFloat(document.getElementById("software").value);
  const coursesNumber = parseFloat(document.getElementById("courses").value); 
  const internetNumber = parseFloat(document.getElementById("internet").value);

  

  const totalExpences = softwareNumber + coursesNumber + internetNumber; 
  const balance = incomeNumber - totalExpences ;
  
  const totalExpencesElement = document.getElementById("total-expenses");
  totalExpencesElement.innerText = totalExpences.toFixed(2) ;

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = balance.toFixed(2);

  // remove hidder form result 
  const results = document.getElementById("results");
  results.classList.remove('hidden');
  
});

// calculate saveing
document.getElementById("calculate-savings").addEventListener('click',function(){


  const incomeNumber = parseFloat(document.getElementById("income").value);
  const softwareNumber = parseFloat(document.getElementById("software").value);
  const coursesNumber = parseFloat(document.getElementById("courses").value);
  const internetNumber = parseFloat(document.getElementById("internet").value);

  const totalExpences = softwareNumber + coursesNumber + internetNumber;
  const balance = incomeNumber - totalExpences;

  const saveingPercents = parseFloat(document.getElementById("savings").value);
  console.log(saveingPercents);
  
  const saveingAmount = (saveingPercents * balance ) / 100;
  console.log(saveingAmount);
  
  const remainingBalance = balance - saveingAmount;

  // show in reuslt
  const savingsAmountElement = document.getElementById("savings-amount");
  savingsAmountElement.innerText = saveingAmount;
  
  const remainingBalanceElement = document.getElementById("remaining-balance");
  remainingBalanceElement.innerText = remainingBalance ;
  

});