//FUNCTION EXPRESSION
//NAMELESS FUNCTION
// syntax;
//         let variableName = function(par1, par2, ...){
//             block of code...
//         }

// const sum = function(a, b){
//     return a + b;
// }
// console.log(sum(3,4));


// const mult = function(a,b){
//     return a*b;
// }
// console.log(mult(3,4));


// let hello = function(){
//     console.log("hello");
// }
// console.log(hello());

// hello = function(){
//     console.log("namaste..");
// }
// console.log(hello());


//HIGHER ORDER FUNCTIONS
// let greet = function(){
//     console.log("hello");
// }

// function multiple(greet, n){
//     for(let i = 1 ; i <= n ;i++){
//         greet();
//     }
// }

// multiple(greet, 2);
// multiple(function(){console.log("bonjour")}, 2);


//FACTORY FUNCTIONS
let odd = function (n) {
    console.log(n % 2 != 0);
}

let even = function (n) {
    console.log(n % 2 == 0);
}

function oddEvenTest(request) {
    if (request == "odd") {
        return function (n) {
            console.log(n % 2 != 0);
        }
    } else if (request == "even") {
        return function (n) {
            console.log(n % 2 == 0);
        }
    } else {
        return "Invalid request..";
    }
}

let request = "even";

console.log(oddEvenTest(request));
console.log(even(2));