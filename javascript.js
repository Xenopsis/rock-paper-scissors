function startGame (){

const buttons = document.querySelectorAll(".choices button")
const gameplay = document.querySelector("#gameplay")
const compScoreBoard = document.querySelector(".computerscore")
const humanScoreBoard = document.querySelector(".humanscore")
const bestOf = document.querySelectorAll(".bestOf button")
const winMessage = document.querySelector("#win");
const resetButton = document.querySelector("#resetButton")

let humanChoice;
let computerChoice;

let computerScore = 0
let humanScore = 0

let roundCount = 3

const computerPoints = document.createElement("div")
computerPoints.classList.add("points")
computerPoints.textContent = computerScore

const humanPoints = document.createElement("div");
humanPoints.classList.add("points")
humanPoints.textContent = humanScore

humanScoreBoard.appendChild(humanPoints)
compScoreBoard.appendChild(computerPoints)

bestOf.forEach((round) => {
    round.addEventListener('click', () => {
        roundCount = parseInt(round.value)
    })
})

function getComputerChoice(){
    //Picks a random number 0-2
    computerPick = Math.floor(Math.random() * 3 )
    //Assigns Value to string
    if (computerPick == 0){
        return "rock"
    }else if (computerPick == 1){
        return "paper"
    }else {
        return "scissors"
    }
}
let gameOver = false

function gameLogic (humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return "tie"
    }else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
    }else {
        computerScore++;
    }

    humanPoints.textContent = humanScore
    computerPoints.textContent = computerScore

    if (computerScore === Math.ceil((roundCount + 1) / 2)){
        const computerWin = document.createElement("div");
        computerWin.classList.add("winner")
        computerWin.textContent = `The computer won with a ${computerScore - humanScore} point lead!`
        winMessage.appendChild(computerWin)
        gameOver = true

    } else if (humanScore === Math.ceil((roundCount + 1) / 2)){
        const humanWin = document.createElement("div");
        humanWin.classList.add("winner")
        humanWin.textContent = `You won with a ${humanScore - computerScore} point lead!`
        winMessage.appendChild(humanWin)
        gameOver = true

    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        if (gameOver) {
            humanScore = 0;
            computerScore = 0;
            humanPoints.textContent = humanScore;
            computerPoints.textContent = computerScore;
            winMessage.innerHTML = "";
            gameOver = false;  // Reset the flag
            return;
        }
        gameplay.innerHTML = ""

        humanChoice = button.value;
        computerChoice = getComputerChoice()

        gameLogic(humanChoice, computerChoice)

        if (button.value === "rock"){
            const choice = document.createElement("img")
            choice.classList.add("choice")
            choice.src = "./pictures/rock.png"
            gameplay.appendChild(choice)

        }else if (button.value === "paper"){
            const choice = document.createElement("img")
            choice.classList.add("choice")
            choice.src = "./pictures/paper.png"
            gameplay.appendChild(choice)

        }else if (button.value === "scissors"){
            const choice = document.createElement("img")
            choice.classList.add("choice")
            choice.src = "./pictures/scissors.png"
            gameplay.appendChild(choice)
        }
      
        if (computerChoice === "rock"){
            const compPick = document.createElement("img")
            compPick.classList.add("choice")
            compPick.src = "./pictures/rock.png"
            gameplay.appendChild(compPick)

        }else if (computerChoice === "paper"){
            const compPick = document.createElement("img")
            compPick.classList.add("choice")
            compPick.src = "./pictures/paper.png"
            gameplay.appendChild(compPick)

        }else if (computerChoice === "scissors"){
            const compPick = document.createElement("img")
            compPick.classList.add("choice")
            compPick.src = "./pictures/scissors.png"
            gameplay.appendChild(compPick)
        }
    })
})
}
startGame()