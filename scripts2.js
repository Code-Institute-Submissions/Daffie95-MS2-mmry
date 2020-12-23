// store cards in array

let card = document.getElementsByClassName("memory-card");
let cards = [...card];
// for loop to add eventListener to each card.
for (var i=0 < cards.length; i++;){
    cards[i].addEventListener("click", displayCard);
}