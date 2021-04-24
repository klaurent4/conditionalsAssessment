var userChoice
var randomNumber
var computerChoice
userChoice = prompt("heads or tails");
randomNumber = Math.floor(Math.random() * 2) + 0;
if (randomNumber == 0) {
    computerChoice = 'heads'
}
else if (randomNumber == 1) {
    computerChoice = 'tails'
}

    if (userChoice == computerChoice) {
        alert("You guessed right! The coin flip landed on " + userChoice)
    } else
    alert("Sorry, the coin flip landed on " + computerChoice)
;

var birthYear
birthYear = prompt("What year were you born in?")
var age 
age = 2021 - birthYear
if (age > 21) {
    alert ("You are old enough to drink in the US");
} 
else if (age == 21) {
    alert ("You are old enough to drink in the US...barely");
}
else if (age < 21) {
    alert ("Sorry, you are not old enough to drink in the US");
}
;
