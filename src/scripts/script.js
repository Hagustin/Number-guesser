let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, target) => {
     if (humanGuess < 0 || humanGuess > 9) {
        alert('Please enter a number between 0 and 9');
        return false;
     }
    //calculate the difference between the target and the human's guess
    const humanDifference = Math.abs(target - humanGuess);
    const computerDifference = Math.abs(target - computerGuess);
    return humanDifference <= computerDifference;
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const getAbsoluteDistance = (guess, target) => {
  return Math.abs(guess - target);
}


const advanceRound = () => currentRoundNumber++;