document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("rock").addEventListener("click", function () {
    const computerSelection = getComputerChoice();
    const result = playRound("rock", computerSelection);
    console.log(result);
  });
  document.getElementById("paper").addEventListener("click", function () {
    const computerSelection = getComputerChoice();
    const result = playRound("paper", computerSelection);
    console.log(result);
  });
  document.getElementById("scissors").addEventListener("click", function () {
    const computerSelection = getComputerChoice();
    const result = playRound("scissors", computerSelection);
    console.log(result);
  });
});

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  let result = 0;
  if (playerSelection == "rock" && computerSelection == "scissors") {
    result = "You Win ! Rock beats Scissors";
    playerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    result = "You Lose! Rock beats Scissors";
    computerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    result = "You Win ! Scissors beats paper";
    playerScore++;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    result = "You Lose! Scissors beats paper";
    computerScore++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    result = "You Win ! Paper beats rock";
    playerScore++;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    result = "You Lose! Paper beats rock";
    computerScore++;
  } else {
    result = "Ex aequo !";
  }

  const results = document.getElementById("results");
  results.textContent = result;

  const scoreP = document.getElementById("scoreP");
  scoreP.textContent = `${playerScore}`;

  const scoreC = document.getElementById("scoreC");
  scoreC.textContent = `${computerScore}`;

  if (playerScore === 5) {
    results.textContent = "Player wins the game!";
    resetGame();
  } else if (computerScore === 5) {
    results.textContent = "Computer wins the game!";
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
}

// function playGame() {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt("Rock, Paper or Scissors ?");
//     const computerSelection = getComputerChoice();
//     const roundScore = playRound(playerSelection, computerSelection);
//     console.log(roundScore);

//     if (roundScore.includes("Win")) {
//       playerScore++;
//     } else if (roundScore.includes("Lose")) {
//       computerScore++;
//     }
//   }

//   if (playerScore > computerScore) {
//     console.log("You win !");
//   } else if (playerScore < computerScore) {
//     console.log("You lose !");
//   } else {
//     console.log("Ex aequo !");
//   }
// }

//playGame();
