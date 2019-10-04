const testimony = document.getElementById('alert');
const divMess = document.getElementById('messAlert');
const audio = new Audio('halloween.mp3');
audio.play();
/*

testimony.addEventListener('click',() => {
    divMess.style.display = "block"
});

*/

function displayAlert() {
    divMess.style.display = "block"
}

const closed = document.getElementById('close');
closed.addEventListener('click',() =>{
    audio.pause();
    divMess.style.display= "none";
});








