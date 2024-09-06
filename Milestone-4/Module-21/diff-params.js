// cheak the number of characters in string even or odd

function evenCheckString(str){
  const len = str.length;
  if ( len % 2 === 0){
    console.log("Even string")
    return true;
  }else{
    console.log("odd string");
    return false;
  }

  }

evenCheckString("Bangladesh")
console.log(evenCheckString("Bangladesh"))


//program-2

function returnDoubleTripple( number,ifDouble){
  if ( ifDouble === true){
    const result = number * 2;
    return result;
  }
  else{
    const result = number * 3;
    return result;
  }

}

console.log(returnDoubleTripple(10,true));
console.log(returnDoubleTripple(10,false));