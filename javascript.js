const buttons = document.querySelectorAll(".choices button")
const gameplay = document.querySelector("#gameplay")

const rock = ''

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

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        gameplay.innerHTML = ""

        const humanChoice = button.value;
        const computerChoice = getComputerChoice()

        if (button.value === "rock"){
            const choice = document.createElement("img")
            choice.classList.add("myChoice")
            choice.src = "./pictures/rock.png"
            gameplay.appendChild(choice)

        }else if (button.value === "paper"){
            const choice = document.createElement("img")
            choice.classList.add("myChoice")
            choice.src = "./pictures/paper.png"
            gameplay.appendChild(choice)

        }else if (button.value === "scissors"){
            const choice = document.createElement("img")
            choice.classList.add("myChoice")
            choice.src = "./pictures/scissors.png"
            gameplay.appendChild(choice)
        }
      
        
        if (computerChoice === "rock"){
            const compPick = document.createElement("img")
            compPick.classList.add("computerChoice")
            compPick.src = "./pictures/rock.png"
            gameplay.appendChild(compPick)

        }else if (computerChoice === "paper"){
            const compPick = document.createElement("img")
            compPick.classList.add("computerChoice")
            compPick.src = "./pictures/paper.png"
            gameplay.appendChild(compPick)
            
        }else if (computerChoice === "scissors"){
            const compPick = document.createElement("img")
            compPick.classList.add("computerChoice")
            compPick.src = "./pictures/scissors.png"
            gameplay.appendChild(compPick)
        }
        
        
        

        
    })
})
// //base score of the game
// let computerScore = 0
// let humanScore = 0
// //logic behind rock paper scissors
// function playRound(humanChoice, computerChoice){

        
//     if (humanChoice == computerChoice){

//     }else if (humanChoice === "rock" && computerChoice === "paper"){
//         computerScore++;

//     }else if (humanChoice === "rock" && computerChoice === "scissors"){
//         humanScore++;

//     }else if (humanChoice === "paper" && computerChoice === "scissors"){
//         computerScore++;

//     }else if (humanChoice === "paper" && computerChoice === "rock"){
//         humanScore++;

//     }else if (humanChoice === "scissors" && computerChoice === "rock"){
//         computerScore++;

//     }else {
//         humanScore++;
//     }
// }
// //loop to make the game 5 rounds long
// for (let round = 1; round <= 5; round ++){
//     //calling these and assigning them to new variables
//     const humanSelection = getHumanChoice()
//     const computerSelection = getComputerChoice()
//     //if tie, allows for an additional round
//     if (humanSelection === computerSelection){
//         console.log(`%cIt Was A Tie, Try Again`,
//             `color: pink; font-weight: 1000`
//         )
//         round--;
//     }
//     playRound(humanSelection, computerSelection)
//     //keeping score visable for user
//     console.log(`%cRound ${round}`,
//         `color: gray; font-size: 16px; font-weight: 1000`
//     )
//     console.log(`Your Score %c${humanScore}`,
//         `color: lime; font-size: 16px; font-weight: 1000`
//     )
//     console.log(`Computer's Score %c${computerScore}`,
//         `color: red; font-size: 16px; font-weight: 1000`
//     )
// }
// //winning system`~
// if (humanScore > computerScore){
//     console.log(`%cYou Won The Game By A ${humanScore - computerScore} Point Difference` + `  :)`,
//         `color: lime; font-size: 20px; font-weight: 1000`
//     )
// }else if (humanScore < computerScore){
//     console.log(`%cYou Lost The Game And The Computer Won By A ${computerScore - humanScore} Point Difference` + `  :(`,

//         `color: red; font-size: 20px; font-weight: 1000`
//     )
// }else {
//     console.log("It's a Tie!")
// }
