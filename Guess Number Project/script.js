// alert("Hii everyone !!")

// let randVal = Math.trunc(Math.random()*5)   
// truc converts float into int
// alert(randVal)

let highestScore = 0
let userScore = 0
let attemptLeft = 5


document.querySelector('.aleft').textContent = attemptLeft
document.querySelector('.uscore').textContent = userScore
document.querySelector('.hscore').textContent = highestScore


document.querySelector('.btn').addEventListener('click',function(){

    const randValue = document.querySelector('.guess').value = '6'

    const userInput = Number(document.querySelector('.iput').value)

    // alert(userInput)

    if(){

    } else {
        console.log("Game Over");
        
    }

})