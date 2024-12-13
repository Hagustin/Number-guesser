# Number Guesser Project 🎯

## Overview 📚
The Number Guesser project is an interactive web-based game built using JavaScript. This project focuses on implementing core JavaScript functions to create a number-guessing game. The goal is to compare guesses between a human player and the computer, determine the winner, and track scores across multiple rounds.

---

## Project Goals 🎯
The primary goal of this project is to build a working number guessing game by writing JavaScript functions. The logic behind these functions powers the game, making the browser the execution environment.

You’ll practice:
- 🖥️ Function creation and invocation.
- ⚙️ Using JavaScript’s built-in methods.
- 🧠 Logical comparisons and conditional statements.
- 🖱️ DOM interaction for web-based projects.

---

## Project Requirements ✅
You’ll implement the following JavaScript functions in `script.js`:

### 1. `generateTarget()` 🎯
- Returns a random integer between 0 and 9.
- Purpose: Generate a secret target number for each game round.

### 2. `compareGuesses(humanGuess, computerGuess, target)` 🤔
- **Parameters:**
  - `humanGuess`: The player's guess.
  - `computerGuess`: The computer's guess.
  - `target`: The secret target number.
- **Logic:**
  - Determine the absolute distance between each guess and the target number.
  - If both guesses are equally close, the human wins.
- **Returns:**
  - `true` if the human wins.
  - `false` if the computer wins.

### 3. `updateScore(winner)` 🏆
- **Parameter:**
  - `winner`: A string indicating the round winner (`'human'` or `'computer'`).
- **Logic:**
  - Increase the respective score (`humanScore` or `computerScore`) by 1.

### 4. `advanceRound()` 🔄
- Increments the current round number by 1.

---

## Setup Instructions ⚙️
1. 📥 Download the project files using the provided link.
2. 📝 Open `script.js` in a text editor to write your code.
3. 🌐 Open `index.html` in a web browser to test the game.

For help setting up a text editor, consult [Codecademy's text editor setup guide](https://www.codecademy.com).

---

## Testing Instructions 🧪
1. 🧩 Test your functions by invoking them with sample inputs in `script.js`.
2. 🔍 Use your browser's console to debug and inspect outputs.
3. ✔️ Once satisfied, delete any test code and run the game through `index.html`.

---

## Extensions (Optional Enhancements) 🚀
- 📏 Create a `getAbsoluteDistance()` function to calculate the distance between two numbers and refactor `compareGuesses()` to use it.
- 🔔 Add input validation to ensure the player's guess is between 0 and 9, with an `alert()` if it’s out of range.

---

## Completion 🎉
Congratulations! After implementing all functions, the game should:
- 🎯 Allow guesses.
- 🏅 Correctly calculate and display scores.
- 🔄 Advance to the next round.
- 📊 Display the correct round number.

Compare your solution with others on the [Codecademy Forums](https://discuss.codecademy.com/) and consider sharing your project on GitHub.

