### 31.1- Recap Module 30
### 31.2 - Access value,Nested object,optional Chaining
- if value exists in object then ? its no work.If the value is not exists then ? its return undefined .Not created a error.

### 31.3 - Array Map to do One line loop magic
- map => loops through each element of an array and do the operation that you passed in the callback function and the result each operation in a array and finally return you the array

### 31.4 - forEach , filter , find and different between them
- forEach => Work same as Map but Return nothing 
- filter => Filter select element based on condition and return array with the mathed condition
- find => work same as filter but give frist matching elements .If no element is matched it   return undefined

### 31.5 - recap map, forEach , filter , find and reduce
- reduce => akta array ar all element nea kicu akta kore reduce

### 31.6 - Introduction to class and Object
- Unable to Understand.Explore More
- similar typer onk jinis make krte class use kora hoy
- class => its call template /blue print for makeing object.Same typer onk jinis make kora jay

### 31.7 - Inheritance,PhotoTypecal inheritance
- photoType inheritance => Phototypecal inheritance refer to the ability to access object properties to another object.We use a javascript prototype to add new propeties and methods to an existing object constructor

### 31.8 - This keyword, dot notation vs Braket notation
``` In JavaScript, the `this` keyword refers to the object it belongs to. Its value depends on how and where it is used:

1. **Global Context:**
   - Outside of any function or object, `this` refers to the global object (`window` in browsers, `global` in Node.js).

2. **Function Context:**
   - Inside a function, `this` refers to the object that called the function. If the function is called as a method of an object, `this` points to that object.
   - If the function is called standalone (not as a method of any object), `this` again refers to the global object (in non-strict mode). In strict mode, `this` is `undefined` in such cases.

3. **Arrow Functions:**
   - Arrow functions do not have their own `this` context. Instead, they inherit `this` from the enclosing lexical context (the scope in which they are defined).

4. **Constructor Functions:**
   - When a function is used as a constructor with the `new` keyword (`new MyObject()`), `this` refers to the newly created object instance.

5. **Event Handlers:**
   - In event handlers, `this` typically refers to the element that received the event.

Understanding `this` is crucial for object-oriented programming in JavaScript, especially when working with methods, constructors, prototypes, and event handling. Its behavior can sometimes be tricky, particularly in nested functions or when dealing with asynchronous code, so it's important to be clear about the current context in which `this` is being used.
```