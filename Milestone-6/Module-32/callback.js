function greeting(greetingHandler,name){
  greetingHandler(name)

}
function greetingHandler(name){
  console.log("good Moring" ,name)

}
function greetEvening(name){
  console.log("good Evening" ,name)

}
greeting(greetingHandler,"tom");
greeting(greetingHandler,"wom");
greeting(greetingHandler,"Xom");
greeting(greetEvening, "Asif");