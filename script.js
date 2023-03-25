'use strict';

var score = 0;
var highScore = 20;
var secretNumber = Number(Math.floor(Math.random() * 20 + 1));

console.log(secretNumber, typeof secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ No Number!';
  }

  if (guess != secretNumber) {
    score++;
    document.querySelector('.message').textContent = 'Try again!';
    document.querySelector('.score').textContent = score;
  }

  if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Correct Number!  You win!';
    document.querySelector('.number').textContent = secretNumber;

    if (score < highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.body.style.background = 'green';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 0;
  document.querySelector('.score').textContent = 0;
  document.body.style.background = 'darkgrey';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = 0;
  secretNumber = Number(Math.floor(Math.random() * 20 + 1));
  console.log(secretNumber);
});
