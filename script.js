
////////////////////////////////////////////////////////////////////////////////
/////////////////////////                              /////////////////////////
///////////////////////// -----     Welcome     -----  /////////////////////////
/////////////////////////                              /////////////////////////
////////////////////////////////////////////////////////////////////////////////

// @Alchemi's Rock paper Scissors game

const PLANET2 = document.getElementsByClassName('planet-2')[0];
const PLANET1 = document.getElementsByClassName('planet-1')[0];
const FAR_BACKGROUND = document.getElementsByClassName('far-background')[0];
const BACKGROUND = document.getElementsByClassName('background')[0];
const MIDGROUND = document.getElementsByClassName('midground')[0];
const HOVER_ROCKS = document.getElementsByClassName('hover-rocks')[0];
const FOREGROUND = document.getElementsByClassName('foreground')[0];
const PLAYER = document.getElementsByClassName('player')[0];

const ELLIPSE1 = document.getElementsByClassName('ellipse1')[0];
const ELLIPSE2 = document.getElementsByClassName('ellipse2')[0];
const ELLIPSE3 = document.getElementsByClassName('ellipse3')[0];

let animationLastConsidered = 0;

function shouldAnimate(time) {
    if (time <= animationLastConsidered) { return false; }
    return true;
}

function setScrollVariable() {

    const rootHtmlElement = document.documentElement;

    const heightScrolled = rootHtmlElement.scrollTop / (
        rootHtmlElement.scrollHeight - window.innerHeight
    );

    return +heightScrolled.toFixed(4) * 100;
}

window.addEventListener(
    'scroll', 
    () => {
        hideOnScroll();
        console.log(scrollY)

        const scrollAmount = setScrollVariable();

        function slide(element, velocity) {
            const translateY = scrollAmount * velocity;

            requestAnimationFrame((time)=> {
                if (!shouldAnimate(time)) { return; }
                element.style.transform = `translateY(${translateY}px)`;
                return;
            })

        }

        slide(PLANET2, 12.5);
        slide(PLANET1, 12);
        slide(FAR_BACKGROUND, 10);
        slide(BACKGROUND, 8);
        slide(MIDGROUND, 6);
        slide(HOVER_ROCKS, 3.5);
        slide(FOREGROUND, 3);
        slide(PLAYER, 0);

        return;
    }
);

window.addEventListener(
    'resize', 
    () => {
        setScrollVariable();
        return;
    }
);

// Function to change titles on scroll
function titleCycle(){
    const title1 = document.getElementsByClassName(
        'rockpaperscissors-title'
    )[0];
    title1.classList.remove('active') 
    setTimeout(()=>{
        const rochambeauTitle = document.getElementsByClassName(
            'rochambeau-title'
        )[0];
        rochambeauTitle.classList.add('active')
    },1500)
    return;
}

// handler for events as soon as the user scrolls
function hideOnScroll() {
    document.getElementsByClassName('scroll')[0].classList.remove('active');
    titleCycle();
    return;
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
    return;
}

// get player choice from mouse
function getSelected(number){
     playerSelection = number;
}

// get player choice from keyboard..feature debug in progress (not implemented)
function getKey(playerSelection) {
    document.addEventListener('keydown', (event) => {
        playerSelection = event.key;
        if (
            playerSelection < 1 || 
            playerSelection > 3 || 
            playerSelection == NaN 
        ) {
            playerSelection = null;
            alert('wrong key, 1 = Rock, 2 = Paper. 3 = Scissors')
        }
    })
    return;
}

// resets button and decor visibility when game is over
function resetVisibility() {
    document.getElementsByClassName(
        'player-choice'
    )[0].style.visibility = 'hidden';
    document.getElementsByClassName(
        'play-button'
    )[0].style.visibility ='visible';
    document.getElementsByClassName(
        'spinner-box'
    )[0].style.visibility ='visible';
    ELLIPSE1.style.visibility ='hidden';
    ELLIPSE1.style.animationName ='none';
    ELLIPSE2.style.visibility ='hidden';
    ELLIPSE2.style.animationName ='none';
    ELLIPSE3.style.visibility ='hidden';
    ELLIPSE3.style.animationName ='none';
    return;
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
    return;
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
    return;
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
    return;
}


