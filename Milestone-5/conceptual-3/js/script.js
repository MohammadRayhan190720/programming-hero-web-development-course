
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


  // history
  const historyItem = document.createElement('div');
  historyItem.classList.add('bg-white' , "p-3" , "rounded-md", "border-l-2");
  historyItem.innerHTML = `
        <P class="text-xs text-gray-500">${new Date().toLocaleDateString()}</P>
        <P class="text-xs text-gray-500"> Income ${incomeNumber.toFixed(2)}</P>
        <P class="text-xs text-gray-500">Expences ${totalExpences.toFixed(2)}</P>
        <P class="text-xs text-gray-500">Balance ${balance.toFixed(2)}</P>
  `;
  const historyContainer = document.getElementById("history-list");
  historyContainer.appendChild(historyItem);
  
  
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

// histroy btn add design
document.getElementById("history-tab").addEventListener('click',function(){
  document
    .getElementById("history-tab")
    .classList.add(
      "text-white",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600"
    );

    document.getElementById("assistant-tab")
      .classList.remove("bg-gradient-to-r", "from-blue-500", "to-purple-600","text-white");

    document.getElementById("expense-form").classList.add('hidden');
})