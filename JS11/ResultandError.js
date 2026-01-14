function saveTodb(data){
    return new Promise((resolve, reject) => {
        let intSpeed = Math.floor(Math.random() * 10) +1;
        if(intSpeed > 4){
            resolve("success: data was saved.");
        }else{
            reject("failure: weak connection");
        }
    });
};

saveTodb("abhi")
    .then((result) => {
        console.log("data1 saved", result);
        return saveTodb("shubh");
    })
    .then((result) => {
        console.log("data2 saved", result);
        return saveTodb("raj");
    })
    .then((result) => {
        console.log("data3 saved", result);
        return saveTodb("shubham");
    })
    .then((result) => {
        console.log("data4 saved", result);
    })
    .catch((error) => {
        console.log("data not saved", error);
    })