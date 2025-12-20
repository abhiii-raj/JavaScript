//assignement operators
let age = 25;
age += 2;
console.log(age);
age -= 2;
console.log(age);
age *= 2;
console.log(age);
age /= 2;
console.log(age);


//unary opeartor
let a = 5;
console.log(a++); //post increment
console.log(a--); //post decrement
console.log(--a); //pre decrement
console.log(++a); //pre increment


//boolean operator
let isAdult = true
console.log(isAdult);

isAdult = false;
console.log(isAdult);


//javascript is dynamic typed means we can be changed the value at runtime
let c = 24
console.log(typeof(c));
c = true;
console.log(typeof(c));


//String in javascript
let str = "tony stark"
let str1 = 'iron man'
let char = 'c' 
let ch = '123'      //if a number is written inside the quotes then consider it as a string
let ch1 = 'true'

console.log(typeof(str));
console.log(typeof(str1));
console.log(typeof(char));      //single character is also taken as char
console.log(typeof(ch)); 
console.log(typeof(ch1));

console.log(10/0);              //not infinity

let str2 = "ashdjhdsbfhjfbj   isdhfjsfj   sfhjsdhfhjs" // space will be included


//suppose a situatuion comes , have to represent a string in double quote
let str3 = 'my name is "Abhi"'
console.log(str3);


//string indices
let str4 = "abhi";
console.log(str4[2]);

console.log(str4.length);

//string concatenation
console.log("tony"+" "+"stark");
console.log("tony "+1); //is also allowed