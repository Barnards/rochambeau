
let resultHeading = document.getElementsByClassName('result-heading')[0];
let resultSubheading =document.getElementsByClassName('result-subheading')[0];

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

function getSelected(number){
     playerSelection = number;
}

function getKey(playerSelection) {
    document.addEventListener('keydown', (event) => {
        playerSelection = event.key;
        if (playerSelection < 1 || playerSelection > 3 || playerSelection == NaN ) {
            playerSelection = null;
            alert('wrong key, 1 = Rock, 2 = Paper. 3 = Scissors')
        }
    })
}

function resetVisibility() {
    document.getElementsByClassName('player-choice')[0].style.visibility = 'hidden';
    document.getElementsByClassName('play-button')[0].style.visibility ='visible';
}

function countDown (currentCount) {
    const countDown = document.getElementsByClassName('countdown')[0];

    const countDownH2 = document.createElement('h2');
    countDownH2.innerText = currentCount;
    countDown.appendChild(countDownH2);
    setTimeout(()=>{
        countDown.removeChild(countDownH2)
    },500)
}


// begin play when play button is clicked, -----enter callback hell-----
function beginPlay(){
    resetVisibility();
    // hide the play button on click, and give a countdown for player and computer 
    visibilityToggle("play-button"); 
    setTimeout(() => {
        console.log('2');
        countDown('RO');
        setTimeout(() => {
            countDown('');
            console.log('1');
            countDown('SHAM');
            setTimeout(() => {
                countDown('');
                console.log('throw!')
                countDown('BO');
                visibilityToggle("player-choice");
                setTimeout(() => { 
                    visibilityToggle("player-choice");
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
                        // console.log(playerSelection);
        
                            //create a string name out of player input
                            if (playerSelection === 1 ){
                                playerSign = 'Rock';
                            
                            }else if (playerSelection === 2 ){
                                playerSign = 'Paper';
                                
                            }else if (playerSelection === 3 ) {
                                playerSign = 'Scissors';
                            }
                            console.log("you threw: " ,playerSign);
                        // compare computer and player inputs
                        const score = playerSelection - computerSelection;
                        console.log(score);
        
                        //calculate the winner and explain decision
                        if (score == -4 || score == 1||score == -2){
                            console.log('You win! :' + playerSign + ' beats ' + computerSign);
                        }else if (score == 2 || score == -1){
                            console.log('You lose... :' + computerSign + ' beats ' + playerSign);
                        }else if (score == 0){
                            console.log('Draw :' + computerSign + ' ties ' + playerSign);
                        }
                        setTimeout(()=>{
                            resetVisibility();
                            clearTimeout();
                        },1000)
                    },800) //play button reappears
                },500) // play begins, time limit for player choice
            },800) //BO!, player choice appears
        },800) //SHAM
    },200) //RO
}