let numCards = prompt("Quantas cartas quer jogar?");
const allCardsNames = ['bobrossparrot', 'bobrossparrot',
                      'explodyparrot', 'explodyparrot',
                      'fiestaparrot', 'fiestaparrot',
                      'metalparrot', 'metalparrot',
                      'revertitparrot', 'revertitparrot',
                      'tripletsparrot', 'tripletsparrot',
                      'unicornparrot', 'unicornparrot'];
let selectedCards = [];
let cards = document.querySelector('.container');

function checkNumCards() {
  if (numCards%2 === 0 && numCards <= 14 && numCards > 2) {
    fillSelectedCards();
  } else {
    numCards = prompt("Número inválido! Quantas cartas quer jogar?");
    checkNumCards();
  }
}

function fillSelectedCards() {
  for (let index = 0; index < numCards; index++) {
    selectedCards[index] = allCardsNames[index];    
  }
  shuffleCards();
}

function comparator() { 
  return Math.random() - 0.5; 
}

function shuffleCards() {
  selectedCards.sort(comparator);
}

function putCards() {
  for (let index = 0; index < numCards; index++) {
    cards.innerHTML += `
    <div class="card" onclick="flipCard(this)">
      <div class="img-card front">
        <img src="assets/back.png" alt="">
      </div>
      <div class="img-card back">
        <img src="assets/${selectedCards[index]}.gif" alt="">
      </div>
    </div>`;
  }

}

function flipCard(card) {
  card.classList.toggle('virada');
}

checkNumCards();
putCards();