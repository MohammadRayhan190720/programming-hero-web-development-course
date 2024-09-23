
  //  calculate
document.getElementById('calculate').addEventListener("click", function(){
  
  const incomeNumber = parseFloat(document.getElementById('income').value);
  const softwareNumber = parseFloat(document.getElementById("software").value);
  const coursesNumber = parseFloat(document.getElementById("courses").value); 
  const internetNumber = parseFloat(document.getElementById("internet").value);

  // validation
  if (incomeNumber <= 0 || isNaN(incomeNumber)){
    document.getElementById("income-error").classList.remove('hidden');
  }
  if (softwareNumber<= 0 || isNaN(softwareNumber)){
    document.getElementById("software-error").classList.remove("hidden");
  }
  if (coursesNumber <= 0 || isNaN(coursesNumber)){
    document.getElementById("courses-error").classList.remove("hidden");
  }
  if (internetNumber <= 0 || isNaN(internetNumber)){
    document.getElementById("internet-error").classList.remove("hidden");
  }

  

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
  historyContainer.insertBefore(historyItem , historyContainer.firstChild);
  
  
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
    document.getElementById('history-section').classList.remove('hidden');
});

// assaistance tab functionality
document.getElementById("assistant-tab").addEventListener("click", function(){
  document.getElementById("expense-form").classList.remove("hidden");
  document
    .getElementById("assistant-tab")
    .classList.add(
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600",
      "text-white"
    );

    document
      .getElementById("history-tab")
      .classList.remove(
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600",
        "text-white"
      );

})