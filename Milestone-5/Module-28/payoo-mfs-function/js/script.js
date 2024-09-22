// find button

document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const inputNumber = document.getElementById("input-number");
    const inputPin = document.getElementById("input-pin");
    console.log(inputNumber.value);
    console.log(inputPin.value);

    // validate
    if (inputNumber.value === "5" && inputPin.value === "1234") {
      console.log("login Successfully!");
      window.location.href = "./home.html";
    } else {
      alert("Wrong Number or Pin");
    }
  });
