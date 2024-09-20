document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutAmount = document.getElementById('cash-out-money').value;
    const cashOutAmountNumber = parseFloat(cashOutAmount);

    const cashOutPin = document.getElementById('cash-out-pin').value;
    const cashOutPinNumber = parseFloat(cashOutPin);

    //pin validate

    if (cashOutPinNumber === 1234) {
      const balance = document.getElementById('balance').innerText ;
      const balanceNumber = parseFloat(balance);

      const updateBalance = balanceNumber - cashOutAmountNumber;

      document.getElementById('balance').innerText = updateBalance;

      //after submit form clear

      document.getElementById('cash-out-money').value = '';
      document.getElementById('cash-out-pin').value = '';

    }else{
      alert("please enter a valin number or pin")
    }
})