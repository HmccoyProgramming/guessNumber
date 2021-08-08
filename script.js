'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Guess My number yo';

// document.querySelector('.number').textContent = 25;
// document.querySelector('.score').textContent = 2;

// console.log(document.querySelector('.guess').value);

let number = Math.trunc(Math.random() * 51);

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  let displayMessage = message => {
    document.querySelector('.message').textContent = message;
  };

  // When guessno guess
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  }

  // when guess is number
  else if (guess === number) {
    displayMessage('Correct number');
    document.querySelector('.message').style.color = 'red';
    document.querySelector('h1').style.color = 'red';
    document.querySelector('.check').style.backgroundColor = 'red';
    document.querySelector('.guess').style.color = 'red';
    document.querySelector('.again').style.backgroundColor = 'red';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.backgroundColor = 'red';
    document.querySelector('.number').style.color = 'black';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // IF input is 420

  // when guess is greater than number
  else if (guess !== number) {
    if (score > 1) {
      displayMessage(
        (document.querySelector('.message').textContent =
          guess > number ? 'Too high' : 'Too low')
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess > number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // //when guess is lower than number
  // else if (guess < number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 21);
  score = 20;
  document.querySelector('h1').textContent = 'Guess my number!';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').style.color = 'white';
  document.querySelector('.check').style.backgroundColor = 'white';
  document.querySelector('h1').style.color = 'white';
  document.querySelector('.again').style.backgroundColor = 'white';
  document.querySelector('.guess').style.color = 'white';
  document.querySelector('.number').style.backgroundColor = 'white';
  document.querySelector('.number').style.color = '#333';
});
