let h1 = document.querySelector("h1");

// this is a bad idea
// setTimeout(() => {
//     h1.style.color = "red";
//     console.log("color chnages to red");
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "blue";
//     console.log("color chnages to blue");
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "orange";
//     console.log("color chnages to orange");
// }, 3000);

// Also a bad idea
// function changeColor(color, delay){
//     setTimeout(() => {
//         h1.style.color = color;
//     }, delay);
// };

// changeColor("red", 1000);
// changeColor("blue", 2000);
// changeColor("green", 3000);


//now here comes the concept of call =back hell creation instead of calling sequentially pass it int the next work in the function parameter as soon as the 1st function gets executed then second will be also executed and this process goe on for the rest function


// function changeColor(color, delay, nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         nextColorChange();
//     }, delay);
// };

function changeColor(color, delay, nextColorChange){
    setTimeout(() => {
        h1.style.color = color;
        if(nextColorChange){
            nextColorChange();
        }
    }, delay);
};

// calling a function inside a function (callback nesting) as a parameter which leads to call back hell
// callback hell
changeColor("violet", 1000, () => {
    changeColor("Indigo", 1000, () => {
        changeColor("Blue", 1000, () => {
            changeColor("Green", 1000, () => {
                changeColor("Orange", 1000, () => {
                    changeColor("red", 1000, () => {
                        changeColor("greenyellow", 1000);
                    })
                })
            })
        })
    })
})

