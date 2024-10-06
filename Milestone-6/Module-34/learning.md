### Module-34- More about Javascript

#### 34-0- What Really in Javascript ?
- Javascript is Highly abstracted programming Language
 - high abstracted means => hiding the implementation details ,showing only the functionality to the users.like a ATM mession
- javascript collects garbase automatically
- Javascript is JIT compiled language
- Javascript is a multi-paradigm programming language
- javascript is proto-typed based programming language
- javascript is dynamically typed programming language

#### 34-1- Javascript engine v8 internal mechanism 
- V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements ECMAScript and WebAssembly, and runs on Windows, macOS, and Linux systems that use x64, IA-32, or ARM processors. V8 can be embedded into any C++ application.
- how run javascript code in a browser => js source code > v8 engine > parsing > ast > byte code > machine code > code run on CPU

#### 34-2- Javascript Excution context and call stack
- an excution context is an environment 
- inside the excution context a peace of code get executed
- two types of context => Global excution context,function excution context 
- call stack => The call stack is used by Javascript to keep track to multiple function call

#### 34-3- single threaded ,Asynchronous vs synchronous
- by deafult javascript is single threaded and synchronous
 - single threaded means=>
                         - only one statement is excuted at a time 
                         - javascript only has one call stack 
                         - javascript run code line by line
                         - must finished excuting a peace of code before moving onto the next 
- synchronous => maintain serial
- Asynchronous => not maintain serial , fetch()/ setTimeout()/setInterval() 

#### 34.4- Promise and async await

#### 34.5-setInterval and clearInterval
