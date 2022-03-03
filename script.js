
////////////////////////////////////////////////////////////////////////////////
/////////////////////////                              /////////////////////////
///////////////////////// -----     Welcome     -----  /////////////////////////
/////////////////////////                              /////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Michael, AKA @Alchemi's Rock paper Scissors game

// works best on chrome and edge
// firefox a bit strange on subsequent page refreshes but otherwise ok
// safari doesn't display result text but otherwise fine



// Function to change titles on scroll
function titleCycle(){
    const title1 = document.getElementsByClassName('rockpaperscissors-title')[0];
    title1.classList.remove('active') 
        setTimeout(()=>{
            const rochambeauTitle = document.getElementsByClassName('rochambeau-title')[0];
            rochambeauTitle.classList.add('active')
        },1500)
}

// hadnler for events as soon as the user scrolls
function hideOnScroll() {
    if (document.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementsByClassName('scroll')[0].classList.add('active');
    } else {
        document.getElementsByClassName('scroll')[0].classList.remove('active');
        titleCycle();
    }
}


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

// get player choice from keyboard..feature debug in progress (not implemented)
function getKey(playerSelection) {
    document.addEventListener('keydown', (event) => {
        playerSelection = event.key;
        if (playerSelection < 1 || playerSelection > 3 || playerSelection == NaN ) {
            playerSelection = null;
            alert('wrong key, 1 = Rock, 2 = Paper. 3 = Scissors')
        }
    })
}

// resets button and decor visibility when game is over
function resetVisibility() {
    document.getElementsByClassName('player-choice')[0].style.visibility = 'hidden';
    document.getElementsByClassName('play-button')[0].style.visibility ='visible';
    document.getElementsByClassName('spinner-box')[0].style.visibility ='visible';
    document.getElementsByClassName('ellipse1')[0].style.visibility ='hidden';
    document.getElementsByClassName('ellipse1')[0].style.animationName ='none';
    document.getElementsByClassName('ellipse2')[0].style.visibility ='hidden';
    document.getElementsByClassName('ellipse2')[0].style.animationName ='none';
    document.getElementsByClassName('ellipse3')[0].style.visibility ='hidden';
    document.getElementsByClassName('ellipse3')[0].style.animationName ='none';
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
    const resultH5 = document.createElement('h5');
    resultH3.innerText = displayedResult;
    resultH5.innerText = explainedResult;
    resultDiv.appendChild(resultH3);

    setTimeout(()=>{
        resultDiv.appendChild(resultH5);
    },500)

    setTimeout(()=>{
        resultDiv.removeChild(resultH3)
        resultDiv.removeChild(resultH5)
    },4000)
}


// score tally
function scoreCounter (playerCount,computerCount) {
    
    
    const playerScoreH4 = document.getElementsByClassName('player-score')[0];
    const computerScoreH4 = document.getElementsByClassName('computer-score')[0];

    let playerTotal = +playerScoreH4.innerText;
    let computerTotal = +computerScoreH4.innerText;

    playerScoreH4.innerText = +playerTotal + +playerCount;
    computerScoreH4.innerText = +computerTotal + +computerCount;

    if (playerScoreH4.innerText == 5 && computerScoreH4.innerText == 5) {
        resultDisplay ('ROUND DRAW','play again');
        resetVisibility();
        clearTimeout();
        playerScoreH4.innerText = 0;
        computerScoreH4.innerText = 0;
    }else if (playerScoreH4.innerText == 5) {
        resultDisplay ('ROUND WIN',"victory");
        resetVisibility();
        clearTimeout();
        playerScoreH4.innerText = 0;
        computerScoreH4.innerText = 0;
    }else if (computerScoreH4.innerText == 5) {
        resultDisplay ('ROUND LOST','');
        resetVisibility();
        clearTimeout();
        playerScoreH4.innerText = 0;
        computerScoreH4.innerText = 0;
    }
}


//visual cue for computer move (floats the rock sign objects up and down)
function rockHover(rock,paper,scissors) {

    const root = document.documentElement;

    if (rock == true) {
        root.style.setProperty('--rock-object-float', 160 + "vh");

    }else if (paper == true) {
        root.style.setProperty('--paper-object-float', 160 + "vh");
        
    }else if (scissors == true) {
        root.style.setProperty('--scissors-object-float', 160 + "vh");
        
    }else{
        root.style.setProperty('--rock-object-float', 200 + "vh");
        root.style.setProperty('--paper-object-float', 200 + "vh");
        root.style.setProperty('--scissors-object-float', 200 + "vh");
        
    }

    //  reset rock position after 5 seconds of inactivity
    if (rock || paper || scissors === true) {
        setTimeout(()=>{
            rockHover(false,false,false)
        },5000)
    }
}

//stops whitespace from forming below parallax images
//only fix i could find for the translateZ margin the images created at the bottom
if (navigator.userAgent.search("Firefox") >= 0) {
    const wrapper = document.getElementsByClassName('wrapper')[0];
    window.onscroll = function () { wrapper.scrollTo(0, 90); };
} else { 
    window.onscroll = function () { window.scrollTo(0, 0); };  
}


