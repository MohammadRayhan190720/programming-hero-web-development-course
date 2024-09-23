document.getElementById('cash-out-btn').addEventListener('click', function(event){
       event.preventDefault();

       const cashOutMoney = getInputValue("cash-out-money");
       const cashOutPin = getInputValue("cash-out-pin");

      //  pinvalidation
      if (cashOutPin === 1234){
        const balance = getTextValue("balance");

        // amount validation
        if ( cashOutMoney > balance){
          alert("insaficient funds");
          return;
        }

        const updateBalance = balance - cashOutMoney ;

        document.getElementById('balance').innerText = updateBalance;
          
        // transaction - history;
        const p = document.createElement("p");
        p.innerHTML = ` Withdrw : ${cashOutMoney} Tk. New Balance : ${updateBalance} Tk`;

        document.getElementById("transaction-history").appendChild(p);
        

      }else{
        alert("failed to cash out.Please try again later")
      }

});