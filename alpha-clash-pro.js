// function play(){
//     // step-1 hide the homescreen 
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // step-2 show the play ground 
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGaming()
}

function continueGaming(){
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet:', alphabet);

    // Randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set back-ground color 
    setBackgroundColorById(alphabet);
}