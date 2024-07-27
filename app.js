    const choices = ["rock", "paper", "scissors"];



    function getComputerChoice() {
        return choices[Math.floor(Math.random() * 3)]
    }

    function getHumanChoice() {
        return prompt("What will you use? Scissors, Rock, or Paper?").toLowerCase()
    }

    function playRound(humanChoice, computerChoice) {
        switch (true) {
            case (humanChoice === computerChoice) :
                console.log('This round result is a draw!')
                break;
            case (humanChoice === 'scissors' && computerChoice === 'paper') :
            case (humanChoice === 'paper' && computerChoice === 'rock') :
            case (humanChoice === 'rock' && computerChoice === 'scissors') :
                console.log('You won this round!');
                return 'win'
                break;
            case (humanChoice === 'scissors' && computerChoice === 'rock') :
            case (humanChoice === 'paper' && computerChoice === 'scissors') :
            case (humanChoice === 'rock' && computerChoice === 'paper') :
                console.log('You lost this round!');
                return 'loss'
                break;

            default: 
                console.log('Invalid input! Try again.')
        }
    }

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;
//     for(let i = 0; i < 5; i++){
//         const gameResult = playRound(getHumanChoice(), getComputerChoice());
//         if (gameResult === 'win') {
//             humanScore++;
//             console.log(humanScore) 
    
//         } else if (gameResult === 'loss') {
//             computerScore++
//             console.log(computerScore)
//         } else if (gameResult === null || undefined) {
//             return console.log('Something wrong occured. Try again')
//         }
//     }
//     return humanScore > computerScore ? console.log('You won the game!') : console.log('You lost. Try again next time')
// }

playGame();
