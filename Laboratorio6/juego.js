let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let record = Infinity;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const resultMessage = document.getElementById('resultMessage');
    const attemptsDisplay = document.getElementById('attempts');
    const recordDisplay = document.getElementById('record');
    attempts++;

    if (userGuess === randomNumber) {
        resultMessage.innerText = `¡Felicidades! Adivinaste el número en ${attempts} intentos.`;
        resultMessage.style.color = "gold";
        if (attempts < record) {
            record = attempts;
            recordDisplay.innerText = `Récord: ${record}`;
        }
        resetGame();
    } else if (userGuess > randomNumber) {
        resultMessage.innerText = 'Intenta un número más bajo.';
        resultMessage.style.color = "Snow";
    } else {
        resultMessage.innerText = 'Intenta un número más alto.';
        resultMessage.style.color = "Snow";
    }

    attemptsDisplay.innerText = `Intentos: ${attempts}`;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    setTimeout(() => {
        document.getElementById('resultMessage').innerText = "";
        document.getElementById('attempts').innerText = `Intentos: ${attempts}`;
        document.getElementById('guessInput').value = "";
    }, 3000);
}
