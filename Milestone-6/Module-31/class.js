class Vehicle{

  constructor( name , model , price){
    this.name = name;
    this.model = model;
    this.price = price;
  }
  getName(){
    return this.name + ' ' + this.model;
  }
}

let car = new Vehicle("BMW" , "F-548" , 450000);
console.log(car);