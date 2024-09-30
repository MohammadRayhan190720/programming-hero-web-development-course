### Understand Common Javascript Concept
#### 32.1 -Primitive and Non-Primitive Data Types
- javascript is a dynamic type programming language
- number, string , boolean => primitive data types . reference store kore rakhe
- array , object => non-primitive data types. reference store kore rakhe na

#### 32.2- Null vs Undefined. Different ways you will get  Undefined
- 8 ways to get undefined
 - variable that is not initialized will give undefined
 - function with no parameters
 - parameter that is not passed will give undefined
 - if return has nothing on the right side will return undefined
 - property that does not exist in object will return undefined
 - accessing array element outside of array index range will return undefined
- typeOf Undefined => undefined
- typeOf Null => object ;
#### 32.3 - Different Truethy and Falsey value in Javascript
- truety
 - true
 - any number positive or negative
 - any string other than empty string
 - '0' , 'false'
 - empty object and array {},[]
 - truethy check => !!x

- falsey value
 - false
 - Zero
 - empty string
 - undefined
 - null
 - falsy check => !x

 #### 30.4- Double equal(==) and Tripple equal(===), Emplicit conversion
  - (==) => check only value
   - type coercion
   - type conversion
   - type casting
  - (===) => check value and Datatype

- always use (===)
- equal comprision does not work for non-primitive data type

#### Block scope, global scope simple understanding of hoisting
- use let or const beaucse these maintain block scope .