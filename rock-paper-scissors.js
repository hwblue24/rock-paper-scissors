function getComputerChoice() {
    let number = Math.floor((Math.random()*3)+1);

    if (number === 1) {
        return ('scissors')
    } else if (number ===2) {
        return ('paper')
    } else { 
        return ('rock')
    }

}

function singleRound(playerSelection, computerSelection) {
    choice = prompt ("Pick Rock,Paper or Scissors");
    playerSelection = choice.toLowerCase();
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        singleRound(); 
    }
    let winconditions = playerSelection+computerSelection;   
    switch (winconditions) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            alert (`Winner! ${playerSelection} beats ${computerSelection}`);
            break 
        default: 
            alert(`Loser! ${computerSelection} beats ${playerSelection}`);
            break 
    }
}
   

singleRound();