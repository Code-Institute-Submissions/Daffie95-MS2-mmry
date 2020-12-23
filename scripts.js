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

    //are cards matching?
    if(primaryCard.dataset.cardframe === secondaryCard.dataset.cardframe){
       primaryCard.removeEventListener('click', flipCard)
       secondaryCard.removeEventListener('click', flipCard)
    }
    // testing that eventListener is removed
    console.log('eventListener is removed')
}
}

cards.forEach(card => card.addEventListener('click', flipCard))