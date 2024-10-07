function checkAge(){
  const ageInput = document.getElementById('age');
  const ageInputText = ageInput.value;
  const error = document.getElementById('error');
  
  try{
    const age = parseInt(ageInputText);
    if(isNaN(age)){
      throw 'Please enter a valid age';
    }
    else if(age < 18){
      throw 'You are a child.Dont try again';
    }
    else if(age > 30){
      throw 'murubbi murubbi aha aha'
    }

    error.innerText = '';

  }
  catch(err){
    console.log('Error happend' + err)
    error.innerText = 'ERROR : ' + err;
  }
  finally{
    console.log('All done inside tyr catch');
  }
}
console.log(1111)