var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queenhearts.png'
  },
  {
    rank: 'queen',
    suit: 'spades',
    cardImage: 'images/queenspades.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/kinghearts.png'
  },
  {
    rank: 'king',
    suit: 'spades',
    cardImage: 'images/kingspades.png'
  }
];
var cardsInPlay = [];

var checkMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
};

var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', isTwocards);
    document.getElementById('game-board').appendChild(cardElement);
  }

};

var isTwocards = function () {
  cardId = this.getAttribute('data-id');
  console.log(cardId);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    checkMatch();
    cardsInPlay = [];
  }
}

createBoard();
