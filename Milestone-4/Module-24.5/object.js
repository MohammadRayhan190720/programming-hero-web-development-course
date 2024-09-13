const students = {
  name : "Sakib",
  id : " 101",
  roll : " 102",
  address : [
    {
      recent_address : "USA",
      permanet_address : "Bangladesh",

    }
  ],
  movies : ["Tmiamar","superstar","Jan","janKurban"],
  car : {
    brand : "tesla",
    prize : 550000,
    company : "Tesla"
  },
  act : function (){
    console.log("good actors but Bad Characters")
  }
}

console.log(students.address[0].permanet_address);
act();