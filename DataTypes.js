 // JavaScript Data Types
 
//strings example
var name = 'ram';
var name1 = "hari";
var result = `The names  are ${name} and ${name1}`;

//var number1 = 3;
//var number2 = 3.433;
//var number3 = 3e5 // 3 * 10^5

//var number1 = 3/0;
//console.log(number1); //. Infinity

var number2 = -3/0;
console.log(number2); //  -Infinity

// strings can't be divided by numbers
var number3 = "abc"/3; 
console.log(number3);  // NaN

// BigInt value

// In JavaScript, Number type can only represent numbers less than (253 - 1) and more than -(253 - 1). However, if you need to use a larger number than that, you can use the BigInt data type.

var value1 = 900719925124740998n;

// Adding two big integers
var result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

var value2 = 900719925124740998n;

// Error! BitInt and number cannot be added
var result2 = value2 + 1; 
console.log(result2); 

// JavaScript Boolean
var dataChecked = true;
var valueCounted = false;

// JavaScript undefined

let name ;
console.log(name); // undefined
let name = undefined;
console.log(name); // undefined

// JavaScript null
var number = null;

// JavaScript Symbol
// This data type was introduced in a newer version of JavaScript (from ES2015).

// A value having the data type Symbol can be referred to as a symbol value. Symbol is an immutable primitive value that is unique.

// two symbols with the same description

var value1 = Symbol('hello');
var value2 = Symbol('hello');

// JavaScript Object
var student = {
    
    firstName: 'ram',
    lastName: null,
    class: 10
};

// JavaScript Type

// data is of undefined type
let data;

// data is of integer type
data = 5;

// data is of string type
data = "JavaScript Programming";

var name = 'ram';
typeof(name); // returns "string"

var number = 4;
typeof(number); //returns "number"

var valueChecked = true;
typeof(valueChecked); //returns "boolean"

var a = null;
typeof(a); // returns "object"