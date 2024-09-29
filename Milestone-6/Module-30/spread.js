//array maxNumber

const maxNumber = Math.max(50,60,70,80,90,100);

const numbers = [20,10,30,40,80,];
const max = Math.max(...numbers);

// console.log(...numbers);
console.log(max);

//copy of an array
//non-primative data reference store kore rakhe...tai copy array ar modde kno chnage krle seta main array te o change hoy .ata prevent korar jonno spread operator use kora hoy

const friends = [40,50,60,70,80];
const bondu = friends;
const dosto = [...friends];//copy
bondu.push(90);
console.log(bondu);
console.log(friends);

//ata prevent korar jonno spread operator use kora hoy
console.log(dosto);

//advance
const bestFriends = [...friends,100] //add extra elements while copying
console.log(bestFriends);
