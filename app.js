const deck = [
  {
    name: "Ace",
    suit: "Hearts",
    value: 1,
    image: "img/AofHearts.png",
  },
  {
    name: "Ace",
    suit: "Diamonds",
    value: 1,
    image: "img/AofDmnds.png",
  },
  {
    name: "Ace",
    suit: "Spades",
    value: 1,
    image: "img/AofSpades.png",
  },
  {
    name: "Ace",
    suit: "Clubs",
    value: 1,
    image: "img/AofClubs.png",
  },
  {
    name: "Two",
    suit: "Hearts",
    value: 2,
    image: "img/2ofHearts.png",
  },
  {
    name: "Two",
    suit: "Diamonds",
    value: 2,
    image: "img/2ofDmnds.png",
  },
  {
    name: "Two",
    suit: "Spades",
    value: 2,
    image: "img/2ofSpades.png",
  },
  {
    name: "Two",
    suit: "Clubs",
    value: 2,
    image: "img/2ofClubs.png",
  },
  {
    name: "Three",
    suit: "Hearts",
    value: 3,
    image: "img/3ofHearts.png",
  },
  {
    name: "Three",
    suit: "Diamonds",
    value: 3,
    image: "img/3ofDmnds.png",
  },
  {
    name: "Three",
    suit: "Spades",
    value: 3,
    image: "img/3ofSpades.png",
  },
  {
    name: "Three",
    suit: "Clubs",
    value: 3,
    image: "img/3ofClubs.png",
  },
  {
    name: "Four",
    suit: "Hearts",
    value: 4,
    image: "img/4ofHearts.png",
  },
  {
    name: "Four",
    suit: "Diamonds",
    value: 4,
    image: "img/4ofDmnds.png",
  },
  {
    name: "Four",
    suit: "Spades",
    value: 4,
    image: "img/4ofSpades.png",
  },
  {
    name: "Four",
    suit: "Clubs",
    value: 4,
    image: "img/4ofClubs.png",
  },
  {
    name: "Five",
    suit: "Hearts",
    value: 5,
    image: "img/5ofHearts.png",
  },
  {
    name: "Five",
    suit: "Diamonds",
    value: 5,
    image: "img/5ofDmnds.png",
  },
  {
    name: "Five",
    suit: "Spades",
    value: 5,
    image: "img/5ofSpades.png",
  },
  {
    name: "Five",
    suit: "Clubs",
    value: 5,
    image: "img/5ofClubs.png",
  },
  {
    name: "Six",
    suit: "Hearts",
    value: 6,
    image: "img/6ofHearts.png",
  },
  {
    name: "Six",
    suit: "Diamonds",
    value: 6,
    image: "img/6ofDmnds.png",
  },
  {
    name: "Six",
    suit: "Spades",
    value: 6,
    image: "img/6ofSpades.png",
  },
  {
    name: "Six",
    suit: "Clubs",
    value: 6,
    image: "img/6ofClubs.png",
  },
  {
    name: "Seven",
    suit: "Hearts",
    value: 7,
    image: "img/7ofHearts.png",
  },
  {
    name: "Seven",
    suit: "Diamonds",
    value: 7,
    image: "img/7ofDmnds.png",
  },
  {
    name: "Seven",
    suit: "Spades",
    value: 7,
    image: "img/7ofSpades.png",
  },
  {
    name: "Seven",
    suit: "Clubs",
    value: 7,
    image: "img/7ofClubs.png",
  },
  {
    name: "Eight",
    suit: "Hearts",
    value: 8,
    image: "img/8ofHearts.png",
  },
  {
    name: "Eight",
    suit: "Diamonds",
    value: 8,
    image: "img/8ofDmnds.png",
  },
  {
    name: "Eight",
    suit: "Spades",
    value: 8,
    image: "img/8ofSpades.png",
  },
  {
    name: "Eight",
    suit: "Clubs",
    value: 8,
    image: "img/8ofClubs.png",
  },
  {
    name: "Nine",
    suit: "Hearts",
    value: 9,
    image: "img/9ofHearts.png",
  },
  {
    name: "Nine",
    suit: "Diamonds",
    value: 9,
    image: "img/9ofDmnds.png",
  },
  {
    name: "Nine",
    suit: "Spades",
    value: 9,
    image: "img/9ofSpades.png",
  },
  {
    name: "Nine",
    suit: "Clubs",
    value: 9,
    image: "img/9ofClubs.png",
  },
  {
    name: "Ten",
    suit: "Hearts",
    value: 10,
    image: "img/10ofHearts.png",
  },
  {
    name: "Ten",
    suit: "Diamonds",
    value: 10,
    image: "img/10ofDmnds.png",
  },
  {
    name: "Ten",
    suit: "Spades",
    value: 10,
    image: "img/10ofSpades.png",
  },
  {
    name: "Ten",
    suit: "Clubs",
    value: 10,
    image: "img/10ofClubs.png",
  },
  {
    name: "Jack",
    suit: "Hearts",
    value: 10,
    image: "img/JofHearts.png",
  },
  {
    name: "Jack",
    suit: "Diamonds",
    value: 10,
    image: "img/JofDmnds.png",
  },
  {
    name: "Jack",
    suit: "Spades",
    value: 10,
    image: "img/JofSpades.png",
  },
  {
    name: "Jack",
    suit: "Clubs",
    value: 10,
    image: "img/JofClubs.png",
  },
  {
    name: "Queen",
    suit: "Hearts",
    value: 10,
    image: "img/QofHearts.png",
  },
  {
    name: "Queen",
    suit: "Diamonds",
    value: 10,
    image: "img/QofDmnds.png",
  },
  {
    name: "Queen",
    suit: "Spades",
    value: 10,
    image: "img/QofSpades.png",
  },
  {
    name: "Queen",
    suit: "Clubs",
    value: 10,
    image: "img/QofClubs.png",
  },
  {
    name: "King",
    suit: "Hearts",
    value: 10,
    image: "img/KofHearts.png",
  },
  {
    name: "King",
    suit: "Diamonds",
    value: 10,
    image: "img/KofDmnds.png",
  },
  {
    name: "King",
    suit: "Spades",
    value: 10,
    image: "img/KofSpades.png",
  },
  {
    name: "King",
    suit: "Clubs",
    value: 10,
    image: "img/KofClubs.png",
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
let handValue = 0;
let dealerHand = [];
let dealerHandValue = 0;

const playerScore = document.getElementById("player-score");
const playerArea = document.getElementById("player-area");
const dealerScore = document.getElementById("dealer-score");
const dealerArea = document.getElementById("dealer-area");
const notificationText = document.getElementById("notification-text");

document.getElementById("start-button").addEventListener("click", function () {
  startGame();
});
document.getElementById("hit-button").addEventListener("click", function () {
  hitMe();
});
document.getElementById("stand-button").addEventListener("click", function () {
  endTurn();
});
document.getElementById("reset-button").addEventListener("click", function () {
  resetGame();
});

function hitMe() {
  let drawnCard = deck.pop();
  hand.push(drawnCard);
  playerArea.insertAdjacentHTML(
    "beforeend",
    `<img class="card-img h-4/5 w-auto p-2" src="${drawnCard.image}" alt="${drawnCard.name} of ${drawnCard.suit}">`
  );
  handValue += drawnCard.value;
  playerScore.innerHTML = `Player Score: ${handValue}`;
  if (handValue > 21) {
    document.getElementById("notification-text").classList.remove("hidden");
    notificationText.innerText =
      "Bust! Wait for the dealer to play their turn.";
    document.getElementById("hit-button").classList.add("hidden");
  }
}

function dealerInit() {
  let dealerDrawnCard = deck.pop();
  dealerHand.push(dealerDrawnCard);
  dealerArea.insertAdjacentHTML(
    "beforeend",
    `<img class="card-img h-4/5 w-auto p-2" src="${dealerDrawnCard.image}" alt="${dealerDrawnCard.name} of ${dealerDrawnCard.suit}">`
  );
  dealerArea.insertAdjacentHTML(
    "beforeend",
    `<img class="card-img h-4/5 w-auto p-2" src="img/CardBack1.png" alt="Back of Card">`
  );
  dealerHandValue += dealerDrawnCard.value;
  dealerScore.innerHTML = `Dealer Score: >${dealerHandValue}`;
}

function endTurn() {
  dealerArea.removeChild(dealerArea.lastChild);
  document.getElementById("hit-button").classList.add("hidden");
  document.getElementById("stand-button").classList.add("hidden");
  while (dealerHandValue <= 17) {
    let dealerDrawnCard = deck.pop();
    dealerHand.push(dealerDrawnCard);
    dealerArea.insertAdjacentHTML(
      "beforeend",
      `<img class="card-img h-4/5 w-auto p-2" src="${dealerDrawnCard.image}" alt="${dealerDrawnCard.name} of ${dealerDrawnCard.suit}">`
    );
    dealerHandValue += dealerDrawnCard.value;
    dealerScore.innerHTML = `Dealer Score: ${dealerHandValue}`;
    if (dealerHandValue > 21) {
      document.getElementById("notification-text").classList.remove("hidden");
      notificationText.innerText = "Dealer busted. You win!";
    }
    if (dealerHandValue > 21 && handValue > 21) {
      document.getElementById("notification-text").classList.remove("hidden");
      notificationText.innerText = "Draw! You both busted.";
    }
    if (dealerHandValue === handValue) {
      document.getElementById("notification-text").classList.remove("hidden");
      notificationText.innerText = "Draw! You have the same score.";
    }
    if (dealerHandValue <= 21 && dealerHandValue > handValue) {
      document.getElementById("notification-text").classList.remove("hidden");
      notificationText.innerText = "You lost. Dealer's hand scored higher.";
    }
    if (
      handValue <= 21 &&
      dealerHandValue <= 21 &&
      dealerHandValue < handValue
    ) {
      document.getElementById("notification-text").classList.remove("hidden");
      notificationText.innerText = "You won! Your hand scored higher.";
    }
    if (handValue > 21 && dealerHandValue <= 21) {
      document.getElementById("notification-text").classList.remove("hidden");
      notificationText.innerText = "You lost. Dealer did not bust.";
    }
  }
}

function resetGame() {
  deck.push(...hand);
  deck.push(...dealerHand);
  handValue = 0;
  dealerHandValue = 0;
  playerArea.innerHTML = ``;
  dealerArea.innerHTML = ``;
  playerScore.innerHTML = `Player Score: ${handValue}`;
  dealerScore.innerHTML = `Dealer Score: ${dealerHandValue}`;
  document.getElementById("notification-text").classList.add("hidden");
  document.getElementById("start-button").classList.remove("hidden");
  document.getElementById("hit-button").classList.add("hidden");
  document.getElementById("stand-button").classList.add("hidden");
  document.getElementById("reset-button").classList.add("hidden");
  shuffle(deck);
}

function startGame() {
  hitMe();
  hitMe();
  dealerInit();
  document.getElementById("start-button").classList.add("hidden");
  document.getElementById("hit-button").classList.remove("hidden");
  document.getElementById("stand-button").classList.remove("hidden");
  document.getElementById("reset-button").classList.remove("hidden");
}
