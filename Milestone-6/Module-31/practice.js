// task -1: console log the secondary school location of Sophia
let data = {
  Sophia: {
    id: 33,
    study: [
      {
        primary: [
          { school_name: "ABC primary school" },
          { location: "Peters burg" },
        ],
      },
      {
        secondary: [
          { school_name: "ABC secondary school" },
          { location: "St Lorence" },
        ],
      },
    ],
  },
};

const primarySchool = data.Sophia.study[0].primary[1];
console.log(primarySchool);



// task-2: console .log  output: Petersburg, Herry

let students = {
  2222: {
    name: "Jack",
    section: "C",
    class: "IX",
    address: {
      "building no": 12,
      street: "St. Jonson",
      city: "Petersburg",
      country: "UK",
    },
  },
  3333: {
    name: "Herry",
    section: "D",
    class: "X",
    address: {
      "building no": 85,
      street: "DC road",
      city: "Kachukhet",
      country: "Bangladesh",
    },
  },
};

const city = students[2222].address.city ;
console.log(city);

const name = students[3333].name ;
console.log(name);

// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
  data: [
    {
      bookId: 1,
      bookDetails: {
        name: "habluder adda",
        category: "XYZ",
        price: "20$",
      },
      bookCategory: "Basic",
    },
    {
      bookId: 2,
      bookDetails: {
        name: "gobluder adda",
        category: "ABC",
        price: "40$",
      },
      bookCategory: "Beginner",
    },
  ],
};

const hablu = data2.data[0].bookDetails.name;
console.log(hablu);

/**
 * You have an odd array of Numbers [1,3,5,7,9].Now convert this array into a even array.[2,4,6,8,10].Do this useing for loop and Array.map method
 */

/**
 * You are given an Array say [33,50,79,78,90,101,30].Now return /get all the elements which are divisible by 10 useing array.filter method and find method
 */

/**
 * You have an array of Object.display the instroctor name who is seniur useing filter method
 */
const instroctor = [
  {name : 'nodi' , age :28 , position : 'seniur'},
  {name : 'Aki' , age :25 , position : 'jonour'},
  {name : 'sobuj' , age :24 , position : 'seniur'},
]


/**
 * Find out the sum of age.USeing For loop and array.reduce
 */
const people = [
  {name : "Jonh", age : 25},
  {name : "Asif", age :26},
  {name : "Bilkis", age : 22}
]