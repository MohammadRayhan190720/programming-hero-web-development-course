var classRoll = 15 ;
console.log(classRoll);
let studentName = "rayhan";
console.log(studentName);

//data types
//number/numeric
const age = 18;
console.log(age);
console.log(typeof age);
//string
const country = "Bangladesh";
console.log(country);
console.log(typeof country);
//bollean
const isRich = true;
console.log(isRich);
console.log(typeof isRich);

//variable nameing conversions
// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter.
// Names can also begin with $ and _ (but we will not use it in this tutorial).
// Names are case sensitive (y and Y are different variables).
// Reserved words (like JavaScript keywords) cannot be used as names.

//js number

var year = '2024';
var year14 = Number(year);
console.log(year14);

//parseinit
var id = 105.5;
console.log(parseInt(id));

//parseFloat
var id = 105.5;
console.log(parseFloat(id));


// জাভাস্ক্রিপ্টে **`null`** এবং **`undefined`** এর মধ্যে পার্থক্য রয়েছে:

// 1. **মানের অভাব (Null):** 
//    - **`null`** একটি ইচ্ছাকৃতভাবে সেট করা মান যা বোঝায় যে ভ্যারিয়েবলটি খালি বা কোনো মান নেই। এটি একটি নির্দিষ্ট মান এবং ডেভেলপাররা ইচ্ছাকৃতভাবে ভ্যারিয়েবলকে `null` সেট করতে পারেন, যখন তারা নিশ্চিত যে ভ্যারিয়েবলটির কোনো মান নেই।
//    - **উদাহরণ:**
//      ```javascript
//      let user = null; // ইচ্ছাকৃতভাবে user ভ্যারিয়েবলটিকে খালি বা null করা হয়েছে
//      ```

// 2. **অ্যাসাইনমেন্টের অভাব (Undefined):**
//    - **`undefined`** নির্দেশ করে যে একটি ভ্যারিয়েবল ডিক্লেয়ার করা হয়েছে, কিন্তু কোনো মান অ্যাসাইন করা হয়নি। এটি নিজে থেকেই আসে, যখন একটি ভ্যারিয়েবল ডিক্লেয়ার করা হয় কিন্তু কোনো মান দেওয়া হয় না।
//    - **উদাহরণ:**
//      ```javascript
//      let age; // এখানে age ভ্যারিয়েবলটি ডিক্লেয়ার করা হয়েছে কিন্তু কোনো মান অ্যাসাইন করা হয়নি, তাই এটি undefined
//      ```

// **সংক্ষেপে:**

// - **`null`** মানে ভ্যারিয়েবলটি ইচ্ছাকৃতভাবে খালি।
// - **`undefined`** মানে ভ্যারিয়েবলটি ডিক্লেয়ার করা হয়েছে, কিন্তু কোনো মান অ্যাসাইন করা হয়নি।
