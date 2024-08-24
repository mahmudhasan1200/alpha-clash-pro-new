function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(){
    const element = document.getElementById('play-ground');
    element.classList.remove('hidden');
}