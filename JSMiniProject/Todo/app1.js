let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
// let lists = document.querySelectorAll("ul li");

// btn.addEventListener("click", function(){
//     console.log("button was clicked");
// })

// inp.addEventListener("click", function(){
//     console.log("input");
// })

// inp.addEventListener("keypress", function(){
//     c onsole.log("you want to write something");
// })

// ul.addEventListener("click", function(){
//     console.log("ul");
// })

// for(list of lists){
//     list.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("list clicked");
// })}

// inp.addEventListener("change", function(){
//     console.log(inp.value);
//     inp.value = ""
// })

btn.addEventListener("click", function(event){
    let li = document.createElement("li");
    li.innerText = inp.value;

    let dltBtn = document.createElement("button");
    dltBtn.innerText = "delete";
    dltBtn.classList.add("delete");

    li.append(dltBtn);
    ul.append(li);
    inp.value = "";
})

// this won't work for new element;
// let dltBtns = document.querySelectorAll(".delete");
// for(dltBtn of dltBtns){
//     dltBtn.addEventListener("click", function(){
//         console.log("event deleted");
//         let list = this.parentElement;
//         list.remove();
//     });
// }

// EVENT DELEGATION
ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let item = event.target.parentElement;
        item.remove();
        console.log("item deleted");
    };
});