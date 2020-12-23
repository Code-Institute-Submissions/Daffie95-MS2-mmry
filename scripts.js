// selecting the cards in the DOM from the .memory-card class
const cards = document.querySelectorAll('.memory-card');

let hasflippedCard = false
let primaryCard, secondaryCard;

function flipCard() {
    this.classList.toggle('flip')
    if (!hasflippedCard) {
        // first click (flip)
        hasflippedCard = true;
        primaryCard = this;
    } else {
        // second click (flip second card)
        hasFlippedCard = false;
        secondaryCard = this;

        //are cards matching?
        if (primaryCard.dataset.cardframe === secondaryCard.dataset.cardframe) {
            primaryCard.removeEventListener('click', flipCard)
            secondaryCard.removeEventListener('click', flipCard)
        }
        // are cards unmatched
        setTimeout(() => {
            primaryCard.classList.remove('flip');
            secondaryCard.classList.remove('flip');
            console.log('Cards do not match, flip back')
        }, 1500);

    }
}

cards.forEach(card => card.addEventListener('click', flipCard))