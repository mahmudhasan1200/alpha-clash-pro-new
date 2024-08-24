function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function showElementById(){
    const element = document.getElementById('play-ground');
    element.classList.remove('hidden');
}

function getARandomAlphabet(){
    // get or create an alphabet Array 
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);
    // get a random alphabet 
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    

    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;
}