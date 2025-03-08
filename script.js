document.addEventListener('DOMContentLoaded', () => {
    const minValue = 1;
    const maxValue = 100;
    let randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    let attempts = 5;
  
    const userGuessInput = document.getElementById('user-guess');
    const submitGuessButton = document.getElementById('submit-guess');
    const feedbackElement = document.getElementById('feedback');
    const attemptsElement = document.getElementById('attempts');
    const restartGameButton = document.getElementById('restart-game');
  
    function checkGuess() {
      const userGuess = parseInt(userGuessInput.value, 10);
  
      if (isNaN(userGuess) || userGuess < minValue || userGuess > maxValue) {
        feedbackElement.textContent = `Please enter a number between ${minValue} and ${maxValue}.`;
        feedbackElement.style.color = '#e74c3c'; // Red color for errors
        return;
      }
  
      if (userGuess === randomNumber) {
        feedbackElement.textContent = `Hurray! You guessed the number in ${6 - attempts} attempts!`;
        feedbackElement.style.color = '#28a745'; // Green color for success
        restartGameButton.classList.remove('hidden');
        submitGuessButton.classList.add('hidden');
      } else if (userGuess < randomNumber) {
        feedbackElement.textContent = 'Too low! Try a higher number.';
        feedbackElement.style.color = '#f39c12'; // Orange color for hints
        attempts--;
      } else {
        feedbackElement.textContent = 'Too high! Try a lower number.';
        feedbackElement.style.color = '#f39c12'; // Orange color for hints
        attempts--;
      }
  
      attemptsElement.textContent = `Attempts Remaining: ${attempts}`;
  
      if (attempts <= 0) {
        feedbackElement.textContent = `You lost! The number was ${randomNumber}. Try again.`;
        feedbackElement.style.color = '#e74c3c'; // Red color for loss
        restartGameButton.classList.remove('hidden');
        submitGuessButton.classList.add('hidden');
      }
    }
  
    function restartGame() {
      randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
      attempts = 5;
      userGuessInput.value = '';
      feedbackElement.textContent = '';
      attemptsElement.textContent = `Attempts Remaining: ${attempts}`;
      restartGameButton.classList.add('hidden');
      submitGuessButton.classList.remove('hidden');
    }
  
    submitGuessButton.addEventListener('click', checkGuess);
    restartGameButton.addEventListener('click', restartGame);
  });
  
  