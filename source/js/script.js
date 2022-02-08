
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



// begin play when play button is clicked
function beginPlay(){

    // hide the play button on click, and give a countdown for player and computer 
    visibilityToggle("play-button");
    setTimeout(
        () => { 
            
        
        },
        3000,
        //player and computer move, display button options for player
        visibilityToggle("player-choice"), 
        setTimeout(
            () => { 
                
                //generate computer input
                const computerSelection = Math.floor(Math.random() * (4 - 1) + 1);
                console.log(computerSelection);

                    //create a string name out of computer input
                    if (computerSelection === 1 ){
                        computerSign = 'Rock';

                    }else if (computerSelection === 2 ){
                        computerSign = 'Paper';
                        
                    }else if (computerSelection ===3 ) {
                        computerSign = 'Scissors';
                    }

                //get player's click/touch input
                
                getSelected(playerSelection);
                console.log(playerSelection);

                    //create a string name out of player input
                    if (playerSelection === 1 ){
                        playerSign = 'Rock';
                    
                    }else if (playerSelection === 2 ){
                        playerSign = 'Paper';
                        
                    }else if (playerSelection === 3 ) {
                        playerSign = 'Scissors';
                    }
                
                // compare computer and player inputs
                const score = playerSelection - computerSelection;
                console.log(score);

                //calculate the winner and explain decision
                if (score == 2 || score == -1){
                    console.log('You win! :' + playerSign + ' beats ' + computerSign);
                }else if (score == -4 || score == 1){
                    console.log('You lose... :' + computerSign + ' beats ' + playerSign);
                }else if (score == 0){
                    console.log('Draw :' + computerSign + ' ties ' + playerSign);
                }
            
            
            },
            2500,
            //remove player button choice visibility
            visibilityToggle("player-choice"),
            setTimeout(
                () => { 
                    visibilityToggle("player-choice");
                    
                
                },
                800,
            ),
        ),
    );

}