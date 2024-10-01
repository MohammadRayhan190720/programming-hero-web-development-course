//আপনার মাসিক খরচ , ঘর ভাঁড়া ৫০০০, খাবার খরচ ৩০০০, হাত খরচ ২০০০,মাস শেষ এ আপনার সেভিংস কত হবে ,আপনার আয়ের উপর ভিত্তি করে?


function monthlySaveings(income){
  if ( typeof income !== 'number'){
    return 'please enter a valid number';
  }
  const houseRent = 5000;
  const mealCost = 3000;
  const personalExpence = 2000;
  const totalExpence = houseRent + mealCost + personalExpence;

  const saveings = income - totalExpence;
  if (saveings < 0){
    return 'Earn More';
  }

}
const saveMoney = monthlySaveings(5000);
console.log(saveMoney);
