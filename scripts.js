// selecting the cards in the DOM from the .memory-card class
const cards = document.querySelectorAll('.memory-card');

let flippedCard = false
let primaryCard, secondaryCard;

function flipCard() {
    this.classList.toggle('flip');
    if (!flippedCard) {
        // first click (flip)
        flippedCard = true;
        primaryCard = this;
    } else {
        // second click (flip second card)
        flippedCard = false;
        secondaryCard = this;
        testForMatch()
    };
};

function testForMatch(){
   //cards matching
   if(primaryCard.dataset.cardframe === secondaryCard.dataset.cardframe) {  
       lockedCards()     
} else {
    //cards unmatched
unmatchedCards()

};  
}
// cards unmatched function
function unmatchedCards(){
    setTimeout (() => {
        primaryCard.classList.remove('flip');
        secondaryCard.classList.remove('flip');
        console.log('Cards do not match, flip back');
    }, 1000)
}
// cards matched function
function lockedCards(){
    primaryCard.removeEventListener('click', flipCard);
    secondaryCard.removeEventListener('click', flipCard);  
}

cards.forEach(card => card.addEventListener('click', flipCard))