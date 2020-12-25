// selecting the cards in the DOM from the .memory-card class
const cards = document.querySelectorAll(".memory-card");

let flippedCard = false;
let primaryCard, secondaryCard;

function flipCard() {
  this.classList.toggle("flip");
  if (!flippedCard) {
    // first click (flip)
    flippedCard = true;
    primaryCard = this;
   } else {
     flippedCard = true;
     secondaryCard = this;
   }
   testForMatch();
   }

function testForMatch() {
  //cards matching
  if (primaryCard.dataset.cardframe ===
     secondaryCard.dataset.cardframe) {
       // cards matched function
      primaryCard.removeEventListener('click', flipCard);
      secondaryCard.removeEventListener('click', flipCard);
     } else {
       // cards unmatched function with timer
      setTimeout(() => {
        primaryCard.classList.remove('flip');
        secondaryCard.classList.remove('flip');
    }, 1200);
  }
}








cards.forEach((card) => card.addEventListener("click", flipCard));
