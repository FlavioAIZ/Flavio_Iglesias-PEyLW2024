let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById('resultMessage').innerText = `¡Felicidades! Adivinaste el número en ${attempts} intentos.`;
    } else if (userGuess > randomNumber) {
        document.getElementById('resultMessage').innerText = 'Intenta un número más bajo.';
    } else {
        document.getElementById('resultMessage').innerText = 'Intenta un número más alto.';
    }
}
