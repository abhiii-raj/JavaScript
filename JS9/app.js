// in the dom if you want to see the associated methods and properties for an object you gonna use 
// console.dir(objectName);
//document is also an object which nests other objects (basically the element of htmls) and if we apply change in these object then changes are also visible to the html webpage

//select the html element using document object
//manipulate and changes its value (height, size , color, bg color, heding)

// all property -> jitne bhi current html page mein element use ho rha hai yeh isme available hoga ek collection ke form mein 
// index : element

// let collection = document.all;
// console.log(collection);

// //at every index there's an object we can access it using indices;

// let h1 = collection[8]; // select
// h1.innerText = "Peter Parker"     // Spider Man -> Peter Parker 

// temporary change -> console window
// permanent change -> app.js

//SELECTING ELEMENTS 



//getElememt by Class name
// let smallImages = document.getElementsByClassName("oldImg"); //it will return a collection if values are there otherwise empty collection will be there.

// console.log(smallImages[0]);
// console.log(smallImages[1]);
// console.log(smallImages[2]);

// smallImages[1].src = "assets/creation_1.png";
// smallImages[2].src = "assets/creation_1.png";

// for(let i = 0 ;i<smallImages.length ;i++){
//     smallImages[i].src = "assets/creation_1.png";
//     console.log(`value of image number ${i+1} is changed`)
// }

// let img = document.getElementByClassName("abc"); //empty collection will be received having length as 0;

//get element by tag name
// let ul = document.getElementsByTagName("ul");

// console.log(ul); // length -> 2
// console.log(typeof(ul));


//Query Selectors
// let img = document.querySelector(".oldImg");
// let mainImg = document.querySelector("img");
// mainImg.src = "assets/creation_1.png";
// console.log(img);

// let link = document.querySelector("div a");
// link.innerText = "Author";

// let links = document.querySelectorAll("div a");
// console.dir(links);

// let para = document.querySelector("p");
// console.dir(para);
// console.log(para.innerText);
// console.log(para.innerHTML);
// console.log(para.textContent);

// let mainImg = document.querySelector("img");
// console.log(mainImg.getAttribute("id"));
// mainImg.setAttribute("width", "10%");




//Manipulating style
// let heading = document.querySelector("h1");
// heading.style.backgroundColor = "Red";
// heading.style.color = "Red";

// let links = document.querySelectorAll(".box a");

// for(let i = 0 ;i<links.length ;i++){
//     links[i].style.color = "yellow";
// }

// for(link of links){
//     link.style.color = "purple";
// }

// with the help of style attribute we can only access the inline styling that why not frequently used;

//CLASSLIST PROPERTY
//to check for the classes for an element, to add, to remove, contains, 

// let img = document.querySelector("img");
// console.dir(img.classList); //to check no. of classes

// img.classList.add("green");
// img.classList.add("underline");

// img.classList.remove("green");
// we are not using setAttribute beacuse ek time per ek hi value ho sakti hai


let img = document.querySelector("img");
console.log(img.parentElement);
console.log(img.children);
console.log(img.previousElementSibling);
console.log(img.nextElementSibling);
