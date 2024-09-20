document.getElementById('cash-out-btn').addEventListener('click', function(event){
  event.preventDefault();
  const cashOutMoney = document.getElementById('cash-out-money').value ;
  const cashOutMoneyNumber = parseFloat(cashOutMoney);

  const cashOutPin = document.getElementById('cash-out-pin').value;
  const cashOutPinNumber = parseFloat(cashOutPin);

  if (cashOutPinNumber === 1234){
    console.log("Cash out successfully")

    const balance = document.getElementById('balance').innerText;
    const balanceNumber = parseFloat(balance);

    const updateBalance = balanceNumber - cashOutMoneyNumber ;
    
    document.getElementById('balance').innerText = updateBalance ;
    
  }else{
    alert("Please try again later")
  }
});