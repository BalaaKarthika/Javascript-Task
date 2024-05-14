// function functionName(parameters) {
//     // function body
//     // ...
// }
// functionName(arguments);


//Returning a value

// function say(message) {
//     console.log(message);
// }

// let result = say('Hello');
// console.log('Result:', result);

// //-----------------------------------------------------------------

// function compare(a, b) {
//     if (a > b) {
//         return -1; 
//     } else if (a < b) {
//         return 1;
//     }
//     return 0;
// }
// //-----------------------------------------------------------------

// function add(a, b) {
//     return a + b;
// }
// let sum = add(10, 20);
// console.log('Sum:', sum);

//-----------------------------------------------------------------

// function add() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }
// console.log(add(1, 2)); // 3
// console.log(add(1, 2, 3, 4, 5)); // 15




// JavaScript Functions are First-Class Citizens

// // Storing functions in variables
// function add(a, b) {
//     return a + b;
// }

// let sum = add;
// let result = add(10, 20);
// let result = sum(10,20);

// // Passing a function to another function


// function outerFunc() {
//     // the outer scope
//     let outerVar = 'I am from outside!';
//     console.log(outerVar);
  
//     function innerFunc() {
//       // the inner scope
//       console.log('I am from inside!'); 
//     }
  
//     return innerFunc;
//   }
  
//   const inner = outerFunc();
//   inner();
 

function outerFunc() {
    // the outer scope
    let outerVar = 'I am from outside!';
    console.log(outerVar);
  
    function innerFunc() {
      // the inner scope
      console.log('I am from inside!'); 
      // console.log('I am from inside!'+" "+ name); 
      console.log(outerVar); 
    }
  
   innerFunc()
  }
  
 outerFunc();




 