function greet(){
    // alert("Welcome to Sanskriti University.")
}

// function declaration
function mayankPotato(potato){
    return (potato * 4)
}

// greet()
// alert("Chopped Potato = "+ mayankPotato(10));

// function expression
const veerSamosa = function(aalu,maida,oil){
    return (aalu*maida*oil)
}

// alert(veerSamosa(2,3,1)+" Samosa")

// arrow function
const dob = Number(prompt("Enter your birth year: "))
const ageCalc = dateOfBirth => 2025 - dateOfBirth
// alert("You are "+ageCalc(dob)+" years Old.")

function machine(sugarcane){
    return (sugarcane * 6)
}

function juiceMachine(sugarcane){
    pieces = machine(sugarcane)
    const juiceProduced = (pieces*10) + 10 + 100
    return juiceProduced
}

number = Number(por )
const juice = juiceMachine(number)
