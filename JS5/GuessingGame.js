let userNum = prompt("Enter the range: ");
while(true){
    let genNum = Math.floor(Math.random() * Number(userNum)) + 1;
    let guessNum = prompt("Guess the number: ");

    if(genNum === Number(guessNum)){
        console.log(genNum + " " + guessNum);
        alert("Guessed it right !!!");
        break;
    }else{
        console.log(genNum);
    }
}