'use strict';

let score = 0;
let highScore = 20;
let secretNumber = Number(Math.floor(Math.random() * 20 + 1));

console.log(secretNumber, typeof secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ No Number!';
    // } else if (guess != secretNumber) {
    //   score++;
    //   document.querySelector('.message').textContent = 'Try again!';
    //   document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Too high!';
  } else if (guess < secretNumber) {
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Too low!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Correct Number!  You win!';
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.background = 'green';
    // document.querySelector('.number').style = 'width: 20rem;';
    document.querySelector('.number').style.width = '30rem';
    if (score < highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 0;
  document.querySelector('.score').textContent = 0;
  document.body.style.background = 'black';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = 0;
  secretNumber = Number(Math.floor(Math.random() * 20 + 1));
  // document.querySelector('.number').style = 'width: 15rem;';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent =
    'Enter your guess and press "Check!"';
  console.log(secretNumber);
});
