function rollTheDice(diceSides){
    let rollValue = 0;

    rollValue = Math.floor(Math.random() * (diceSides)) + 1;

    return rollValue;
}

function operateOnScore(operatorNumValue, newRoll){
    if(operatorNumValue === 1){
        userValue += newRoll;
        console.log("user score: " + userValue);
    }
    else if(operatorNumValue === 2){
        userValue -= newRoll;
        console.log("user score: " + userValue);
    }
    else{
        userValue *= newRoll;
        console.log("user score: " + userValue);
    }

    return userValue;
}

function setComputerStartValue(){
    let computerValue = Math.floor((Math.random() * 100) + 1);

    return computerValue;
}

function setUserStartValue(){
    let userValue = Math.floor((Math.random() * 20) + 1);

    return userValue;
}

function challengeAFriend(){
    turnsToPlay = 6;
    userValue = originalUserValue;
    document.getElementById("userScoreDiv").innerHTML = "";
    document.getElementById("userScoreDiv").innerHTML = userValue;
    document.getElementById("userInputInstructions").innerHTML = "";
    document.getElementById("userInputInstructions").innerHTML = "Please select your dice to roll from the list on the left:";
}

function letsPlayARound(playerRoll){
    document.getElementById("currentRollDiv").innerHTML = "";
    document.getElementById("currentRollDiv").innerHTML = playerRoll;
    console.log(playerRoll);
    // Allow user to decide what mathematical operator to use //
    let operatorChoice = prompt("You rolled "+ playerRoll +" please enter a number 1-3 to select your operator (1-Addition 2-Subtraction 3-Multiplication");
    operatorChoice = parseInt(operatorChoice);

 
    // Adjust score based upon desired operator //
    let updatedValue = operateOnScore(operatorChoice, playerRoll);

    document.getElementById("userScoreDiv").innerHTML = '';

    let userScoreToAdd =  document.createElement("userScoreToAdd");
    userScoreToAdd.innerHTML = updatedValue;
    document.getElementById("userScoreDiv").appendChild(userScoreToAdd);

    turnsToPlay --;

    if(turnsToPlay === 0){
        // Determine Game Results
        if(updatedValue < goalValue){
            let finalScorePercent = ((updatedValue/ goalValue) * 100);
            document.getElementById("userInputInstructions").innerHTML = "Your score was " + finalScorePercent + "% out of 100%!";
        }
        else if(updatedValue == goalValue){
            document.getElementById("userInputInstructions").innerHTML = "You got a perfect score!";
        }
        else{
            document.getElementById("userInputInstructions").innerHTML = "BUST! Better luck next time!";
        }
    }
}


// Initialize the Game
let turnsToPlay = 6;
let goalValue = setComputerStartValue();

document.getElementById("computerScoreDiv").innerHTML = goalValue;
console.log(goalValue);

let userValue = setUserStartValue();
let originalUserValue = userValue;

document.getElementById("userScoreDiv").innerHTML = userValue;
console.log(userValue);

document.getElementById("userInputInstructions").innerHTML = "Please select your dice to roll from the list on the left:";