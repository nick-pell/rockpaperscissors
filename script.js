function getComputerChoice(){
    let choice;
    let numberChoice = Math.floor(Math.random() * 3);
    if(numberChoice == 0){
        choice = "Rock";
        console.log("Computer chooses Rock");
    }else if(numberChoice == 1){
        choice = "Paper";
        console.log("Computer chooses Paper");
    }else{
        choice = "Scissors";
        console.log("Computer chooses Scissors");
    }
    return choice;

}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let result;
    // tie
    if (playerSelection == computerSelection){
        result = "tie";
    }

    // computer win conditions
    if((computerSelection == "rock" && playerSelection == "scissors") || 
       (computerSelection == "paper"&& playerSelection == "rock" )  ||
       (computerSelection == "scissors" && playerSelection == "paper")){
           result = "computer";
       }

    // user win conditions
    if((playerSelection == "rock" && computerSelection == "scissors") || 
      (playerSelection == "paper"&& computerSelection == "rock" )  ||
      (playerSelection == "scissors" && computerSelection == "paper")){
           result = "user";
       }
       return result;
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Enter your choice");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection,computerSelection);

        if(result == "computer"){
            console.log(computerSelection + " beats " + playerSelection);
            console.log("Computer wins this round");
            computerWins++;
        }else if (result == "user"){
            console.log(playerSelection + " beats " + computerSelection);
            console.log("User wins this round");
            playerWins++;
        }else{
            console.log(playerSelection + " ties with " + computerSelection);
            console.log("It's a tie");
        }
    }
    if (playerWins > computerWins){
        console.log("User wins the game");
    }else if(playerWins < computerWins){
        console.log("Computer wins the game");
    }else{
        console.log("User and computer tied the game");
    }
}

game();
