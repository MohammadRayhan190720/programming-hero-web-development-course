const mobile = {
  brand : 'realme',
  prize : 17000,
  battay : '5000MP',
  charger : 'orginal',
  display : "6 inces",
  software : ['opera-mini','crome-browser', 'firefox','facebook','youtube']
}


//for of=> array
//for in => object

for ( const key in mobile){
  // console.log(key);
  console.log(mobile[key]);
}


let keys = Object.keys(mobile);
console.log(keys);

for (const key of keys){
  console.log(key);
  console.log(mobile[key]);
}
