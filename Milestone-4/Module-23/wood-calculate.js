//use add and Multiplation To calculate Wood Requirements

function woodQuintity(chairQuintity , TableQuintity , BedQuintity){
  const perChairWood = 3;
  const perTableWood = 15;
  const perBedWood = 50;

  const totalChairWood = chairQuintity * perChairWood ;
  const totalTableWood = TableQuintity * perTableWood ;
  const totalBedWood = BedQuintity * perBedWood ;

  const totalWood = totalChairWood + totalTableWood + totalBedWood ;

   return totalWood;

}

const WoodRequirements = woodQuintity(5,2,1);
const WoodRequirements2 = woodQuintity(10,2,1);
console.log(WoodRequirements , WoodRequirements2);


//shart-500;
//pant-300;
//shoe - 900;
//calculated 5 shart,2 pant and 1 Shoe prizes

function prizeCalculate(shartQuentity, pantQuentity,shoeQuentity){
  const perShartPrize = 500;
  const perPantPrize = 300;
  const perShoePrize = 900;

  const totalShartPrize = shartQuentity * perShartPrize ;
  const totalPantPrize =  pantQuentity * perPantPrize ;
  const totalShoePrize =  shoeQuentity * perShoePrize ;

  const totalPrizes = totalShartPrize + totalPantPrize + totalShoePrize ;
  return totalPrizes;

}
const prizesTotal = prizeCalculate(1,1,1);
console.log(prizesTotal)