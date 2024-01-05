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

function singleRound() {
    let choice = prompt ("Pick Rock, Paper or Scissors");
    let playerSelection = choice.toLowerCase();
    const computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection) {
        singleRound(); 
    }
    let winconditions = playerSelection+computerSelection;   
    switch (winconditions) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            return true; //(`Winner! ${playerSelection} beats ${computerSelection}`);
        default: 
            return false;//(`Loser! ${computerSelection} beats ${playerSelection}`);
    }
}

function game() {
    let hscore = 0; 
    let pcscore = 0;  
    let round = 0; 
    let x = singleRound();
    if (x === true ){
        hscore+=1; 
        round+=1; 
        alert (`Your score, ${hscore} end of round ${round}`); 
    }else { 
        pcscore+=1;
        round+=1; 
        alert (`The pc score, ${pcscore} end of round ${round}`);
    } 
    let y = singleRound();
    if (y === true ){
        hscore+=1; 
        round+=1; 
        alert (`Your score, ${hscore} end of round ${round}`); 
    }else { 
        pcscore+=1;
        round+=1; 
        alert (`The pc score, ${pcscore} end of round ${round}`);
    } 

    let z = singleRound();
    if (z === true ){
        hscore+=1; 
        round+=1; 
        alert (`Your score, ${hscore} end of round ${round}`); 
    }else { 
        pcscore+=1;
        round+=1; 
        alert (`The pc score, ${pcscore} end of round ${round}`);
    } 
    
    if (hscore>pcscore) {
        return `You won, you scored ${hscore} points and the pc scored ${pcscore} point`; 
    }else {
        return `You lost, the pc scored ${pcscore} and you scored ${hscore} point`;
    }


    
}