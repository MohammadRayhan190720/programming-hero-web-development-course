const bottle = {
  color : "Black",
  prize : 50,
  isClean : true,
  element : "water"

}
console.log(bottle);

//dot notation
console.log(bottle.element);

//bracket notation
console.log(bottle["isClean"]);

//chnage value

bottle.element = "Orange";
console.log(bottle);

bottle["isClean"] = false;
console.log(bottle);

let finalPrize = bottle.prize;
finalPrize = 100;
console.log(finalPrize);

