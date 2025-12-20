// let num = 14;
// let arr = [];
// for(let i = 0 ; i<= 30 ;i++){
//     if(i > num){
//         arr.push(i);
//     }
// }
// console.log(arr);

// let country = ["Australia", "Germany", "United States of America"];
// let lth = country[0].length();
// let bigCon
// for(com of country){
//     if(com.length() > lth){
//         lth = com.length();
//         bigCon = com;
//     }
// }


// let vowel = function(str){
//     let count = 0;
//     for(ch of str){
//         if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(vowel("abhiandshalini"));


// let number = function(start, end){
//     return Math.floor(Math.random() * (end-start)) + start;
// }

// console.log(number(1, 6));


let str = "abcdabcdefgggh";
let unique = function(str){
    let ans = "";
    for(let i = 0 ;i <str.length ;i++){
        if(ans.indexOf(str[i]) == -1){
            ans += str[i];
        }
    }
    return ans;
}
console.log(unique(str));