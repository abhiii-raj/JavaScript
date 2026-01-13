// function saveTodb(data){
//     return new Promise((resolve, reject) =>{
//         let intSpeed = Math.floor(Math.random() * 10) + 1;
//         if(intSpeed > 4){
//             resolve("success: data was saved");
//         }else{
//             reject("failure: weak connection");
//         }
//     });
// };

// let request = saveTodb("abhi");
// request
//     .then(() => {
//         console.log("promise was saved.");
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     })


//compact version
// saveTodb("shubh")
//     .then(() => {
//         console.log("promise was saved");
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     }) 

function saveTodb(data){
    return new Promise((resolve, reject) => {
        let intSpeed = Math.floor(Math.random() * 10) +1;
        if(intSpeed > 4){
            resolve("success: data was saved");
        }
        else{
            reject("failure: weak connection");
        }
    });
}

saveTodb("abhi")
    .then(() => {
        console.log("data1 saved");
        saveTodb("shubh")
            .then(() => { //saath mein rakhna parega
                console.log("data2 saved");
            })
            .catch(() => { //must include the catch of inside call back
                console.log("data2 not saved");
            })
    })
    .catch(() => {
        console.log("data1 not saved");
    })


saveTodb("abhi")
    .then(() => {
        
    })
