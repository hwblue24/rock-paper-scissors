function getComputerChoice() {
    let number = Math.floor((Math.random()*3)+1);

    if (number === 1) {
        return 'scissors';
    } else if (number ===2) {
        return 'paper';
    } else { 
        return 'rock';
    }

}

function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.target.id;
    computerSelection = getComputerChoice(); 
    if (playerSelection === computerSelection) {

        console.log(`Tie game`);  

    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){

        console.log(`Winner rock beats scissors`);

    } else if (playerSelection === 'paper' && computerSelection === 'rock'){

        console.log(`Winner paper beats rock`);

    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){

        console.log (`Winner scissors beats paper`);
    } else {

        console.log (`Loser ${computerSelection} beats ${playerSelection}`);
    }
}


const rock = document.querySelector('#rock');   
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener("click", playRound); 
paper.addEventListener("click", playRound); 
scissors.addEventListener("click", playRound); 







