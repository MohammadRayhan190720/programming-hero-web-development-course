function duplicateCheak(arr){
  const uniqeArray = [];
  for (const student of arr) {
       if ( uniqeArray.includes(student) === false){
            uniqeArray.push(student);
       }
    
  }
  return uniqeArray;

}
const students = ["Rohim","korim" , "Abul","josim","Sakib","Rohim","Korim" , "Abul"];
const noDuplicates = duplicateCheak(students);
console.log(noDuplicates);