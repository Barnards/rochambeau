"use strict";

//display context change menu

//Display 'Play' Button
//begin 3 second countdown on "play press"
//count 1-3 while computer animation plays ro-sham-bo

//computerSelection

// let changeClass = 'hidden';

// document.getElementById("play-button").addEventListener( 'click', changeClass);



//game calculator







function visibilityToggle(
    targetDiv   // String
    ) {

    var divVis = document.getElementsByClassName(`${targetDiv}`)[0];

    if (divVis.style.visibility === "hidden") {
      divVis.style.visibility = "visible";
    } else {
      divVis.style.visibility = "hidden";
    }
}


function computerPlay (computerSelection) {  // get random number from 1-3
    computerSelection = Math.floor(Math.random() * (4 - 1) + 1); //1 == rock, 2 == paper, 3 == scissors
    return;
}

// function getClicked() {
//     document.addEventListener('keydown', (event) => {
//         const keyName = event.key;
//         if (keyName >= 1 && keyName <= 3) {
//             const playerSelection = keyName;
//             return playerSelection;
//         }else  {
//             alert('wrong key, 1 = Rock, 2 = Paper. 3 = Scissors')
//         }
//     })
// }

function getClicked() {
    document.addEventListener('keydown', (event) => {
        playerSelection = event.key;
        if (playerSelection < 1 || playerSelection > 3 || playerSelection == NaN ) {
            playerSelection = null;
            alert('wrong key, 1 = Rock, 2 = Paper. 3 = Scissors')
        }
    })
}



function getSelected(number){
     playerSelection = number;
}

function playerPlay(){
    if (getSelected() == true) {
        return getSelected();
    }else if (getClicked() == true){
        return getClicked();
    }
}





function computerSignAssign () {
    if (computerSelection === 1 ){
        const computerSign = 'Rock';
        return computerSign;
    }else if (computerSelection === 2 ){
        const computerSign = 'Paper';
        return computerSign;
    }else if (computerSelection ===3 ) {
        const computerSign = 'Scissors';
        return computerSign;
    }
}



function playerSignAssign () {
    if (playerPlay() === 1 ){
        const playerSign = 'Rock';
        return playerSign;
    }else if (playerPlay() === 2 ){
        const playerSign = 'Paper';
        return playerSign;
    }else if (playerPlay() ===3 ) {
        const playerSign = 'Scissors';
        return playerSign;
    }
}


function score(){
    playerPlay() - computerPlay();
    return;
}

function game() {
    if (score == 2 || score == -1){
        alert('You win! :' + playerSign + 'beats' + computerSign);
    }else if (score == -4 || score == 1){
        alert('You lose... :' + computerSign + 'beats' + playerSign);
    }else if (score == 0){
        alert('draw' + computerPlay + 'ties' + playerPlay);
    }
}

function beginPlay(){
    visibilityToggle("play-button");
    setTimeout(
        () => { 
            computerPlay();
        
        
        },
        3000,
        console.log(computerPlay()),

        setTimeout(
            () => { 
                visibilityToggle("player-choice"); 
            
            
            },
            2500,

            setTimeout(
                () => { 
                    visibilityToggle("player-choice");
                
                
                },
                500,
            ),

        ),
    );

}


let resultWindow = document.getElementsByClassName('result-window')[0];
let resultHeading = document.getElementsByClassName('result-heading')[0];
let resultSubheading =document.getElementsByClassName('result-subheading')[0];

//Function to get keyboard input

// document.addEventListener('keydown', (event) => {
//     const keyName = event.key;
//     if (keyName >= 1 && keyName <= 3) {
//         playerSelection = keyName;
//         console.log(playerSelection);
//     }else  {
//         resultHeading = 'wrong key';
//         resultSubheading = 'press 1-3 on go';
//         console.log(resultHeading,resultSubheading);
//     }


// })

//Function to get click input


//Function to output result string






// const choiceRock = document.querySelector('#choice_rock');
// const choicePaper = document.querySelector('#choice_paper');
// const choiceScissors = document.querySelector('#choice_scissors');

// choiceRock.onclick = () => {
//     playerSelection = 1;
//     console.log(playerSelection);
// }

// choicePaper.onclick = () => {
//     playerSelection = 2;
// }

// choiceScissors.onclick = () => {
//     playerSelection = 3;
// }

// console.log(playerSelection);






//give user 0.5sec window to 'keyup' number from 1-3 on keyboard

//compare computerPlay to userPlay

//display winner


















// document.getElementsByClassName("choice-one").onclick = function() {playerSelection = 1};
// document.getElementsByClassName("choice-two").onclick = function() {playerSelection = 2};
// document.getElementsByClassName("choice-three").onclick = function() {playerSelection = 3};



// class HomePage {

//     constructor(
//         element  // HTML DOM Element
//     ) {
//         this._element = element; //immutability, unchangeable object. _we should not touch

//         return;
//     }

//     get element() { return this._element; } //crash program if try to change value of _element




//     static build(
//         historicalContext  // PlayArea
//     ) {  // -> Self

//         const wrapper = document.createElement('div');
//         wrapper.classList.add('wrapper');

//         const innerWrapper = document.createElement('div');
//         innerWrapper.classList.add('inner-wrapper');
//         innerWrapper.classList.add('user-choice-japan');
//         innerWrapper.classList.add('user-choice-china');
//         innerWrapper.classList.add('user-choice-western');

//         wrapper.appendChild(innerWrapper);

//         const header = document.createElement('div');
//         header.classList.add('header');

//         innerWrapper.appendChild(header);

//         const headerH1 = document.createElement('h1');
//         const expandingList = document.createElement('div')
//         const computerPlaySign = document.createElement('computer-play-sign');

//         headerH1.innerText = pageTitle;
//         headerH3.innerText = 'Last edited: ' + apiDocument.lastEditedDate;

//         cardHeader.appendChild(headerH2);
//         cardHeader.appendChild(headerH3);

//         const cardP = document.createElement('p');

//         cardP.innerText = apiDocument.description;

//         card.appendChild(cardP);

//         const cardFooter = document.createElement('div');
//         cardFooter.classList.add('card-footer');

//         card.appendChild(cardFooter);

//         const footerH3 = document.createElement('h3');
//         const footerP = document.createElement('p');

//         // Author not yet available on RippleDocument
//         footerH3.innerText = 'George Washington'
//         footerP.innerText = 'Tags: ';

//         cardFooter.appendChild(footerH3);
//         cardFooter.appendChild(footerP);

//         // Continue building card...

//         card.addEventListener('click', () => {

//             //  const INNER = document.getElementsByClassName('inner')[0];
//              const cardClick = document.createElement('div');
//              cardClick.classList.add('card--fullscreen');

//              card.appendChild(cardClick);
//             //  INNER.appendChild(cardClick);



//             setTimeout(
//                 () => { window.location.assign('/document-editor')},
//                 200
//             );
//             return;
//         })

//         return new DocumentCard(card);

//     }

// }