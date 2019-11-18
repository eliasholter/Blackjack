// Initialize the Game //
let turnsToPlay = 6;
let rollValue = 0;
let operatorType = 0;
let ableToRoll = true;
let ableToOperate = false;
let gameOver = false;
let goalValue = setComputerStartValue();

document.getElementById("computerScoreDiv").innerHTML = goalValue;

let userValue = setUserStartValue();
let originalUserValue = userValue;

document.getElementById("userScoreDiv").innerHTML = userValue;

document.getElementById("userInputInstructions").innerHTML = "Please select your dice to roll from the list on the left:";



// Functions //
function rollTheDice(diceSides){

    if(ableToRoll === true && gameOver === false){
        rollValue = Math.floor(Math.random() * (diceSides)) + 1;
        ableToRoll = false;
        ableToOperate = true;

        document.getElementById("currentRollDiv").innerHTML = "";
        document.getElementById("currentRollDiv").innerHTML = rollValue;
        document.getElementById("rollsRemainingDiv").innerHTML = "";
        document.getElementById("rollsRemainingDiv").innerHTML = turnsToPlay - 1;
        document.getElementById("userInputInstructions").innerHTML = "";
        document.getElementById("userInputInstructions").innerHTML = "Please select your operator to use on your score from the list in the center:";
    }
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
    gameOver = false;
    userValue = originalUserValue;
    document.getElementById("currentRollDiv").innerHTML = "";    
    document.getElementById("rollsRemainingDiv").innerHTML = "";
    document.getElementById("userScoreDiv").innerHTML = "";
    document.getElementById("userScoreDiv").innerHTML = userValue;
    document.getElementById("userInputInstructions").innerHTML = "";
    document.getElementById("userInputInstructions").innerHTML = "Please select your dice to roll from the list on the left:";
}

function letsPlayARound(userRoll, operatorNumValue){

    if(ableToOperate === true && gameOver === false){
        operatorNumValue = parseInt(operatorNumValue);
        
        // Update current score based upon user operation selection //
        if(operatorNumValue === 1){
            userValue += userRoll;
        }
        else if(operatorNumValue === 2){
            userValue -= userRoll;
        }
        else{
            userValue *= userRoll;
        }

        let updatedValue = userValue;

        document.getElementById("userScoreDiv").innerHTML = '';

        // Write new score to display area //
        let userScoreToAdd =  document.createElement("userScoreToAdd");
        userScoreToAdd.innerHTML = updatedValue;
        document.getElementById("userScoreDiv").appendChild(userScoreToAdd);
        document.getElementById("userInputInstructions").innerHTML = "";
        document.getElementById("userInputInstructions").innerHTML = "Please select your dice to roll from the list on the left:";

        ableToOperate = false;
        ableToRoll = true;
        turnsToPlay --;

        if(turnsToPlay === 0){
            // Determine Game Results
            if(updatedValue < goalValue){
                let finalScorePercent = ((updatedValue/ goalValue) * 100);
                document.getElementById("userInputInstructions").innerHTML = "Your score was " + finalScorePercent + "% out of 100%!";
                gameOver = true;
            }
            else if(updatedValue == goalValue){
                document.getElementById("userInputInstructions").innerHTML = "You got a perfect score!";
                gameOver = true;
            }
            else{
                document.getElementById("userInputInstructions").innerHTML = "BUST! Better luck next time!";
                gameOver = true;
            }
        }
    }
}


