const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

checkForMatch();

function flipCard(cardId) {
cards[cardId]
console.log("User flipped " + cards[cardId])
cardsInPlay.push(cards[cardId])
cardsInPlay.length === 2;
}

flipCard(0);
flipCard(2);