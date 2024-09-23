document.getElementById("calculate").addEventListener("click", function(){
  const inputAmount = calculateHandler("income");
  const inputSoftware = calculateHandler("software");
  const inputCourses = calculateHandler("courses");
  const inputInternet = calculateHandler("internet");

  const totalExpences = inputSoftware + inputCourses + inputInternet;

  const balance = inputAmount - totalExpences;
  // show result
  const totalExpencesElement = document.getElementById("total-expenses");
  totalExpencesElement.innerText = totalExpences.toFixed(2);

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = balance.toFixed(2);

  // remove hidder form result
  const results = document.getElementById("results");
  results.classList.remove("hidden");
});

document.getElementById("calculate-savings").addEventListener("click", function(){
  

});