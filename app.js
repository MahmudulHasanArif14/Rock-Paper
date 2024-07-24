let userScore = 0;
let CompScore = 0;
const choices = document.querySelectorAll(".choice");
let message=document.querySelector("#msg");



//creating com choice
const compChoice = () => {

    const option = ["rock", "paper", "scissors"];

    //!  Math.random();// generate random number e function ei function 0-1  range r number dey to amra jodi akn 0-2 range r cai kunu random number tokon etar sate 3 gun krle paimu e range r number 0-9 r range caile 10 diya gun krtam olan 
    //math.floor() use hoy decimal value na newar lagin

    let index = Math.floor(Math.random() * 3);

    return option[index];



};






const drawGame = () => {
    message.innerText="Game was Draw. Play Again";
    console.log("draw");
    message.style.background="blue";
}


const showWinner = (userWin) => {




    if (userWin) {
         message.innerText="Hurrah! You Win";
        console.log("win");
        message.style.background="green";
        userScore++;

    }
    else {
        message.innerText="Alas! You Lose :( TRY AGAIN";
        message.style.background="red";
        CompScore++;
    }

    let userPoint=document.querySelector("#userPoint");
    let CompPoint=document.querySelector("#CompPoint");

    userPoint.innerText=userScore;
    CompPoint.innerText=CompScore;
    

}

//Modular way of programming choto choto tukray function divide kori kaj kora 

//handling the game formula
const playGame = (UsrchoiceId) => {



    //Generated Computer choice
    const ChoicePc = compChoice();


    if (UsrchoiceId === ChoicePc) {
        //drawGame
        drawGame();
    }

    else {


        let userWin = true;
        if (UsrchoiceId == "rock") {

            userWin = (ChoicePc === "paper") ? false : true;
        } else if (UsrchoiceId == "paper") {


            userWin = (ChoicePc === "scissors") ? false : true;
        }
        else {

            userWin = (ChoicePc === "rock") ? false : true;

        }
        showWinner(userWin);

    }





}



//user choice
choices.forEach((choice) => {


    choice.addEventListener("click", () => {

        const UsrchoiceId = choice.getAttribute("id");//getting the id of choice
        playGame(UsrchoiceId);

    })

})