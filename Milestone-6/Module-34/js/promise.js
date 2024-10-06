//how a creat a new promise
//  const ride = new Promise((resolve, reject) =>{
//   if (arrived){
//     resolve('driver arrived');
//   }else{
//     reject('driver not available');
//   }
//  } )

function dataLoader(){
  return new Promise((resolve, reject) =>{
    const success = Math.random();
     if(success > 0.5){
      resolve(success);
     }else{
      reject(success);
     }

  });
}

dataLoader()
.then((data) => console.log('resolved data' , data))
.catch ((err) => console.error('rejected data' , err))