// function play(){
//     // step-1 hide the homescreen 
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // step-2 show the play ground 
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function handleKeyBoardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet); 

    // check mached or not 
    if(playerPressed === expectedAlphabet) {
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // update score 
        // 1. get current score 
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // // 2. Increase the score by 1 
        // const newScore = currentScore + 1 ;

        // //  3. Show the current score 
        // currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet);
        continueGaming();
    } else {
        const currentLife = getTextElementValueById('life-score');
        const updatedLife = currentLife - 1;
        setTextElementValueById('life-score', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }

        // 1.get the current life 
        // const currentLifeElement = document.getElementById('life-score');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const newLife = currentLife - 1;

        // currentLifeElement.innerText = newLife;

    }
}
document.addEventListener('keyup', handleKeyBoardKeyUpEvent);

function continueGaming(){
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet:', alphabet);

    // Randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set back-ground color 
    setBackgroundColorById(alphabet);
}

function play(){
    // hide everything shoe only the play ground 
    hideElementById('home-screen');
    showElementById('play-ground');
    hideElementById('final-score')

    // Reset score and life 
    setTextElementValueById('life-score', 5);
    setTextElementValueById('current-score', 0);
    continueGaming();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // get last score 
   const lastScore = getTextElementValueById('current-score');
   console.log(lastScore);
   setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}