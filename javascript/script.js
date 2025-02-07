let numCards = prompt("quantas cartas quer jogar?");

function checkNumCards() {
  if (numCards%2 === 0 && numCards <= 14 && numCards > 2) {
    alert("entrando no jogo");
  } else {
    numCards = prompt("Número invalido! quantas cartas quer jogar?");
    checkNumCards();
  }
}

checkNumCards();

function flipCard(card) {
  card.classList.toggle('virada');
}