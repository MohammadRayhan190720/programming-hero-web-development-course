document.getElementById("add-money-btn").addEventListener("click", function(event){
  event.preventDefault();

  // const addInputValue = getInputValueById();
  // console.log(addInputValue);

  const addMoneyValue = getInputValue("add-money");
  const inputPinValue = getInputValue("pin");
  

  // pin validate
  if ( inputPinValue === 1234){
    const balance = getTextValue("balance");
    const updateBalance = balance + addMoneyValue ;

    document.getElementById("balance").innerText = updateBalance;

  }else{
    alert("failed to add money");
  }
  
});