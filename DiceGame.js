function rollTheDice(diceSides){
    let rollValue = 0;

    rollValue = Math.floor(Math.random() * (diceSides)) + 1;

    return rollValue;
}

function setComputerDieValue(){
    let computerValue = Math.floor((Math.random() * 100) + 1);

    return computerValue;
}

function letsPlayAGame(playerScore, valueToCheckAgainst){
    let ableToRoll = 6;

    while(ableToRoll !== 0){
        let validOperatorSelection = false;

        // Get user input for dice sizes selection and roll //
        let newDiceChoice = prompt("What size dice would you like to roll? (Please enter a number 1-6 from the list on your left)");
        newDiceChoice = parseInt(newDiceChoice);
        let newDiceRoll = rollTheDice(diceChoices[newDiceChoice - 1]);

        console.log(newDiceRoll);

        // Allow user to decide what mathematical operator to use //
        let operatorChoice = prompt("How would you like to operate upon the orginal number? (Please enter a number 1-3 from your left)");
        operatorChoice = parseInt(operatorChoice);

        while(validOperatorSelection === false){
            if(operatorChoice === 1){
                playerScore += newDiceRoll;
                console.log("user score: " + playerScore);
                validOperatorSelection = true;
            }
            else if(operatorChoice === 2){
                playerScore -= newDiceRoll;
                console.log("user score: " + playerScore);
                validOperatorSelection = true;
            }
            else if(operatorChoice === 3){
                playerScore *= newDiceRoll;
                console.log("user score: " + playerScore);
                validOperatorSelection = true;
            }
            else{
                operatorChoice = prompt("Oops, looks like that's not a valid operator! Pleaes make a valid selection of how would you like to operate upon the orginal number? (Please enter a number 1-3 from your left)");
                operatorChoice = parseInt(operatorChoice);
            }
        }
        document.getElementById("userScoreDiv").innerHTML = '';

        let userScoreToAdd =  document.createElement("userScoreToAdd");
        userScoreToAdd.innerHTML = playerScore;
        document.getElementById("userScoreDiv").appendChild(userScoreToAdd);

        ableToRoll -= 1;
    }

    if(playerScore <= valueToCheckAgainst){
        let finalScorePercent = ((playerScore / valueToCheckAgainst) * 100);
        alert("Your score was " + finalScorePercent + "% out of 100%!");
    }
    else{
        alert("BUST! Better luck next time!");
    }

}


let diceChoices = [4, 6, 8, 10, 12, 20];
let originalUserInput = prompt("Select a dice to roll for your starting value (Please enter a number 1-6 from the list on your left):");
let goalValue = setComputerDieValue();
goalValue = parseInt(goalValue);

console.log(goalValue);

document.getElementById("computerScoreDiv").innerHTML = goalValue;


originalUserInput = parseInt(originalUserInput);

let originalRoll = rollTheDice(diceChoices[originalUserInput-1]);
console.log("original roll is: " + originalRoll);



document.getElementById("userScoreDiv").innerHTML = originalRoll;
letsPlayAGame(originalRoll, goalValue);