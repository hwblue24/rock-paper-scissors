function getComputerChoice() {
    let number = Math.floor((Math.random()*3)+1);

    if (number ==1) {
        console.log('scissors')
    } else if (number ==2) {
        console.log('paper')
    } else { 
        console.log('rock')
    }

}


getComputerChoice();
    