//visual cue for computer move (floats the rock sign objects up and down)
function rockHover(rock,paper,scissors) {

    const root = document.documentElement;

    if (rock == true) {

        root.style.setProperty('--rock-object-float', -200 + "px");

    }else if (paper == true) {
        root.style.setProperty('--paper-object-float', -200 + "px");
        
    }else if (scissors == true) {
        root.style.setProperty('--scissors-object-float', -200 + "px");
        
    }else{
        root.style.setProperty('--rock-object-float', 0 + "px");
        root.style.setProperty('--paper-object-float', 0 + "px");
        root.style.setProperty('--scissors-object-float', 0 + "px");
    }

    //  reset rock position after 5 seconds of inactivity
    if (rock || paper || scissors === true) {
        setTimeout(()=>{
            rockHover(false,false,false)
        },5000)
    }
    return;
}

//displays player's choice as a magic symbol
function playerMagic(rock,paper,scissors) {

    const root = document.documentElement;

    if (rock == true) {
        root.style.setProperty('--rock-magic-visible',1);

    }else if (paper == true) {
        root.style.setProperty('--paper-magic-visible',1);
    }else if (scissors == true) {
        root.style.setProperty('--scissors-magic-visible',1);
    }else{
        root.style.setProperty('--rock-magic-visible',0);
        root.style.setProperty('--paper-magic-visible',0);
        root.style.setProperty('--scissors-magic-visible',0);
    }

    //  reset magic visibility after 5 seconds of inactivity
    if (rock || paper || scissors === true) {
        setTimeout(()=>{
            playerMagic(false,false,false)
        },5000)
    }
    return;
}

//  beware, you're about to enter...

////////////////////////////////////////////////////////////////////////////////
/////////////////////////                              /////////////////////////
/////////////////////////   -----  Nested Hell  -----  /////////////////////////
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
    ELLIPSE1.style.animationName ='ellipse1';
    visibilityToggle("ellipse2");
    ELLIPSE2.style.animationName ='ellipse2';
    visibilityToggle("ellipse3");
    ELLIPSE3.style.animationName ='ellipse3';
    playerSelection = false;  // if the player fails to select
    setTimeout(() => {
        countDown('RO');
        setTimeout(() => {
            countDown('SHAM'); 
            setTimeout(() => {
                countDown('BEAU');
                visibilityToggle("player-choice"); // display buttons
                setTimeout(() => { 
                    visibilityToggle("player-choice"); //remove buttons after 1.2sec
                    ELLIPSE1.style.visibility ='hidden';
                    ELLIPSE1.style.animationName ='none';
                    ELLIPSE2.style.visibility ='hidden';
                    ELLIPSE2.style.animationName ='none';
                    ELLIPSE3.style.visibility ='hidden';
                    ELLIPSE3.style.animationName ='none'; 
                    setTimeout(()=>{
                        
                        //generate computer input
                        const computerSelection = Math.floor(
                            Math.random() * (4 - 1) + 1
                        );
                        
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
                                resultDisplay(
                                    'YOU LOSE', 
                                    'hesitation is defeat'
                                );
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

                        // compare computer and player inputs
                        const score = playerSelection - computerSelection;
        
                        //calculate the winner and explain decision
                        if (score == -4 || score == 1||score == -2){
                            resultDisplay(
                                'YOU WIN', 
                                playerSign + ' beats ' + computerSign
                            );
                            scoreCounter (1,0);  
                        }else if (score == 2 || score == -1){
                            resultDisplay(
                                'YOU LOSE...', 
                                computerSign + ' beats ' + playerSign
                            );
                            scoreCounter (0,1);
                        }else if (score == 0){
                            resultDisplay(
                                'DRAW', 
                                computerSign + ' ties ' + playerSign
                            );
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
    return;
}
