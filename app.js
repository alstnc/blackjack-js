const deck = [
  {
    name: "Ace",
    suit: "Hearts",
    value: 1,
    image: "https://deckofcardsapi.com/static/img/AH.png",
  },
  {
    name: "Ace",
    suit: "Diamonds",
    value: 1,
    image: "https://deckofcardsapi.com/static/img/AD.png",
  },
  {
    name: "Ace",
    suit: "Spades",
    value: 1,
    image: "https://deckofcardsapi.com/static/img/AS.png",
  },
  {
    name: "Ace",
    suit: "Clubs",
    value: 1,
    image: "https://deckofcardsapi.com/static/img/AC.png",
  },
  {
    name: "Two",
    suit: "Hearts",
    value: 2,
    image: "https://deckofcardsapi.com/static/img/2H.png",
  },
  {
    name: "Two",
    suit: "Diamonds",
    value: 2,
    image: "https://deckofcardsapi.com/static/img/2D.png",
  },
  {
    name: "Two",
    suit: "Spades",
    value: 2,
    image: "https://deckofcardsapi.com/static/img/2S.png",
  },
  {
    name: "Two",
    suit: "Clubs",
    value: 2,
    image: "https://deckofcardsapi.com/static/img/2C.png",
  },
  {
    name: "Three",
    suit: "Hearts",
    value: 3,
    image: "https://deckofcardsapi.com/static/img/3H.png",
  },
  {
    name: "Three",
    suit: "Diamonds",
    value: 3,
    image: "https://deckofcardsapi.com/static/img/3D.png",
  },
  {
    name: "Three",
    suit: "Spades",
    value: 3,
    image: "https://deckofcardsapi.com/static/img/3D.png",
  },
  {
    name: "Three",
    suit: "Clubs",
    value: 3,
    image: "https://deckofcardsapi.com/static/img/3C.png",
  },
  {
    name: "Four",
    suit: "Hearts",
    value: 4,
    image: "https://deckofcardsapi.com/static/img/4H.png",
  },
  {
    name: "Four",
    suit: "Diamonds",
    value: 4,
    image: "https://deckofcardsapi.com/static/img/4D.png",
  },
  {
    name: "Four",
    suit: "Spades",
    value: 4,
    image: "https://deckofcardsapi.com/static/img/4S.png",
  },
  {
    name: "Four",
    suit: "Clubs",
    value: 4,
    image: "https://deckofcardsapi.com/static/img/4C.png",
  },
  {
    name: "Five",
    suit: "Hearts",
    value: 5,
    image: "https://deckofcardsapi.com/static/img/5H.png",
  },
  {
    name: "Five",
    suit: "Diamonds",
    value: 5,
    image: "https://deckofcardsapi.com/static/img/5D.png",
  },
  {
    name: "Five",
    suit: "Spades",
    value: 5,
    image: "https://deckofcardsapi.com/static/img/5S.png",
  },
  {
    name: "Five",
    suit: "Clubs",
    value: 5,
    image: "https://deckofcardsapi.com/static/img/5C.png",
  },
  {
    name: "Six",
    suit: "Hearts",
    value: 6,
    image: "https://deckofcardsapi.com/static/img/6H.png",
  },
  {
    name: "Six",
    suit: "Diamonds",
    value: 6,
    image: "https://deckofcardsapi.com/static/img/6D.png",
  },
  {
    name: "Six",
    suit: "Spades",
    value: 6,
    image: "https://deckofcardsapi.com/static/img/6S.png",
  },
  {
    name: "Six",
    suit: "Clubs",
    value: 6,
    image: "https://deckofcardsapi.com/static/img/6C.png",
  },
  {
    name: "Seven",
    suit: "Hearts",
    value: 7,
    image: "https://deckofcardsapi.com/static/img/7H.png",
  },
  {
    name: "Seven",
    suit: "Diamonds",
    value: 7,
    image: "https://deckofcardsapi.com/static/img/7D.png",
  },
  {
    name: "Seven",
    suit: "Spades",
    value: 7,
    image: "https://deckofcardsapi.com/static/img/7S.png",
  },
  {
    name: "Seven",
    suit: "Clubs",
    value: 7,
    image: "https://deckofcardsapi.com/static/img/7C.png",
  },
  {
    name: "Eight",
    suit: "Hearts",
    value: 8,
    image: "https://deckofcardsapi.com/static/img/8H.png",
  },
  {
    name: "Eight",
    suit: "Diamonds",
    value: 8,
    image: "https://deckofcardsapi.com/static/img/8D.png",
  },
  {
    name: "Eight",
    suit: "Spades",
    value: 8,
    image: "https://deckofcardsapi.com/static/img/8S.png",
  },
  {
    name: "Eight",
    suit: "Clubs",
    value: 8,
    image: "https://deckofcardsapi.com/static/img/8C.png",
  },
  {
    name: "Nine",
    suit: "Hearts",
    value: 9,
    image: "https://deckofcardsapi.com/static/img/9H.png",
  },
  {
    name: "Nine",
    suit: "Diamonds",
    value: 9,
    image: "https://deckofcardsapi.com/static/img/9D.png",
  },
  {
    name: "Nine",
    suit: "Spades",
    value: 9,
    image: "https://deckofcardsapi.com/static/img/9S.png",
  },
  {
    name: "Nine",
    suit: "Clubs",
    value: 9,
    image: "https://deckofcardsapi.com/static/img/9C.png",
  },
  {
    name: "Ten",
    suit: "Hearts",
    value: 10,
    image: "https://deckofcardsapi.com/static/img/0H.png",
  },
  {
    name: "Ten",
    suit: "Diamonds",
    value: 10,
    image: "https://deckofcardsapi.com/static/img/0D.png",
  },
  {
    name: "Ten",
    suit: "Spades",
    value: 10,
    image: "https://deckofcardsapi.com/static/img/0S.png",
  },
  {
    name: "Ten",
    suit: "Clubs",
    value: 10,
    image: "https://deckofcardsapi.com/static/img/0C.png",
  },
  {
    name: "Jack",
    suit: "Hearts",
    value: 10,
    image: "https://deckofcardsapi.com/static/img/10J.png",
  },
  {
    name: "Jack",
    suit: "Diamonds",
    value: 10,
    image: "https://deckofcardsapi.com/static/img/JD.png",
  },
  {
    name: "Jack",
    suit: "Spades",
    value: 10,
    image: "https://deckofcardsapi.com/static/img/JS.png",
  },
  {
    name: "Jack",
    suit: "Clubs",
    value: 10,
    image: "https://deckofcardsapi.com/static/img/JC.png",
  },
  {
    name: "Queen",
    suit: "Hearts",
    value: 10,
    image: "https://deckofcardsapi.com/static/img/QH.png",
  },
  {
    name: "Queen",
    suit: "Diamonds",
    value: 10,
    image: "https://deckofcardsapi.com/static/img/QD.png",
  },
  {
    name: "Queen",
    suit: "Spades",
    value: 10,
    image: "https://deckofcardsapi.com/static/img/QS.png",
  },
  {
    name: "Queen",
    suit: "Clubs",
    value: 10,
    image: "https://deckofcardsapi.com/static/img/QC.png",
  },
  {
    name: "King",
    suit: "Hearts",
    value: 10,
    image: "https://deckofcardsapi.com/static/img/KH.png",
  },
  {
    name: "King",
    suit: "Diamonds",
    value: 10,
    image: "https://deckofcardsapi.com/static/img/KD.png",
  },
  {
    name: "King",
    suit: "Spades",
    value: 10,
    image: "https://deckofcardsapi.com/static/img/KS.png",
  },
  {
    name: "King",
    suit: "Clubs",
    value: 10,
    image: "https://deckofcardsapi.com/static/img/KC.png",
  },
];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

shuffle(deck);
console.log(deck);

let hand = [];
let handvalue = 0;

const gameLog = document.getElementById("game-log");
const playerScore = document.getElementById("player-score");
const playerArea = document.getElementById("player-area");

document.getElementById("hit-button").addEventListener("click", function () {
  let drawnCard = deck.pop();
  hand.push(drawnCard);
  gameLog.insertAdjacentHTML(
    "beforeend",
    `<p>You drew a ${drawnCard.name} of ${drawnCard.suit}</p>`
  );
  playerArea.insertAdjacentHTML(
    "beforeend",
    `<img class="card-img" src="${drawnCard.image}" alt="${drawnCard.name} of ${drawnCard.suit}">`
  );
  console.log(hand);
  handvalue += drawnCard.value;
  playerScore.innerHTML = `Your Score: ${handvalue}`;
  if (handvalue > 21) {
    playerScore.insertAdjacentHTML("beforeend", `<h1>BUST!!</h1>`);
  }
});
