const choiceArray = ["rock", "paper", "scissor"];

function ComputerChoice(array){
    const randomIndex = (Math.floor(Math.random()*3));
    return array[randomIndex];
}

//const randomElement = ComputerChoice(choiceArray);

function rockpaperscissor(playerSelection, computerSelection){
    console.log("Players choice was : ", playerSelection);
    if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("Player chose : " + playerSelection + " Computer chose : " + computerSelection + "! paper beats rock!")
    }
    else if (playerSelection === "rock" && computerSelection === "scissor"){
        console.log("Player chose : " + playerSelection + " Computer chose : " + computerSelection + "! rock beats scissor!")
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("Player chose : " + playerSelection + " Computer chose : " + computerSelection + "! Paper beats Rock!")
    }
    else if (playerSelection === "paper" && computerSelection === "scissor"){
        console.log("Player chose : " + playerSelection + " Computer chose : " + computerSelection + "! scissor beats paper!")
    }
    else if (playerSelection === "scissor" && computerSelection === "rock"){
        console.log("Player chose : " + playerSelection + " Computer chose : " + computerSelection + "! Rock beats scissor!")
    }
    else if (playerSelection === "scissor" && computerSelection === "paper"){
        console.log("Player chose : " + playerSelection + " Computer chose : " + computerSelection + "! scissor beats rock!")
    }
    else{
        console.log("Tie Game, Go again!")
    }
}

for (let i = 0; i<= 4; i++){
    //computerSelection = randomElement;
    computerSelection = ComputerChoice(choiceArray);
    console.log(" Computers random choice is: ", computerSelection);
    promptPlayer = prompt("rock, paper, or scissor?")
    playerSelection = promptPlayer.toLowerCase();   
    rockpaperscissor(playerSelection, computerSelection)
}



