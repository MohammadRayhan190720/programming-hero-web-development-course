

document.getElementById("add-money-btn").addEventListener("click", function(event){
  event.preventDefault();

  const addMoney = document.getElementById("add-money").value;
  const addMoneyNumber = parseFloat(addMoney);

  const pin = document.getElementById("pin").value;
  const pinNumber = parseFloat(pin);

  // pin validate
  if (pinNumber === 1234){
    console.log("add money successfully");
    const balance = document.getElementById("balance").innerText;
    console.log(balance);
  }else{
    alert("add money failed");
  }
  

})