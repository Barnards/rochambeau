
// switch button visibility to the opposite of its current state
function visibilityToggle(
    targetDiv   // String
    ) {

    var divVis = document.getElementsByClassName(targetDiv, '')[0];

    if (divVis.style.visibility === "hidden") {
      divVis.style.visibility = "visible";
    } else {
      divVis.style.visibility = "hidden";
    }
}

// get player choice from mouse
function getSelected(number){
     playerSelection = number;
}

// get player choice from keyboard
function getKey(playerSelection) {
    document.addEventListener('keydown', (event) => {
        playerSelection = event.key;
        if (playerSelection < 1 || playerSelection > 3 || playerSelection == NaN ) {
            playerSelection = null;
            alert('wrong key, 1 = Rock, 2 = Paper. 3 = Scissors')
        }
    })
}

// resets button visibility when game is over
function resetVisibility() {
    document.getElementsByClassName('player-choice')[0].style.visibility = 'hidden';
    document.getElementsByClassName('play-button')[0].style.visibility ='visible';
}


//creates a visual countdown for game start, placed underneath play button
function countDown (currentCount) {
    const countDown = document.getElementsByClassName('countdown')[0];

    const countDownH2 = document.createElement('h2');
    countDownH2.innerText = currentCount;
    countDown.appendChild(countDownH2);
    setTimeout(()=>{
        countDown.removeChild(countDownH2)
    },500)
}


// create two pieces of text that appear in the middle of the screen when called
// the second text describes the first, and has a slight delay for visual effect
function resultDisplay (displayedResult,explainedResult) {
    const resultDiv = document.getElementsByClassName('result')[0];

    const resultH3 = document.createElement('h3');
    const resultH4 = document.createElement('h4');
    resultH3.innerText = displayedResult;
    resultH4.innerText = explainedResult;
    resultDiv.appendChild(resultH3);

    setTimeout(()=>{
        resultDiv.appendChild(resultH4);
    },500)

    setTimeout(()=>{
        resultDiv.removeChild(resultH3)
        resultDiv.removeChild(resultH4)
    },4000)
}

//  beware, you're about to enter...

////////////////////////////////////////////////////////////////////////////////
/////////////////////////                              /////////////////////////
///////////////////////// -----  CALLBACK HELL  -----  /////////////////////////
/////////////////////////                              /////////////////////////
////////////////////////////////////////////////////////////////////////////////

// begin play when play button is clicked, 
function beginPlay(){
    resetVisibility();
    // hide the play button on click, and give a countdown for player and computer 
    visibilityToggle("play-button"); 
    playerSelection = false;  // if the player fails to select
    setTimeout(() => {
        console.log('2');
        countDown('RO');
        setTimeout(() => {
            console.log('1');   // countdown
            countDown('SHAM'); 
            setTimeout(() => {
                console.log('throw!')
                countDown('BEAU');
                visibilityToggle("player-choice");   // display buttons
                setTimeout(() => { 
                    visibilityToggle("player-choice");  //remove buttons 
                    setTimeout(()=>{
                        //generate computer input
                        const computerSelection = Math.floor(Math.random() * (4 - 1) + 1);
                        // console.log(computerSelection);
                        
                            //create a string name out of computer input
                            if (computerSelection === 1 ){
                                computerSign = 'Rock';
        
                            }else if (computerSelection === 2 ){
                                computerSign = 'Paper';
                                
                            }else if (computerSelection === 3 ) {
                                computerSign = 'Scissors';
                            }
                            console.log("Computer threw: " ,computerSign);

                        //get player's click/touch input
                        getSelected(playerSelection);
        
                            //create a string name out of player input
                            if (playerSelection === 1 ){
                                playerSign = 'Rock';
                            
                            }else if (playerSelection === 2 ){
                                playerSign = 'Paper';
                                
                            }else if (playerSelection === 3 ) {
                                playerSign = 'Scissors';
                            }else if (playerSelection  === false) {
                                console.log('You lose','hesitation is defeat');
                                resultDisplay('YOU LOSE', 'hesitation is defeat');
                                resetVisibility();
                                clearTimeout();
                                return;
                            }

                            console.log("you threw: " ,playerSign);
                        // compare computer and player inputs
                        const score = playerSelection - computerSelection;
                        console.log(score);
        
                        //calculate the winner and explain decision
                        if (score == -4 || score == 1||score == -2){
                            console.log('You win! :' + playerSign + ' beats ' + computerSign);
                            resultDisplay('YOU WIN', computerSign + ' beats ' + playerSign);
                        }else if (score == 2 || score == -1){
                            console.log('You lose... :' + computerSign + ' beats ' + playerSign);
                            resultDisplay('YOU LOSE...' , computerSign + ' beats ' + playerSign);
                        }else if (score == 0){
                            console.log('Draw :' + computerSign + ' ties ' + playerSign);
                            resultDisplay('DRAW', computerSign + ' ties ' + playerSign);
                        }
                        setTimeout(()=>{
                            resetVisibility();  //reset game
                            clearTimeout();    
                        },1000)
                    },800) //play button reappears
                },500) // play begins, time limit for player choice
            },800) //BEAU!, player choice appears
        },800) //SHAM
    },200) //RO
}
