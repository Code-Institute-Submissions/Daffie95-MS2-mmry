// selecting the cards in the DOM from the .memory-card class
const cards = document.querySelectorAll('.memory-card');

let flippedCard = false
let primaryCard, secondaryCard;

function flipCard(){
    // first click adds flip, second click removes it.
this.classList.toggle('flip')
if(!flippedCard){
    flippedCard = true;
    primaryCard = this;
    console.log(flippedCard, primaryCard) // testing selection of elements in the function
}
}

cards.forEach(card => card.addEventListener('click', flipCard))