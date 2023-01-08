let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(user, computer) {
    console.log("WIN")
    userScore ++;
    userScore_span.innerHTML = userScore.toString();
    result_div.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)}, you win!`

}

function lose(user, computer) {
    console.log("LOSE")
    computerScore ++;
    computerScore_span.innerHTML = computerScore.toString();
    result_div.innerHTML = `${convertToWord(computer)} beats ${convertToWord(user)}, you lose!`

}

function tie() {
    console.log("TIE")
    result_div.innerHTML = "It's a tie!"
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            tie();
            break;
    }

}
rock_div.addEventListener('click', function () {
    console.log("You have clicked on rock");
    game("r")
})

paper_div.addEventListener('click', function () {
    console.log("You have clicked on paper");
    game("p")
})
scissors_div.addEventListener('click', function () {
    console.log("You have clicked on scissors");
    game("s")
})
