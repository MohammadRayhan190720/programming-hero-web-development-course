// js-problems-part2-practice-tasks


// Task -1:
// Find the lowest number in the array below.

function minNumber (numbers){
  let min = numbers[0];
  for (const number of numbers) {
    if ( number < min ){
      min = number;
    }
    
  }
  return min;

}
const heights2 = [167, 190, 120, 165, 137];
const lowestNumber = minNumber(heights2);
console.log(lowestNumber);

// Task -2:
// Find the friend with the smallest name.
function smallestName(names){
  let small = names[0];
  for (const name of names) {
    if ( name.length < small.length){
          small = name;
          
    }

}
return small;
}


const students = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const smallName = smallestName(students);
console.log(smallName);



// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptopQuentity,tabletQuentity,mobileQuentity){
  const perLaptopPrice = 35000;
  const perTabletPrice = 15000;
  const perMobilePrice = 20000;

  const allLaptopPrice = perLaptopPrice * laptopQuentity;
  const allTabletPrice = perTabletPrice * tabletQuentity;
  const allMobilePrice = perMobilePrice * mobileQuentity;

  const totalPrice = allLaptopPrice + allTabletPrice + allMobilePrice;
  return totalPrice;

}
const totalBudget = calculateElectronicsBudget(2,1,1);
console.log(totalBudget);

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input

function findAveragePhonePrice(phones){
  let sum = 0;
  const size = phones.length;
  
   for (const phone of phones) {
       sum = sum + phone.price;
        
       
    
   }
   return sum /size;
  

}


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 }
    ];

    const averagePhonePrice = findAveragePhonePrice(phones);
    console.log(averagePhonePrice);

// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

// function findCompanySalary(employees){
//   const shahinStartingSalary = employees[0].starting;
//   const shihabStartingSalary = employees[1].starting;
//   const shikotStaringSalary = employees[2].starting;
//   const shohelStartingSalary = employees[3].starting;
  
//   const shainExprienceSalaryIncrement = employees[0].experience * employees[0].increment;
//   const shihabExprienceSalaryIncrement = employees[1].experience * employees[1].increment;
//   const shikotExprienceSalaryIncrement = employees[2].experience * employees[2].increment;
//   const shohelExprienceSalaryIncrement = employees[3].experience * employees[3].increment;

//   const shahinTotalSalary = shahinStartingSalary + shainExprienceSalaryIncrement;
//   const shihabTotalSalary = shihabStartingSalary + shihabExprienceSalaryIncrement;
//   const shikotnTotalSalary = shikotStaringSalary + shikotExprienceSalaryIncrement;
//   const shohelTotalSalary = shohelStartingSalary + shohelExprienceSalaryIncrement;

//   const totalSalary = shihabTotalSalary + shikotnTotalSalary + shahinTotalSalary + shohelTotalSalary;
//      return totalSalary;
 
// }

//  const employees = [
//             { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//             { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//             { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//             { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
//         ];

//         const monthlyProviedSalary = findCompanySalary(employees);
//         console.log(monthlyProviedSalary);

// more easy soulution

function findCompanySalary(employees){
  let totalSalary = 0;

  for(let employee of employees){
    const exprienceSalaryIncriment = employee.experience * employee.increment;
    const totalEmployeeSalary = employee.starting + exprienceSalaryIncriment;
    totalSalary += totalEmployeeSalary
      
  }
  return totalSalary;;
}
 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

        const monthlyProviedSalary = findCompanySalary(employees);
        console.log(monthlyProviedSalary)