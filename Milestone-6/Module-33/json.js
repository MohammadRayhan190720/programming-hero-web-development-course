const people = {id : 1, name : "rayhan", age :24, classification : "Honours"};
const stringfied = JSON.stringify(people);
console.log(stringfied);
const parsefy = JSON.parse(stringfied);
console.log(parsefy);