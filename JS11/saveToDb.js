function saveToDb(data){
    let intSpeed = Math.floor(Math.random() * 10) + 1;
    if(intSpeed > 4){
        console.log("sucess: data saved.");
    }else{
        console.log("failure: weak connection");
    }
};

saveToDb("abhi");
saveToDb("shubh");
saveToDb("raj");


function saveTodb(data, success, failure){
    let intSpeed = Math.floor(Math.random() * 6) + 1;
    if(intSpeed > 4){
        success();
    }else{
        failure();
    }
};

saveTodb(
    "abhi",
    () => {
        console.log("data 1 saved");
    },
    () => {
        console.log("failure: weak connection.")
    }
);

// callback hell
//1st value
saveTodb(
    "shubh",
    ()=>{
        console.log("data 1: saved");
        // 2nd value
        saveTodb(
            "abhi",
            () => {
                console.log("data 2: saved");
                // 3rd value
                saveTodb(
                    "shubham",
                    () => {
                        console.log("data 3: saved");
                    },
                    () => {
                        console.log("failure 3: data not saved");
                    }
                )
            },
            () => {
                console.log("failure 2: data not saved");
            },
        )
    },
    () => {
        console.log("failure 1: data not saved");
    }
);