const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
const cardOne = cards[0];
cardsInPlay.push('cardOne'); 
console.log("User flipped queen")
const cardTwo = cards[2];
cardsInPlay.push('cardTwo');
console.log("User flipped king")

cardsInPlay.length === 2;

if (cardOne === cardTwo) {alert("You found a match!")
} else{alert("Sorry, try again.")
}

