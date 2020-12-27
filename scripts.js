// selecting the cards in the DOM from the .memory-card class
const cards = document.querySelectorAll(".memory-card");

//  declaring that no cards have been clicked
let flippedCard = false;
let primaryCard, secondaryCard;

// function to flip cards
function flipCard() {
  this.classList.toggle("flip");
  if (!flippedCard) {
    // first click (flip)
    flippedCard = true;
    primaryCard = this;
   
  return;
  } 
   
   
   
    //  second click (flip)
     flippedCard = true;
     secondaryCard = this;

     matchCheck();
  }



function matchCheck() {
  let itsMatch = primaryCard.dataset.cardframe === 
  secondaryCard.dataset.cardframe;

  itsMatch ? disableMatchedCards() : flipUnmatchedCards();
}
 

function disableMatchedCards(){
  primaryCard.removeEventListener('click', flipCard);
  secondaryCard.removeEventListener('click', flipCard);
}

function flipUnmatchedCards() {
  setTimeout(() => {
    primaryCard.classList.remove('flip');
    secondaryCard.classList.remove('flip');
  }, 1300)
}
cards.forEach((card) => card.addEventListener("click", flipCard));
