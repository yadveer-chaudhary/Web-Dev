let highestScore = 0;
let userScore = 0;
let attemptLeft = 5;

document.querySelector('.aleft').textContent = attemptLeft;
document.querySelector('.uscore').textContent = userScore;
document.querySelector('.hscore').textContent = highestScore;

document.querySelector('.btn').addEventListener('click', function () {

    if (attemptLeft <= 0) {
        alert("Game Over! Please press Reset.");
        return;
    }

    // Generate new random value on EVERY click
    let randVal = Math.trunc(Math.random() * 5) + 1;

    // Display the guessed value
    document.querySelector('.guess').value = randVal;

    const userInput = Number(document.querySelector('.iput').value);

    if (!userInput) {
        alert("Please enter a number!");
        return;
    }

    if (userInput === randVal) {

        alert("Correct Guess!");
        userScore++;
        document.querySelector('.uscore').textContent = userScore;

        if (userScore > highestScore) {
            highestScore = userScore;
            document.querySelector('.hscore').textContent = highestScore;
        }

    } else {

        attemptLeft--;
        if (attemptLeft < 0) attemptLeft = 0;

        document.querySelector('.aleft').textContent = attemptLeft;

        if (attemptLeft === 0) {
            alert("Game Over!");
        } else {
            alert("Wrong Guess! Try Again.");
        }
    }

});
 
// RESET BUTTON
document.querySelector('.fclose').addEventListener('click', function () {

    attemptLeft = 5;
    userScore = 0;

    document.querySelector('.iput').value = "";
    document.querySelector('.guess').value = "";

    document.querySelector('.aleft').textContent = attemptLeft;
    document.querySelector('.uscore').textContent = userScore;

    alert("Game Reset Successfully!");
});
