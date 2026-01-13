function hello(){
    console.log("inside the hello function");
    console.log("hello...");
}

function demo(){
    console.log("inside the demo function");
    hello();
}

demo();