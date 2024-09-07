let a = 5;
let b = 7;
console.log(a, b);

//1
const temp = a;
a = b;
b = temp;
console.log(a, b);

//distruction

let x = 6;
let y = 8;
console.log(x, y);
[x,y] = [y,x];
console.log(x, y);

for (let i= 0; i< 5; i++){
  setTimeout (function (){
    console.log(i)

  },100)
}