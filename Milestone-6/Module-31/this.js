class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  sleep(){
    console.log(`sleeping now ${this.name}`);
  }
  activity(){
    this.sleep();
  }
}
const rayhan = new Person('Rafi',24);
console.log(rayhan);
rayhan.sleep();

const abdullah = new Person('abdullah', 7);
abdullah.sleep();