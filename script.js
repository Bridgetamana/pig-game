var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;
// BTN--ROLL

document.querySelector('.btn--roll').addEventListener('click', function() {

  if(gamePlaying) {
    var dice1 = Math.floor(Math.random() * 6) + 1 ;
    var dice2 = Math.floor(Math.random() * 6) + 1 ;

    // var diceDOM = document.querySelector('.dice');
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';

    document.getElementById('dice-1').src = './img/dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = './img/dice-' + dice2 + '.png';

    if(dice1 !== 1 && dice2 !== 1) {
      roundScore += dice1 + dice2;
      document.querySelector('#current--' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
  
  //   if(dice === 6 && lastDice === 6) {
  //     scores[activePlayer] = 0;
  //     document.querySelector('#score-' + activePlayer).textContent = '0';

  //   } else if(dice !== 1) {
  //   roundScore += dice;
  //   document.querySelector('#current--' + activePlayer).textContent = roundScore;
  // } else {
  //     nextPlayer();

  //     lastDice = dice;

      // document.querySelector('.player--0').classList.remove('player--active');
      // document.querySelector('.player--1').classList.add('player--active');

  }
  }

  
});

// NEXT PLAYER FUNCTION
function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      roundScore = 0;

      document.getElementById('current--0').textContent = '0';
      document.getElementById('current--1').textContent = '0';

      document.querySelector('.player--0').classList.toggle('player--active');
      document.querySelector('.player--1').classList.toggle('player--active');

      document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';
}

// BTN--HOLD

document.querySelector('.btn--hold').addEventListener('click', function() {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

    var input = document.querySelector('.final-score').value;
     
    var winning;

    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }


  if (scores[activePlayer] >= winningScore) {
    document.querySelector('#name--' + activePlayer).textContent = 'You win!'
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.querySelector('.player--' + activePlayer).classList.add('winner');
    document.querySelector('.player--' + activePlayer).classList.remove('winner');
    gamePlaying = false;
  } else {
    nextPlayer();

  }
  }
  
});

document.querySelector('.btn--new').addEventListener('click', init);

// INIT FUNCTION

function init () {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';

  document.getElementById('score--0').textContent = '0';
  document.getElementById('score--1').textContent = '0';
  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';
  document.getElementById('name--0').textContent = 'Player 1';
  document.getElementById('name--1').textContent = 'Player 2';
  document.querySelector('.player--' + activePlayer + '').classList.remove('winner');
  document.querySelector('.player--' + activePlayer + '').classList.remove('winner');
  document.querySelector('.player--' + activePlayer + '').classList.add('active');
  document.querySelector('.player--' + activePlayer + '').classList.remove('active');
}