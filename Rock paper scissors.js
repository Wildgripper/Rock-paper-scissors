const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      return 'Please enter valid input!';
    }
  };
  
  const getComputerChoice = () => {
    let number = Math.random() * 3;
     number = Math.floor(number);
    // return number;
    if (number == 0) {
      return 'rock';
    } else if (number == 1) {
      return 'paper';
    } else {
      return 'scissors';
    }
  };
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice){
      return 'The game is a tie';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer has won!';
      } else {
        return 'The user has won!';
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer has won!';
      } else {
        return 'The user has won!';
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer has won!';
      } else {
        return 'The user has won!';
      }
    }
  
    if (userChoice === 'bomb') {
            return 'The user has won!';
        }
  }
  
  function playGame() {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  