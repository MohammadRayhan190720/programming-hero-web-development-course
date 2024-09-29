### Module-30 : Js Recap and Basic ES6 , ES1915

#### 30.1-ES6 Intro ,Different Between Var,Let And const
- var => no reason to use
- let => allowed to reassain
- const => not allowed to reassain.In a array/object I didnot change the array/object but I will change/add the index of array/object.
- in loop we always use let beaucse there is need to change value always.


### Here's a breakdown of the differences between var, let, and const in JavaScript:

1. Scope
var: Function-scoped. If declared inside a function, it is accessible only within that function. If declared outside, it's globally scoped.
let and const: Block-scoped, meaning they are only accessible within the block {} where they are defined (such as within an if statement or a loop).
2. Re-declaration
var: Can be re-declared within the same scope without error.
let: Cannot be re-declared in the same scope.
const: Cannot be re-declared in the same scope.
3. Initialization
var: Can be declared without initialization, and if you try to use it before declaration, it will be undefined.
let: Can be declared without initialization but will result in a ReferenceError if accessed before declaration.
const: Must be initialized at the time of declaration and cannot be left uninitialized.
4. Reassignment
var: Can be reassigned.
let: Can be reassigned.
const: Cannot be reassigned (although, for objects and arrays, the contents can be modified).
5. Hoisting
var: Is hoisted to the top of its scope and initialized with undefined.
let and const: Are hoisted to the top but are not initialized, causing a "temporal dead zone" until the declaration is reached.

#### 30.2- function default parameter for not provided values
- if we use the default parameter,the parameter will be the default values if the calller doesnot provided required values
- if we expect number we set default parameter to 0, if string defaullt parameter is '', if  array defaullt parameter is[], if object defaullt parameter is{}
- if we donot use default parameters,the parameters will be undefined if the caller doesnot provided required values 

#### 30.3- Template string,Multiple line string and Dynamic String

#### 30.4- Arrow function,multiple parameter and function body
- arrow function is a features of es6 .It allowes you to creat a function in cleaner way compared to regular function

#### 30.5- More arrow function and Big arrow function
- if arrow funtion in one line it implicitly return .If it multiline then it explicitly return(it means you write ruturn keyword)
#### different between arrow function and regular function
- syntax => In a regular function it explicitly return adn in a arrow function it return inplicitly .if there is a one argument no need to use ().
- agruments => You can access all the arguments passed to a regular function using the arguments object. The arguments object is an array-like object that holds all the arguments passed to the function. The arguments object is not available in arrow functions. If you try to access it in arrow functions, JavaScript will throw a reference error.To access the arguments passed to an arrow function, you can use the rest parameter syntax (...).
```javascript
 function divide(a,b){
  console.log(arguments);
 }
 divide(50,20)


 const subtract = (x,y) => {
  console.log(arguments);
}
subtract(2,5)

const subtract2 = (...argu) => {
  console.log(argu);
}
subtract2(2,5,10,20)
```
- Duplicate Named Parameters:Arrow function return last argument of duplicate arguments.btn if use stric mode it not allow to use duplicate arguments and arrow function it not allow to use duplicate arguments
- Function Hoisting : Regular functions are hoisted to the top. And you can access and call them even before they are declared.Arrow functions, on the other hand, cannot be accessed before they are initialised.

```So Which One Should You Use?
There is no straightforward answer to this. Whether you use a regular function or arrow function depends on the specific use case.

It's recommended to use regular function in any of the following cases:

when you need to use a constructor with the new keyword
when you need the this binding to be dynamically scoped
when you want to use the arguments object
And you can use arrow functions in any of the following cases:

when you want a more concise syntax for the function
when you need to maintain the lexical scope of this
for non-method functions (in most cases)
```

### 30.6- spread operator,array max,copy arrays
- the javascript operator allows us to quickly copy all or part of an existing array or object into another array of objects
```
Here are 10 reasons to use the spread operator (`...`) in JavaScript:

### 1. **Simplifies Array Merging**
   - Merging multiple arrays becomes easy and clean without using `concat()`.
     ```javascript
     const arr1 = [1, 2];
     const arr2 = [3, 4];
     const merged = [...arr1, ...arr2];
     // Output: [1, 2, 3, 4]
     ```

### 2. **Easier Array Copying**
   - The spread operator allows you to create a copy of an array quickly without altering the original array.
     ```javascript
     const original = [1, 2, 3];
     const copy = [...original];
     // Output: [1, 2, 3]
     ```

### 3. **Merging Objects**
   - You can merge multiple objects together seamlessly, making it an efficient way to combine properties.
     ```javascript
     const obj1 = { name: 'Alice' };
     const obj2 = { age: 25 };
     const mergedObj = { ...obj1, ...obj2 };
     // Output: { name: 'Alice', age: 25 }
     ```

### 4. **Cloning Objects**
   - The spread operator provides a simple way to clone objects without modifying the original object.
     ```javascript
     const person = { name: 'John', age: 30 };
     const clone = { ...person };
     // Output: { name: 'John', age: 30 }
     ```

### 5. **Passing Function Arguments**
   - It allows you to pass elements of an array as arguments to a function that expects separate parameters.
     ```javascript
     function sum(a, b, c) {
       return a + b + c;
     }
     const numbers = [1, 2, 3];
     console.log(sum(...numbers)); // Output: 6
     ```

### 6. **Converting Strings to Arrays**
   - You can easily convert strings into arrays of characters.
     ```javascript
     const greeting = "hello";
     const letters = [...greeting];
     // Output: ['h', 'e', 'l', 'l', 'o']
     ```

### 7. **Working with Immutable Data**
   - The spread operator helps maintain immutability, which is crucial in functional programming and state management (e.g., React), allowing you to create modified copies without altering the original data.
     ```javascript
     const state = { user: 'Alice', age: 25 };
     const newState = { ...state, age: 26 };
     // Output: { user: 'Alice', age: 26 }
     ```

### 8. **Adding Elements to Arrays**
   - It offers a straightforward way to add elements at the beginning, middle, or end of an array.
     ```javascript
     const arr = [2, 3];
     const extendedArr = [1, ...arr, 4];
     // Output: [1, 2, 3, 4]
     ```

### 9. **Shallow Copying of Arrays/Objects**
   - The spread operator creates shallow copies, which are often sufficient when working with flat arrays or objects, ensuring changes in the new array/object don’t affect the original.
     ```javascript
     const original = [{ id: 1 }];
     const copy = [...original];
     copy[0].id = 2;
     // original remains [{ id: 1 }]
     ```

### 10. **Destructuring and Skipping Elements**
   - It’s helpful in destructuring where you want to separate some elements while keeping the rest in a new array.
     ```javascript
     const [first, ...rest] = [1, 2, 3, 4];
     // first = 1, rest = [2, 3, 4]
     ```

The spread operator is a highly versatile and concise way to work with arrays, objects, and function arguments, making your JavaScript code more readable, efficient, and easier to manage.
```



