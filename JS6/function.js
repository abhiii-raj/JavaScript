// function hello(){
//     console.log("Hello, Abhi");
// }
// hello();


// function printNumber(){
//     for(let i = 1 ;i<= 5 ;i++){
//         console.log(i);
//     }
// }
// printNumber();


// function isAdult(){
//     let age = 14;
//     if(age >= 18){
//         console.log("You are an adult..");
//     }else{
//         console.log("Not an adult..");
//     }
// }
// isAdult();


// function diceRoll(){
//     let dice = Math.floor(Math.random() * 6) + 1;
//     console.log(dice);
// }
// diceRoll();


//FUNCTION WITH ARGUMENTS
// function isAdult(age) {
//     if(age >= 18){
//         console.log("Adult");
//     }else{
//         console.log("Not Adult");
//     }
// }
// isAdult(17);
// isAdult(19);
// isAdult(); //it will print undefined if argument not passed


// function average(a, b, c){
//     let avg = (a+b+c)/3;
//     console.log("The average value is: ", Math.floor(avg));
// }
// average(3,4,6);


// function table(num){
//     for(let i = 1; i<=10; i++){
//         console.log(`${num} X ${i} = ${num*i}`);
//     }
// }
// table(3);
// table(15);



// function calculateSum(){
//     let sum = 0;
//     for(let i = 1; i <= 5; i++){
//         sum += i;
//     }
//     return sum;
// }

//  calculateSum(); must do console.log();
// console.log(calculateSum());


//function as an argumnet
// function sum(a, b){
//     return a + b;
// }

// console.log(sum(1,2));
// console.log(sum(sum(1,2),3)); //function as an argument

// function sum(num){
//     let sum = 0;
//     for(let i = 1 ;i<= num ;i++){
//         sum += i;
//     }
//     return sum;
// };

// console.log(sum(5));


function concatenate(array){
    let str = "";
    for(let i = 0 ;i< array.length ;i++){
        str += array[i];
    }
    return str;
}
let arr = ['a','b','h','i'];
let user = concatenate(arr);
console.log(user);