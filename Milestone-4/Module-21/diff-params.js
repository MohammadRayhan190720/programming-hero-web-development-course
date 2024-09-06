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