const cards = document.querySelectorAll(".memory-card");


let flippedCard = false;
let lockBoard = false;
let primaryCard;
let secondaryCard;


function flipCard() {
    if (lockBoard) return;

    if (this === primaryCard) return;
    
    this.classList.add("flip");

    if (!flippedCard) {
        flippedCard = true;
        primaryCard = this;
        console.log("eventListener is active");
        console.log("This Is the First Click");
        return;
    }

    flippedCard = false;
    secondaryCard = this;

    console.log("This Is the Second Click");

    matchCheck();
    return;
}

function matchCheck() {
    let itsMatch = primaryCard.dataset.cardframe ===
        secondaryCard.dataset.cardframe;
    itsMatch ? disableMatchedCards() : flipUnmatchedCards();
}

function disableMatchedCards() {
    primaryCard.removeEventListener("click", flipCard);
    secondaryCard.removeEventListener("click", flipCard);
    resetCards();
}

function flipUnmatchedCards() {
    lockBoard = true;

    console.log("The Board is locked and no more cards can be clicked")

    setTimeout(() => {
        primaryCard.classList.remove("flip");
        secondaryCard.classList.remove("flip");

        lockBoard = false;
        // resetCards();
        console.log("The board is now unlocked.")
    }, 1300);


}

function resetCards() {
    [flippedCard, lockBoard] = [false, false];
    [primaryCard, secondaryCard] = [null, null];
}


(function shuffle() {
    cards.forEach((card) => {
        let newPos = Math.floor(Math.random() * 12);
        card.style.order = newPos;
    });
})();


cards.forEach((card) => card.addEventListener("click", flipCard));




