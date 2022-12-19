let userScore = 0
let computerScore = 0
for(let i = 0; i < 5; i++){
    playGame()
}
if(userScore == 3){
    alert("You Win!")
}
else if(computerScore == 3){
    alert("The Computer Wins")
}
else if(computerScore != 3 &&  userScore != 3){
    alert("No Winner!")
}

function getComputerChoice(){
    var rndNum = Math.floor(Math.random()* 2)    //get random number between 0 to 2
    if(rndNum == 0){
        return "ROCK"
    }
    else if(rndNum == 1){
        return "PAPER"
    }
    else if(rndNum == 2){
        return "SCISSORS"
    }
}


function vetUserChoice(userChoice){
    if(userChoice === "ROCK"){
        return "ROCK"
    }
    if(userChoice === "PAPER"){
        return "PAPER"
    }
    if(userChoice === "SCISSORS"){
        return "SCISSORS"
    }
    else{
        alert("Incoorect Input!")
    }

}

function playGame(){
    var userChoice = vetUserChoice(prompt("Rock, Paper, Scissors!").toUpperCase())
    var computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice)
}

function playRound(userChoice, computerChoice){
    console.log("Computer Choice: " + computerChoice)
    if(userChoice === "ROCK" && computerChoice == "SCISSORS"){
        alert("You Wins!\nYou: " + userChoice + "\tComputer: " + computerChoice)
        userScore = userScore + 1
    }
    else if(userChoice === "PAPER" && computerChoice == "ROCK"){
        alert("You Wins!\nYou: " + userChoice + "\tComputer: " + computerChoice)
        userScore = userScore + 1
    }
    else if(userChoice === "SCISSORS" && computerChoice == "PAPER"){
        alert("You Wins!\nYou: " + userChoice + "\tComputer: " + computerChoice)
        userScore = userScore + 1
    }
    else if(userChoice == computerChoice){
        alert("Tie!\nYou: " + userChoice + "\tComputer: " + computerChoice)
    }
    else{
        alert("Computer Wins!\nYou: " + userChoice + "\tComputer: " + computerChoice)
        computerScore = computerScore + 1
    }
}