//console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var board = document.getElementById("game-Board");

function createBoard() {
	for (var i=0; i<cards.legnth; i++){
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		board.appendChild(cardElement);
	}
}

createBoard();
 
