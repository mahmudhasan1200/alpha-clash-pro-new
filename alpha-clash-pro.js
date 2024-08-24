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
}