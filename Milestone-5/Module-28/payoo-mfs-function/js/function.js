// function getInputValueById(){
//  const addMoney = document.getElementById("add-money").value ;
//  return addMoney ;
// }


// common function for input value

function getInputValue (id){
  const inputValue = document.getElementById(id).value ;
  const inputValueNumber = parseFloat(inputValue);
  return inputValueNumber ;
};

function getTextValue (id){
  const textValue = document.getElementById(id).innerText ;
  const textValueNumber = parseFloat(textValue);
  return textValueNumber ;
};

function showTogglebutton (id){
  // hidden all form
  document.getElementById("add-money-container").classList.add("hidden");
  document.getElementById("cash-out-container").classList.add("hidden");
  document.getElementById("Transaction-container").classList.add("hidden");
  //show clicket button form
  document.getElementById(id).classList.remove("hidden");

}