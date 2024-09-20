document.getElementById("display-cash-out-btn").addEventListener("click", function(){
  const cashOutContainer = document.getElementById("cash-out-container");

  cashOutContainer.classList.remove('hidden');

  const addMoneyContainer = document.getElementById("add-money-container");
  addMoneyContainer.classList.add('hidden');
});

document.getElementById('display-add-money-btn').addEventListener("click", function(){
  const addMoneyContainer = document.getElementById("add-money-container");
  addMoneyContainer.classList.remove("hidden");

  const cashOutContainer = document.getElementById("cash-out-container");

  cashOutContainer.classList.add("hidden");

})