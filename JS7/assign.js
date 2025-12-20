// let arr = [1,2,3,4,5];
// const sumArr = function(arr){
//     let sum = 0; 
//     for(item of arr){
//         sum += item;
//     }
//     return sum;
// };
// const avg = (sumArr, arr) =>{
//     return sumArr / arr.length;
// };
// console.log(avg(sumArr(arr), arr));



// function isEven(num){
//     if(num % 2 == 0){
//         return "even";
//     }else{
//         return "odd";
//     }
// };

// const isEven = (num) => {
//     if(num % 2 == 0){
//         return "even";
//     }
// };
// console.log(isEven(3));
// console.log(isEven(4));



const object = {
    message : "Hello world",
    
    logMessage(){
        console.log(this.message);
    }
};
setTimeout(object.logMessage, 1000);
// Object.logMessage;



// let length = 4;
// function callback() {
//     console.log(this.length);
// }
// const object = {
//     length: 5,
//     method(callback) {
//         callback();
//     },
// };
// object.method(callback, 1, 2);