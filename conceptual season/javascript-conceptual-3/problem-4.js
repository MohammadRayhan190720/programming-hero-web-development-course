/*
bus a jabe = 50 jone kre
micro a jabe = 15 jon kre
biksha vara = 20 taka kore

riksha vara ber kro?

*/

function rikshaVara (persons){
  const bus = 50;
  const micro = 15 ;
  const riksaVara = 20;

  const remainingAfterBus = persons % bus;
  
  const ramainingAfterMicro = remainingAfterBus % micro;

  const totalNeedVara = ramainingAfterMicro * riksaVara;
  return totalNeedVara;

}
const vara = rikshaVara(234);
console.log(vara);