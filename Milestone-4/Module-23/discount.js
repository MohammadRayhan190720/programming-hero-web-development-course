// 1- 100 tickers prize => 100 ;
// 101-200 tickers prize => 90;
// 201-unlimited tickers prize => 70;

function discountPrize( quentity ){
  if ( quentity <= 100){
    const total = quentity * 100 ;
    return total;
  }
  else if ( quentity <= 200){
    const total = quentity * 90 ;
    return total;
  }
  else{
    const total = quentity * 70 ;
    return total;
  }

}
const discount = discountPrize(50);
console.log(discount);


//Multi-layer discount

//1- 100 tickers prize => 100;
// 101-200 tickers prize => 1st 100 tickets prizes -100 and rematin tickts prize => 90;
// 200-unlimited tickers prize => 1st 100 tickets prizes -100 and 2nd 100 tickets prize => 90  and  rematin tickts prize => 70;

function layerDiscountPrize(quentity){
  const frist100Prize =  100 ;
  const second100Prize =  90;
  const above200Prize =  70;
  if ( quentity <= 100 ){
    const total = quentity * frist100Prize;
    return total;
  }
  else if ( quentity <= 200 ){
    const frist100total = 100 * frist100Prize ;
    const remainingQuentitys = quentity - 100 ;
    const remainingQuentityPrize = remainingQuentitys * second100Prize ;
    const total = frist100total + remainingQuentityPrize ;
    return total;
  }
  else{
    const frist100Total = 100 * frist100Prize ;
    const second100Total = 100 * second100Prize ;
    const remainingQuentity = quentity - 200;
    const remainingQuentityPrize = remainingQuentity * above200Prize;
    const total = frist100Total + second100Total + remainingQuentityPrize;
    return total;
  }

}
const layerDiscount = layerDiscountPrize(250);
console.log(layerDiscount);
