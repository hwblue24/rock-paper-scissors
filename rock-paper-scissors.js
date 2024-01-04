function getComputerChoice() {
    let number = Math.floor((Math.random()*3)+1);

    if (number ==1) {
        return ('scissors')
    } else if (number ==2) {
        return ('paper')
    } else { 
        return ('rock')
    }

}

function singleRound(playerSelection, computerSelection){
    playerSelection = prompt ("Pick Rock,Paper or Scissors","")
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    console.log(computerSelection);


}

singleRound();

    