//displays player's choice as a magic symbol
function playerMagic(rock,paper,scissors) {

    const root = document.documentElement;

    if (rock == true) {
        root.style.setProperty('--rock-magic-visible',1);

    }else if (paper == true) {
        root.style.setProperty('--paper-magic-visible',1);
        console.log(rock,paper,scissors)
    }else if (scissors == true) {
        root.style.setProperty('--scissors-magic-visible',1);
        console.log(rock,paper,scissors)
    }else{
        root.style.setProperty('--rock-magic-visible',0);
        root.style.setProperty('--paper-magic-visible',0);
        root.style.setProperty('--scissors-magic-visible',0);
        console.log(rock,paper,scissors)
    }

    //  reset magic visibility after 5 seconds of inactivity
    if (rock || paper || scissors === true) {
        setTimeout(()=>{
            playerMagic(false,false,false)
        },5000)
    }
}




//  beware, you're about to enter...

////////////////////////////////////////////////////////////////////////////////
/////////////////////////                              /////////////////////////
///////////////////////// -----  CALLBACK HELL  -----  /////////////////////////
/////////////////////////                              /////////////////////////
////////////////////////////////////////////////////////////////////////////////

// begin play when play button is clicked, 
function beginPlay(){
    rockHover(false,false,false);  
    playerMagic(false,false,false); 
    resetVisibility();
    visibilityToggle("play-button"); //hide play button
    visibilityToggle("spinner-box"); //hide spinner box
    visibilityToggle("ellipse1");    
    document.getElementsByClassName('ellipse1')[0].style.animationName ='ellipse1';
    visibilityToggle("ellipse2");
    document.getElementsByClassName('ellipse2')[0].style.animationName ='ellipse2';
    visibilityToggle("ellipse3");
    document.getElementsByClassName('ellipse3')[0].style.animationName ='ellipse3';
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
                visibilityToggle("player-choice"); // display buttons
                setTimeout(() => { 
                    visibilityToggle("player-choice"); //remove buttons after 1.2sec
                    document.getElementsByClassName('ellipse1')[0].style.visibility ='hidden';
                    document.getElementsByClassName('ellipse1')[0].style.animationName ='none';
                    document.getElementsByClassName('ellipse2')[0].style.visibility ='hidden';
                    document.getElementsByClassName('ellipse2')[0].style.animationName ='none';
                    document.getElementsByClassName('ellipse3')[0].style.visibility ='hidden';
                    document.getElementsByClassName('ellipse3')[0].style.animationName ='none'; 
                    setTimeout(()=>{
                        
                        //generate computer input
                        const computerSelection = Math.floor(Math.random() * (4 - 1) + 1);
                        
                            //create a string name out of computer input
                            if (computerSelection === 1 ){
                                computerSign = 'Rock';
                            }else if (computerSelection === 2 ){
                                computerSign = 'Paper';
                            }else if (computerSelection === 3 ) {
                                computerSign = 'Scissors';
                            }
                            //(floats the rock sign objects up and down)
                            if (computerSelection === 1 ){
                                rockHover(true,false,false);
                            }else if (computerSelection === 2 ){
                                rockHover(false,true,false);
                            }else if (computerSelection === 3 ) {
                                rockHover(false,false,true);
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
                                scoreCounter (0,1);
                                resetVisibility();
                                clearTimeout();
                                return;
                            }
                            //displays player's choice as a magic symbol
                            if (playerSelection === 1 ){
                                playerMagic(true,false,false);
                            }else if (playerSelection === 2 ){
                                playerMagic(false,true,false);
                            }else if (playerSelection === 3 ) {
                                playerMagic(false,false,true);
                            }

                            console.log("you threw: " ,playerSign);
                        // compare computer and player inputs
                        const score = playerSelection - computerSelection;
                        console.log(score);
        
                        //calculate the winner and explain decision
                        if (score == -4 || score == 1||score == -2){
                            console.log('You win! :' + playerSign + ' beats ' + computerSign);
                            resultDisplay('YOU WIN', playerSign + ' beats ' + computerSign);
                            scoreCounter (1,0);  
                        }else if (score == 2 || score == -1){
                            console.log('You lose... :' + computerSign + ' beats ' + playerSign);
                            resultDisplay('YOU LOSE...' , computerSign + ' beats ' + playerSign);
                            scoreCounter (0,1);
                        }else if (score == 0){
                            console.log('Draw :' + computerSign + ' ties ' + playerSign);
                            resultDisplay('DRAW', computerSign + ' ties ' + playerSign);
                            scoreCounter (1,1);
                        }
                        setTimeout(()=>{
                            resetVisibility();  //reset game
                            clearTimeout();    
                        },3000)
                    },800) //play button reappears
                },1200) // play begins, time limit for player choice
            },800) //BEAU!, player choice appears
        },800) //SHAM
    },200) //RO
}
