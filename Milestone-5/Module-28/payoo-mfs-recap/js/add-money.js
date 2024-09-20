document.getElementById("add-money-btn").addEventListener("click", function(event){
   event.preventDefault();

   const addMoneyInput = document.getElementById("add-money").value;
   const addMoneyInputNumber = parseFloat(addMoneyInput);

   const pin = document.getElementById("pin").value;
   const pinNumber = parseFloat(pin);

   if (pinNumber === 1234) {
    const balance = document.getElementById("balance").innerText;
    const balanceNumber = parseFloat(balance);

    const updateBalance = balanceNumber + addMoneyInputNumber;

    document.getElementById("balance").innerText = updateBalance ;
    
    //after submit form clear
    document.getElementById('add-money').value = '';
    document.getElementById('pin').value = '';

   }else{
    alert("wrong attemp!Try again later");
   }
});