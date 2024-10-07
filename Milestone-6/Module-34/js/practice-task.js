/**
 * Practic task-1 
 * a. Write a function that displays a message after 5s?
 * b.Write a function call delayedGreeting() that takes two parameters,name and delay time and logs a greeting message after the given delay time?
 * 
 */

function displayMessage(){
  setInterval(() =>{
    console.log('Hellow')
  },5000)
}
displayMessage();

function displayGreeting(name, delayTime){
  setInterval(() =>{
    console.log(`Hellow ${name}`)
  },2000)
}
displayGreeting('Alice', 2000);

/**
 * The function tellJoke() below logs a funny message every 2 seconds after 10 seconds it stops 
 */

function tellJoke(){
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Parallel lines have so much in common. It's a shame they'll never meet.",
        "I told my wife she should embrace her mistakes. She gave me a hug.",
        "Why don't scientists trust atoms? Because they make up everything!",
        "Parallel lines have so much in common. It's a shame they'll never meet.",
        "I told my wife she should embrace her mistakes. She gave me a hug."
    ];
    let count = 0;
 const jokeInterval = setInterval(() =>{
   if ( count < jokes.length){
    console.log(jokes[count])
    count++;
   }
 
 },2000);

 setTimeout(() => clearInterval(jokeInterval),10000);

 }

 tellJoke();

 /**
  * Write a async await function that fetch data form an API and Logs a message
  */

 const loadData = async() =>{
  const res = await fetch ('https://jsonplaceholder.typicode.com/albums')
  const data = res.json();
  console.log(data);

 }
 loadData();