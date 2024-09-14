console.log("Leatning Javascript DOM");



//option-1 document.getElementsByTagName()
const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);

for (const li of liCollection) {
  // console.log(li);   // array like object
  console.log(li.innerText);
  
}

//option-2 document.getElementById()
//id secector

const section2 = document.getElementById('section-2');
console.log(section2);
// section2.innerText = "changed Heading By js";
// console.log(section2.innerText);

//option-3 document.getElementsByClassName()
// class selectors
const skills = document.getElementsByClassName('must-learn');
// console.log(skills);
for (const skill of skills) {
  console.log(skill);
  
}

//option-4 document.querySelector()
const someLi = document.querySelector('li');
// console.log(someLi);


//option-5 document.querySelectorAll()
const someList = document.querySelectorAll('.must-learn');
console.log(someList);

//different between HTML collection vs Node List

// 1. HTML Collection (এইচটিএমএল কালেকশন):
// এটি হলো এমন একটি তালিকা (list) যা HTML এর নির্দিষ্ট এলিমেন্টগুলোকে সংগ্রহ করে।
// এই তালিকাটি লাইভ (Live) হয়। এর মানে হল, যদি পেজে কোন এলিমেন্ট যোগ হয় বা মুছে ফেলা হয়, তাহলে HTML Collection এর তালিকাটাও স্বয়ংক্রিয়ভাবে আপডেট হয়ে যায়।
// এটি সাধারণত কিছু নির্দিষ্ট মেথড যেমন getElementsByClassName() বা getElementsByTagName() থেকে পাওয়া যায়।

//2. NodeList (নোড লিস্ট):
// এটি নোড বা HTML এলিমেন্টগুলোর তালিকা, যা সাধারণত querySelectorAll() মেথড থেকে পাওয়া যায়।
// NodeList লাইভ নাও হতে পারে। অর্থাৎ, যদি আপনি নতুন এলিমেন্ট যোগ করেন, তাহলে সেই পরিবর্তন NodeList-এ স্বয়ংক্রিয়ভাবে আপডেট নাও হতে পারে।
// এটি দেখতে অনেকটা অ্যারের মতো হলেও সব সময় অ্যারের মত কাজ করে না, তবে এর উপর forEach() লুপ চালানো যায়।