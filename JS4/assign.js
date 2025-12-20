// let num = 13238;
// let count = 0;

// while(num > 0){
//     let rem = num % 10;
//     count++;
//     num = Math.floor(num /10);
// }
// console.log(count);


// let num = 12345;
// let sum = 0;

// while(num > 0){
//     let rem = num % 10;
//     sum += rem
//     num = Math.floor(num /10);
// }
// console.log(sum);


// let num = 0;
// let fact = 1;
// for(let i = 1; i<=num ;i++){
//     fact *= i;
// }
// console.log(fact);


// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// // let idx = 0;

// for(let i = 0;i<arr.length ;i++){
//     if(arr[i] === num){
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);


// let arr = [2,5,10,50,2,7,1,9];
// let largest = -1;
// for(let i = 0;i<arr.length ;i++){
//     if(arr[i] > largest){
//         largest = arr[i];
//     }
// }
// console.log(largest);


let num = 12345
let sum = 0;
while(num > 0){
    let rem = Number(num % 10);
    sum = sum  + rem;
    num = Math.floor(num / 10);
}

console.log(sum);