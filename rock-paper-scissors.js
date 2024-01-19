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

function rpsRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice(); 
    if (playerSelection === computerSelection) {

        return `Tie game`;  

    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){

        return `Winner rock beats scissors`;

    } else if (playerSelection === 'paper' && computerSelection === 'rock'){

        return `Winner paper beats rock`;

    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){

            return `Winner scissors beats paper`;
    } else {

        return `Loser ${computerSelection} beats ${playerSelection}`;
    }
}

console.log(rpsRound('rock'));


