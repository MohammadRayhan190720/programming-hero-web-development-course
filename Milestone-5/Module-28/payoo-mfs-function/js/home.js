document.getElementById("add-money-btn").addEventListener("click", function(event){
  event.preventDefault();

  // const addInputValue = getInputValueById();
  // console.log(addInputValue);

  const addMoneyValue = getInputValue("add-money");
  const inputPinValue = getInputValue("pin");
  

  // pin validate
  if ( inputPinValue === 1234){
    

  }else{
    alert("failed to add money");
  }
  
});