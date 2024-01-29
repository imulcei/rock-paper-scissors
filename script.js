function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win ! Rock beats Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You Win ! Scissors beats paper";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You Lose! Scissors beats paper";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You Win ! Paper beats rock";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You Lose! Paper beats rock";
  } else {
    return "Ex aequo !";
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper or Scissors ?");
    const computerSelection = getComputerChoice();
    const roundScore = playRound(playerSelection, computerSelection);
    console.log(roundScore);

    if (roundScore.includes("Win")) {
      playerScore++;
    } else if (roundScore.includes("Lose")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log("You win !");
  } else if (playerScore < computerScore) {
    console.log("You lose !");
  } else {
    console.log("Ex aequo !");
  }
}

playGame();
