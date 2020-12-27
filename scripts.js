// selecting the cards in the DOM from the .memory-card class
const cards = document.querySelectorAll(".memory-card");

//  declaring that no cards have been clicked
let hasFlippedCard = false;
let lockBoard = false;
let primaryCard, secondaryCard;

// function to flip cards
function flipCard() {
  if (lockBoard) return;
  if (this === primaryCard) return;

  this.classList.add("flip");

  if (!flippedCard) {
    // first click (flip)
    hasFlippedCard = true;
    primaryCard = this;

    return;
  }
  //  second click (flip)
  secondaryCard = this;
  matchCheck();
}

function matchCheck() {
  let itsMatch = primaryCard.dataset.cardframe === secondaryCard.dataset.cardframe;

  itsMatch ? disableMatchedCards() : flipUnmatchedCards();
}

function disableMatchedCards() {
  primaryCard.removeEventListener("click", flipCard);
  secondaryCard.removeEventListener("click", flipCard);

  resetCards();
}

function flipUnmatchedCards() {
  lockBoard = true;

  setTimeout(() => {
    primaryCard.classList.remove("flip");
    secondaryCard.classList.remove("flip");

    resetCards();
  }, 1300);
}

function resetCards() {
  [hasFlippedCard, lockBoard] = [false, false];
  [primaryCard, secondaryCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let newPos = Math.floor(Math.random() * 12);
    card.style.order = newPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));
