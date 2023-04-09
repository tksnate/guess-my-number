// 'use strict';

let score = 0;
let highScore = 20;
let secretNumber = Number(Math.floor(Math.random() * 20 + 1));

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const scoreMessage = function (scoreMessage) {
  document.querySelector('.score').textContent = scoreMessage;
};

const numberMessage = function (numberMessage) {
  document.querySelector('.number').textContent = numberMessage;
};

console.log(secretNumber, typeof secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('❌ No Number!');
  } else if (guess > secretNumber) {
    score++;
    scoreMessage(score);
    displayMessage('Too high!');
  } else if (guess < secretNumber) {
    score++;
    scoreMessage(score);
    displayMessage('Too low!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!  You win!');
    numberMessage(secretNumber);
    document.body.style.background = 'green';
    document.querySelector('.message').style = 'font-size: 3rem; color: black';
    document.querySelector('.number').style.width = '30rem';
    if (score < highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 0;
  document.querySelector('.app').style.opacity = 100;
  scoreMessage(0);
  document.body.style.background = 'black';
  numberMessage('?');
  document.querySelector('.guess').value = 0;
  secretNumber = Number(Math.floor(Math.random() * 20 + 1));
  // document.querySelector('.number').style = 'width: 15rem;';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Enter your guess and press "Check!"');
  document.querySelector('.message').style = 'font-size: 1.5rem; color: white';
  console.log(secretNumber);
});
