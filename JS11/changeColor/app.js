let h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve(`${color} color changed`)
        },delay);
    });
}

changeColor("violet", 1000)
    .then((result) => {
        console.log(result);
        return changeColor("indigo", 1000);
    })
    .then((result) => {
        console.log(result);
        return changeColor("blue", 1000);
    })
    .then((result) => {
        console.log(result);
        return changeColor("green", 1000);
    })
    .then((result) => {
        console.log(result);
        return changeColor("yellow", 1000);
    })
    .then((result) => {
        console.log(result);
        return changeColor("orange", 1000);
    })
    .then((result) => {
        console.log(result);
        return changeColor("red", 1000);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })