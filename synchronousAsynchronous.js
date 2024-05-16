// Synchronous and asynchronous operations in JavaScript differ in terms of how they block or allow the execution of other code. Here's a simple example that demonstrates the difference between them:
// "use strict"; 
// Synchronous Code:
console.log("Start");

function syncOperation() {
  for (let i = 1; i <= 3; i++) {
    console.log("Sync Operation " + i);
  }
}
syncOperation();

console.log("End");




// Asynchronous Code using Promises:

// console.log("Start");




//   Synchronous Code:

console.log("Start");

function synchronousTask() {
  console.log("Synchronous Task");
}

synchronousTask();

console.log("End");

// output:
// Start
// Synchronous Task
// End



// Asynchronous Code with setTimeout:

console.log("Start");

function asynchronousTask() {
  setTimeout(() => {
    console.log("Asynchronous Task");
  }, 2000);
}

asynchronousTask();

console.log("End");


// output:
// Start
// End
// Asynchronous Task
a=6;
b=7;
c=a+b;

