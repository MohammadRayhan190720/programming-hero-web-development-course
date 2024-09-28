### Module-30 : Js Recap and Basic ES6 , ES1915

#### 30.1-ES6 Intro ,Different Between Var,Let And const
- var => no reason to use
- let => allowed to reassain
- const => not allowed to reassain.In a array/object I didnot change the array/object but I will change/add the index of array/object.
- in loop we always use let beaucse there is need to change value always.

`javascript
Here's a breakdown of the differences between var, let, and const in JavaScript:

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
`