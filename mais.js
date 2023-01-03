const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
    return userInput;
  } else {
    console.log("Danger! Danger! Please select either 'Rock', 'Paper' or 'Scissors'.")
  }
}

const getComputerChoice = (randomNum) => {
  randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  }
  return randomNum;
}


const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game was a tie!"
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "Sorry, computer won!"
    } else if (computerChoice === 'scissors') {
      return "Great! You have won!"
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "Sorry, computer won!"
    } else if (computerChoice === 'paper') {
      return "Great! You have won!"
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "Sorry, computer won!"
    } else if (computerChoice === 'paper') {
      return "Great! You have won!"
    }
  } else if (userChoice === 'bomb') {
    return "💣💣💣 Camboom! You have won, master!"
  }
}

const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();

  console.log(`You played: ${userChoice}`);
  console.log(`Computer played: ${computerChoice}`)

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

