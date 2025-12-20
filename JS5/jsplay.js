//OBJECTS LITERALS -> collection of properties , store keyed collections and complex entities
// const info = [  //arrays of objects
//     {name: "Abhi Raj", age: 21, salary: 70000}, //properties X objects
//     {name: "Shoeb Ali", age: 22, salary: 85000}, //properties 
//     {name: "Shubham", age: 21, salary: 77000} //properties
// ];


//always must be const
//jaha per iska reference hai jaha per address hai usko change nahi kar sakte lekin key value pair add kar skate hai
//object ke andar clarity jayad hogii ;ekin array mein nahi
// console.log(info);


// const student = {
//     name: "Abhi Raj",
//     age: 21,
//     marks: 78,
//     subjects : ["physics", "maths", "chemistry"] 
//     //arrays bhi store karwa skte hai
// }



//THREAD / TWITTER POST
// let post = {
//     username: "@abhiii",
//     content: "related to politics",
//     likes: 50,
//     reposts: 7,
//     tags : ["@shalini", "@shubham", "@khushiii"]
// };
// console.log(post)

// //accessing the data inside the objects
// console.log(post.username);  //objectName.keyName -> using dot opearator widely used
// console.log(post["content"]); //objectName["keys"] 




// in js , the keys of objects are string
// Exactly 👍 — in JavaScript, object keys are always strings (or symbols) under the hood.
// Here’s how it works:
// 🔑 Object Keys in JavaScript
// - When you define an object like
// const obj = {
//   name: "Abhi",
//   age: 21
// };

// - The keys "name" and "age" are stored as strings.
// Yes, exactly ✅ — in plain JavaScript objects, all keys (except Symbol) are converted to strings internally.
// Let’s break it down with examples:
// const obj = {
//   1: "one",
//   2: "two"
// };

// console.log(Object.keys(obj)); // ["1", "2"]
// console.log(obj[1]);           // "one"
// console.log(obj["1"]);         // "one" → same!

// const obj = {
//   true: "yes",
//   false: "no"
// };

// console.log(Object.keys(obj)); // ["true", "false"]
// console.log(obj[true]);        // "yes"
// console.log(obj["true"]);      // "yes"





//ADD/UPDATE VALUE
// const student = {
//     name: "Abhi Raj",
//     age: 21,
//     marks: 94.4,
//     city: "Delhi"
// }

// console.log(student);
// student["city"] = "Mumbai";
// student["gender"] = "Male";
// student.city = "Mumbai";
// student.gender = "Male";
// console.log("New Object...");
// console.log(student);

// can be possible in both ways using dot operator or square braces



//nested objects
// let student = {
//     name: "Abhi Raj",
//     age: 21,
//     marks: 74.4,
//     city: "PATNA",
//     subjectMarks: {
//         Phy: 74,
//         Maths: 88,
//         chem: 94
//     }
// }
// console.log(typeof(student.age));
// //changing value of nested objects
// student.subjectMarks.Maths = 98; 
// //if it is not created it will create it if itos exists then uodate the value
// console.log(student);
// delete student.marks; 
// //can also delete keys 
// console.log(student); 




//Arrays of objects
// const Student1 = {
//     name: "Abhi",
//     age: 21
// };

// const Student2 = {
//     name: "Shalini",
//     age: 20
// };

// const Student3 = {
//     name: "Aastha",
//     age: 18
// };

// // can also be possible in this way
// // const classInfo = [
// //     {
// //         name: "Aastha",
// //         age: 18
// //     },
// //     {
// //         name: "Abhi",
// //         age: 21
// //     },
// //     {
// //         name: "Shalini",
// //         age: 20
// //     },
// // ];
// // can also be possible in this way
// const classInfo = [Student1, Student2, Student3];
// console.log(classInfo);
//objects can be accessed using indices...
//cam also add/update values


// console.log(Math.floor(Math.random() * 100)+ 1);
// console.log(Math.floor(Math.random() * 5) + 1);

//we want from 20 to 24
console.log(Math.floor(Math.random() * 5) + 20);