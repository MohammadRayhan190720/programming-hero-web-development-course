document.getElementById("add-money-btn").addEventListener("click", function(event){
  event.preventDefault();

  // const addInputValue = getInputValueById();
  // console.log(addInputValue);

  const addMoneyValue = getInputValue("add-money");
  const inputPinValue = getInputValue("pin");
  console.log({addMoneyValue, inputPinValue});
  
});