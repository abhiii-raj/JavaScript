// default parameters
// function avg(a, b = 1){
//     return (a+b)/2;
// }

// console.log(avg(3, 3));



// function sum(a = 1, b){     //wrong implementation
//     return a + b;
// }

// console.log(1 + undefined);


//spread
// console.log(Math.min(10, 15, 12, 1)); //have no fixed set of parameters


// let nums = [10, 15, 12, 1];
// console.log(Math.min(...nums));
// console.log(Math.max(...nums));
// console.log(...nums);
// console.log(10, 15, 12, 14);

// let str = "abhiraj";
// console.log(...str);


// //array literals
// let newNums = [...nums];
// console.log(...newNums);

// let odd = [1,3,5,7];
// let even = [2,4,8,6];

// let newArr = [...odd, ...even]; //oreder matters
// console.log(newArr);


// //object literals
// const data = [
//     {name: "Abhi", email: "abhi@gmail.com"},
// ];

// // let dataCopy = [...data];
// let dataCopy = {...data, id: 13238};
// console.log(dataCopy);

// let obje = {...nums};
// console.log(obje);

// let obj2 = {..."abhi-raj"};
// console.log(obj2);


