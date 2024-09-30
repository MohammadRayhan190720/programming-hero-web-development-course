//data access
const person = {
  name : "Jonh",
  address : ["rangpur","dhaka",'ctg',"cumilla"]
}
const presentAddress = person.address[2];
console.log(presentAddress);

const simpleNestedObject = {
  car: {
    brand: "Toyota",
    model: "Corolla",
    specs: {
      engine: "1.8L",
      transmission: "Automatic",
      features: ["Air Conditioning", "Bluetooth", "Backup Camera"],
    },
  },
  owner: {
    name: "Alice",
    age: 28,
    contact: {
      phone: "+1-555-6789",
      email: "alice@example.com",
    },
  },
};

let nestedObject = {
  outerKey1: {
    innerKey1: "Value 1",
    innerKey2: "Value 2",
  },
  outerKey2: {
    innerKey3: "Value 3",
    innerKey4: "Value 4",
  },
};

const usedCamera = simpleNestedObject.car.specs?.features[2];
console.log(usedCamera);
const currentEmail = simpleNestedObject.owner.contact?.email;
console.log(currentEmail);

// optional chaining
const currentAge = nestedObject.outerKey2.contact?.innerKey4;
console.log(currentAge);

//
