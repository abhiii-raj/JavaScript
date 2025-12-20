// these all are higehr order functions which take function as a parameter 

// let arr = [1,2,3,4,5];
// //
// function oddEven(num){
//     console.log(num % 2 == 0); //declared and defined
// }

// arr.forEach(oddEven); //only name is passed

// arr.forEach(function(num) { 
//     console.log(num % 2 == 0);   //declared and defined inside the function   
// });



// MAP FUNCTION -> converts the value into an array
// let newArr = arr.map((num) => {
//         return num % 2 == 0;
//     }
// );
// console.log(newArr);

// let doubleArr = arr.map((num) => (
//         num**num
//     )
// )

// console.log(doubleArr);
// console.log(arr);


//filter function
// let even = arr.filter((ele) => {
//     ele % 2 == 0;
// });

// console.log(even);

// let odd = arr.filter((ele) => {
//     return ele % 2 != 0;
// });

// console.log(odd);



//every function
// let nums = [2,4,6,8,4,0,11];
// let decision = nums.every((ele) => {
//     return ele % 2 == 0;
// });
// console.log(decision);

//some function
// let nums = [1,2,3,4,5];
// let decision = nums.some((num) => {
//     num % 2 != 0;
// });
// console.log(decision);



// reduce function
// let nums = [1,2,3,4,5];
// let sum = nums.reduce((res, el) => {
//     console.log(res); //debugging just how the reduce method works
//     return res + el;
// });
// console.log(sum);


//finding maximum in an array using reduce method
// let nums = [1,4,5,7,9,1,2,45,1,11];

// const result = nums.reduce((max, el) => {
//     if(el > max){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(result);

let arr = [
    {name: "Abhi"},
    {name: "Shubham"},
    {name: "Shubh"}
]

arr.forEach((obj)=>{
    console.log(obj.name)
});