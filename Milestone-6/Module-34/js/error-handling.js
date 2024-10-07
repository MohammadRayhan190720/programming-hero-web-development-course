function checkAge(){
  const ageInput = document.getElementById('age');
  const ageInputText = ageInput.value;
  const error = document.getElementById('error');
  
  try{
    console.log(Rangpur)

  }
  catch(err){
    console.log('Error happend' + err)
    error.innerText = 'Something went wrong';
  }
  finally{
    console.log('All done inside tyr catch');
  }
}
console.log(1111)