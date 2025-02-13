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
let checkFlipCards = [];
let countFlipCards = 0;
let countNumbersCards = 0;

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
    countNumbersCards++;
    cards.innerHTML += `
                      <div id="card${countNumbersCards}">
                        <div class="card ${selectedCards[index]}" onclick="flipCard(this)">
                          <div class="img-card front">
                            <img src="assets/back.png" alt="">
                          </div>
                          <div class="img-card back">
                            <img src="assets/${selectedCards[index]}.gif" alt="">
                          </div>
                        </div>
                      </div>`;
  }

}

//--------------------------------------------------------------------------------------------------------------

function flipCard(card) {
  card.classList.add('virada');
  checkFlipCards[countFlipCards] = card.parentNode.id;
  countFlipCards++;
  checkFlippedNumbersCards();
}

function checkFlippedNumbersCards() {
  if (countFlipCards === 2) {
    if (document.querySelector(`#${checkFlipCards[0]} .virada`).classList[1] !== document.querySelector(`#${checkFlipCards[1]} .virada`).classList[1]) {
      setTimeout(untapCards, 1000, checkFlipCards[0], checkFlipCards[1]);
    } else {
      for (let index = 0; index < countFlipCards; index++) {
        const nameCard = document.querySelector(`#${checkFlipCards[index]} .virada`).classList[1];

        document.querySelector(`#${checkFlipCards[index]}`).innerHTML = `
          <div class="card ${nameCard} virada">
            <div class="img-card front">
              <img src="assets/back.png" alt="">
            </div>
            <div class="img-card back">
              <img src="assets/${nameCard}.gif" alt="">
            </div>
          </div>`;

           
      }
    }
    countFlipCards = 0;
  }
}

function untapCards(card1, card2) {
  document.querySelector(`#${card1} .virada`).classList.remove('virada');
  document.querySelector(`#${card2} .virada`).classList.remove('virada');
}

checkNumCards();
putCards();