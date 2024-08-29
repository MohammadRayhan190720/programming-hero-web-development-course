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


// জাভাস্ক্রিপ্টে **`isNaN()`** একটি বিল্ট-ইন ফাংশন যা চেক করে যে একটি মান **NaN** (Not-a-Number) কিনা। এই ফাংশনটি `true` রিটার্ন করে যদি পাস করা মানটি **NaN** হয়, এবং `false` রিটার্ন করে যদি পাস করা মানটি একটি সংখ্যা হয়।

// **`isNaN()`** ফাংশনটি সাধারণত তখন ব্যবহার করা হয় যখন আপনি নিশ্চিত হতে চান যে কোনো মান গাণিতিক অপারেশনের জন্য উপযুক্ত কিনা।

// **উদাহরণ:**

// ```javascript
// let result = isNaN(123); // এখানে 123 একটি সংখ্যা, তাই result হবে false
// let result2 = isNaN('Hello'); // এখানে 'Hello' একটি সংখ্যা নয়, তাই result2 হবে true
// ```

// এখানে, **`isNaN(123)`** `false` রিটার্ন করবে কারণ 123 একটি বৈধ সংখ্যা, এবং **`isNaN('Hello')`** `true` রিটার্ন করবে কারণ `'Hello'` সংখ্যা নয়।