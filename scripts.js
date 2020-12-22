// selecting the cards in the DOM from the .memory-card class
const cards = document.querySelectorAll('.memory-card');

function flipCard(){
    console.log('this card click works');
    // "this" keyword represents what element that fires the function
    console.log(this);
}

cards.forEach(card => card.addEventListener('click', flipCard))