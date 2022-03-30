// getting buttons and choices ( display )
const userChoiceDisplay = document.getElementById("userChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const userScore = document.getElementById("userScore");
const computerScore = document.getElementById("computerScore");
const Buttons = document.querySelectorAll("[data-selection]");
const Choices = [
  Buttons[0].textContent,
  Buttons[1].textContent,
  Buttons[2].textContent,
];
// getting user choice , computerChoice and computerGuess
let userChoice, computerChoice, computerGuess;
Buttons.forEach(Buttons => Buttons.addEventListener("click", (event) => {
  userChoice =  event.target.textContent;
  userChoiceDisplay.innerHTML = userChoice;
  genRandomChoiceForComputer();
}));
const genRandomChoiceForComputer = () => {
  computerGuess = Math.floor(Math.random() * Buttons.length);
  if (computerGuess === 0) {
    computerChoice = Choices[0];
  } else if (computerGuess ===1) {
    computerChoice = Choices[1];
  } else if (computerGuess ===2) {
    computerChoice = Choices[2];
  } else {
    alert("Crash !!!")
  };
  computerChoiceDisplay.innerHTML = computerChoice
  checkingGamerChoices()
};
const checkingGamerChoices = () => {
  if (computerChoice == Choices[0] && userChoice == Choices[2] ){
    computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1
  }else if (computerChoice == Choices[0] && userChoice == Choices[1]) {
    userScore.innerHTML = parseInt(userScore.innerHTML) + 1
  }else if (computerChoice == Choices[1] && userChoice == Choices[0]) {
    computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1
  }else if (computerChoice == Choices[1] && userChoice == Choices[2]) {
    userScore.innerHTML = parseInt(userScore.innerHTML) + 1
  }else if (computerChoice == Choices[2] && userChoice == Choices[0]) {
    userScore.innerHTML = parseInt(userScore.innerHTML) + 1
  }else if (computerChoice == Choices[2] && userChoice == Choices[1]) {
    computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1
  }
};
