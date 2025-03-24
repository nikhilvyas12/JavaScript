let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

//updating score using inner'HTML on page
updateScore();


// if (!score) {
//   score = {
//     wins: 0,
//     losses: 0,
//     ties: 0
//   };
// }

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  //updating score using inner'HTML on page
  updateScore();
}

function playGames(playerMove) {
  const computerMove = pickComputerMove();
  // pickComputerMove();
  let result = '';
  if (playerMove === 'scissor') {
    if (computerMove === 'rock') {
      result = 'You Lose.';
    }
    else if (computerMove === 'paper') {
      result = 'You Win.';
    }
    else if (computerMove === 'scissor') {
      result = 'Tie.';
    }
  }

  else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You Win.';
    }
    else if (computerMove === 'paper') {
      result = 'Tie.';
    }

    else if (computerMove === 'scissor') {
      result = 'You Lose.';
    }
  }

  else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    }
    else if (computerMove === 'paper') {
      result = 'You Lose.';
    }

    else if (computerMove === 'scissor') {
      result = 'You Win.';
    }
  }



  if (result == 'You Win.') {
    score.wins = score.wins + 1; //score.wins+=1;
  } else if (result == 'You Lose.') {
    score.losses = score.losses + 1;
  } else if (result == 'Tie.') {
    score.ties = score.ties + 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  //updating score using inner'HTML on page
  updateScore();

  document.querySelector('.js-result').innerHTML = `Result : ${result}`;

  document.querySelector('.js-moves').innerHTML =
    ` you <img src="./../images/${playerMove}-emoji.png" alt="" class="css-move-icon">
  computer <img src="./../images/${computerMove}-emoji.png" alt="" class="css-move-icon">`;
}

function pickComputerMove() {
  let computerMove = '';
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  }
  else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissor';
  }
  console.log(computerMove);
  return computerMove;
}

function updateScore() {
  document.querySelector('.js-score').innerHTML = ` Wins: ${score.wins}, Losses: ${score.losses}, Ties :${score.ties}`;
}

function showResult() {
  document.querySelector('.js-result').innerHTML = `You picked: ${playerMove}. Computer picked: ${computerMove}. ${result}.`;
}