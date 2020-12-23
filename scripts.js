// selecting the cards in the DOM from the .memory-card class
const cards = document.querySelectorAll('.memory-card');

let hasflippedCard = false
let primaryCard, secondaryCard;

function flipCard(){
this.classList.toggle('flip')
if(!hasflippedCard){
    // first click (flip)
    hasflippedCard = true;
    primaryCard = this;
} else {
    // second click (flip second card)
    hasFlippedCard = false;
    secondaryCard = this;

    // testing match trough dataset
    console.log(primaryCard.dataset.cardframe)
    console.log(secondaryCard.dataset.cardframe)
}
}

cards.forEach(card => card.addEventListener('click', flipCard))