// Array Method 

var a1 = ['p', 'q', 'r', 's'];
var a2 = ['a','b', 'c']

// 1) Push()
console.log(a1.push('t'));  // new letter added using push method()
console.log(a1);
document.getElementById('d').innerHTML=a1;

// 2) pop()
console.log(a1.pop()); // new letter deleted using pop method
console.log(a1);

// 3) join()
console.log(a1.join()); // ('')(*)("")()
console.log(a1); // display the array method

//  4) concat()
console.log(a1.concat(a1)); // a1.a1 joined in concat method

// 5) reverse()
console.log(a1.reverse()); //reverse order display

var a1 = ['p', 'q', 'r', 's']
var a2 = ['a','b', 'c', 'd', 'e']
var a3 = [9,8,7,6,5,4,3,2,1,0]

// 6) tostring()
console.log(a1.toString()); // display the a1 . 
console.log(a1);

// 7) shift()
console.log(a1.shift());  // display the first letter only showned


// 8) unshift()
console.log(a1.unshift("g"));  // a1 is total number display in unshift method
console.log(a1);  // first letter changing the unshift method

// 9) slice()
console.log(a3.slice(1.3));    // 1 to 3  letters display the slice method /3rd letter also display 
console.log(a3);

//  10) sort()
console.log(a3.sort()); //display the a1 rows in array method

//  11) splice()
console.log(a2.splice(1,2,'g')) //1,2  letters deleted that place covered by g letters.
console.log(a2);


