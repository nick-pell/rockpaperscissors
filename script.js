function getComputerChoice(){
    const possibleChoices = ["Rock","Paper","Scissors"];
    let choice;
    let numberChoice = Math.floor(Math.random() * 3);
    choice = possibleChoices[numberChoice];
    return choice;

}

function playRound(playerSelection){

    if(playerWins == 5 || computerWins == 5){

        if(playerWins == 5){
            w_message.textContent = "Player wins!";
            w_text.appendChild(w_message);
        }else{
            w_message.textContent = "Computer wins!";
            w_text.appendChild(w_message);

        }
        return;

    }


    computerSelection = getComputerChoice();
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
           computerWins++;

           c_message.textContent = `Computer score: ${computerWins}`;
           c_text.appendChild(c_message);
       }

    // user win conditions
    if((playerSelection == "rock" && computerSelection == "scissors") || 
      (playerSelection == "paper"&& computerSelection == "rock" )  ||
      (playerSelection == "scissors" && computerSelection == "paper")){
           result = "user";
           playerWins++;

           p_message.textContent = `Player score: ${playerWins}`;
           p_text.appendChild(p_message);
       }
       return result;
}

function getPlayerChoice(e){
    let choice = e.target.id;
    playRound(choice);
    
}


let playerWins = 0;
let computerWins = 0;

const c_text = document.querySelector('.game-results');
const c_message = document.createElement('div');
c_message.classList.add("computer-score");

const p_text = document.querySelector('.game-results');
const p_message = document.createElement('div');
p_message.classList.add("player-score");


const w_text = document.querySelector('.game-results');
const w_message = document.createElement('div');
w_message.classList.add("winner");




const rock = document.querySelector('#rock');
rock.addEventListener('click',getPlayerChoice);

const paper = document.querySelector('#paper');
paper.addEventListener('click',getPlayerChoice);


const scissors = document.querySelector('#scissors');
scissors.addEventListener('click',getPlayerChoice);
    







//game();
