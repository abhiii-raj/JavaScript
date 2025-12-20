// String methods
// methods actions that can be used to perfrom on objects
// console.log("Print this entire string literals on the console..");
// - console → An object in JavaScript that provides access to the browser’s debugging console (or the terminal if you’re running Node.js).
// - log → A method of the console object that outputs messages.



// stringName.method();
// trim methods -> removes the leading and trailing zeroes
// console.log("  ab  hi   ".trim());
// // can be used with the prompt it might be possible that user has enter extra spaces using prompt



// let user = prompt("Enter your name");
// console.log(user.trim());
// it will not update the string yeh purani string se spaces nahi hatata yeh ek nayi string bana deta hai jiske andar spaces nahi hote



// string in js is immutable which means when we try to change the org string a new string will be created..



//toLowerCase() and toUpperCase()
// let str1 = "abhi";
// console.log(str1.toUpperCase());
// let str2 = "ABHI";
// console.log(str2.toLowerCase());



// STRING METHODS WITH ARGUMENTS
// Argument is some value that we pass to the method
// stringName.method(arg);



// indexOf(); -> gives the first occurence of the passed character or the string
// let str = "IloveCoding";
// console.log(str.indexOf("love"));
// console.log(str.indexOf("I"));
// console.log(str.indexOf("abhi"));



//method chaining
// using method one after another
//order of execution will be from left to right
// console.log("   ABHI  ".trim().toLowerCase());


//slice method
// returns a part of the org string as a new string
// let str = "IloveCoding";
// console.log(str.slice(1, 5));
// console.log(str.slice(1));
// console.log(str.slice(-2));

// Replace method
// searches a value in the string and returns a new string with the value replaced

// let str = "abhi";
// let str2 = str.replace("b", "x");
// console.log(str2);

// let user = "abhiabhiabhi";
// let newName = user.replace("abhi","raj");
// console.log(newName); //only 1st occurrence of the given tring is changed
// //widely used in regular expression in js


//repeat method
// returns a string with the number of copies of a string

// let str = "abhi";
// let str2 = str.repeat(3);
// console.log(str2); // used when you want to repeat some instructions


//ARRAYS 
// let arr = [1,2,3,4,5];

// for(item of arr){
//     console.log(item);
// }

// arrays inside the js is of objects type
// in arraay we can insert element of different types
// let arr = ["Abhi", "Shalini", 25, 45, 70, 8.1]; //mixed array
// console.log(typeof(arr[0]));
// console.log(typeof(arr[2]));
// console.log(typeof(arr[5]));
// console.log(typeof(arr))

// we can also create an empty array in js
// let newArr = [];   //empty arr

// console.log(arr[1][0]);
// console.log(arr[0].length)

// arr[0] = "Gauri Shankar";

// console.log(arr);



//ARRAYS METHOD'S
// let arr = [5,7,8,9,10,42];
// arr.push(18);
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// arr.unshift(3);
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);

// let start = ["january", "july", "march", "august"];
// start.shift();
// // start[1] = "june";
// let july = start.shift();
// start.unshift("june");
// start.unshift(july);
// console.log(start);


// let primary = ["red", "yellow", "blue"];
// console.log(primary.indexOf("yellow"));
// console.log(primary.indexOf("abhi"));
// console.log(primary.includes("shalini"));

// conacatenation in arrays -> to merge 2 arrays
// let arr = [1,2,3,4,5,6];
// let arr1 = [7,8,9,10];
// let allNumber = arr.concat(arr1);
// console.log(allNumber);
// //pehle arr wala element then arr1 ka element
// // arr = arr.reverse();
// console.log(allNumber);

// //slicing in arrays
// console.log(arr.slice(0, 4));
// console.log(allNumber.slice(4));
// console.log(allNumber.slice(-2));

// let month = ["january", "july", "march", "august"];
// month.splice(0, 2, "july", "june");
// console.log(month);

// let language = ['c','c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
// console.log(language.indexOf('javascript'));
// language.reverse();
// console.log(language);
// console.log(language.indexOf('javascript'));




// ARRAYS REFERENCES 
// let arr = [1,2,3,4];
// let arrCopy = arr;
// if we compare the arr and arrCopy then in this case it will return true;
//     arr === arrCopy , arr == arrCopy -> both will give the true value
        //in this case having same reference
// but if we intialise the value of arrCopy explictly and we compare this then we will not get true;
        // arrCopy = [1,2,3,4];
        // if -> arr == arrCopy -> false
            //   -> arr === arrCopy -> false




//constant arr
// when an array is marked as constant then we can perform any opeartion to the array it is unlike a variable where a variable is marked as constant then we can't change any value of that varibale

// const arr = [1,2,4,5,6];
// arr.push(3);
// console.log(arr);
// arr.push(3);
//all the operation we can do with array when marked as const
//but
//but
// arr = [1,2,3,4,5]; //we can't change the value
// mera arr constant ho gaya aur arr ek reference variable hai woh values ko store nahi karata woh address store karata hai.

// nested arrays example -> tic -tac -toe
let arr1 = ['X', null , 'O'];
let arr2 = [null, 'X', null];
let arr3 = ['O', null , 'X'];

let arr = [arr1, arr2, arr3];
// for(let i = 0 ; i< arr.length ;i++){
//     for(let j = 0 ; j< arr[i].length ;j++){
//         console.log(arr[i][j] + " ")
//     }
//     console.log();
// } 

for(itm of arr){
    console.log(itm);
}

arr[0][1] = 'O';

for(itm of arr){
    console.log(itm);
}