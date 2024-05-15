// Map
var numbers = [4, 9, 16, 25];
console.log(numbers.map(Math.sqrt));  //2 3 4 5

var numbers21 = [65, 44, 12, 4];
var newArr = numbers21.map(myfunction);

function myfunction(num){
   return num*2
}
console.log(newArr);  // 130 88 24 8

//filter



