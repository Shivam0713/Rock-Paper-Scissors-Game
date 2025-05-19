let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompChoice = ()=>{
    const options = ["Rock", "Paper", "Scissors"]
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const gameDraw = ()=>{
    msg.innerText = ("Game is Draw! Play Again..")
    msg.style.backgroundColor = "Red"
}

const showWinner = (userWin, userchoice, compChoice)=>{
    if(userWin){
        userScore ++;
        userScorePara.innerText = userScore;

        msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`
        msg.style.backgroundColor = "Green"
    }else{
        compScore ++;
        compScorePara.innerText = compScore;

        msg.innerText = (`You Lose! ${compChoice} beats Your ${userchoice}`)
        msg.style.backgroundColor = "Blue";      
    }
}

const playGame = (userchoice)=>{
    const compChoice = gencompChoice();

    if(userchoice === compChoice){
        gameDraw();
    }else{
        let userWin = true;
        if(userchoice === "Rock"){
            //scissors and paper
            userWin = compChoice === "Paper" ? false : true;
        }else if (userchoice === "Paper"){
            //rock and scissors
            userWin = compChoice === "Scissors" ? false : true;
        }else{
            //rock and paper
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
    }
} 

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("id")
        playGame (userchoice);
    })
});

// You can also write Logic this way:-

// let userWin;

// if (userchoice === compChoice) {
//     console.log("It's a draw!");
// } else if (
//     (userchoice === "Rock" && compChoice === "Scissors") ||
//     (userchoice === "Paper" && compChoice === "Rock") ||
//     (userchoice === "Scissors" && compChoice === "Paper")
// ) {
//     userWin = true;
//     console.log("You win!");
// } else {
//     userWin = false;
//     console.log("You lose!");
// }
