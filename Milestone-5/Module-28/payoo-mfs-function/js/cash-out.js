document.getElementById('cash-out-btn').addEventListener('click', function(event){
       event.preventDefault();

       const cashOutMoney = getInputValue("cash-out-money");
       const cashOutPin = getInputValue("cash-out-pin");

      //  pinvalidation
      if (cashOutPin === 1234){
        const balance = getTextValue("balance");

        const updateBalance = balance - cashOutMoney ;

        document.getElementById('balance').innerText = updateBalance;
        

      }else{
        alert("failed to cash out.Please try again later")
      }

});