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
}