    const choices = document.querySelector("ul")
    const computerChoiceImg = document.querySelector(".computer-choice-img")
    const gameScorer = document.querySelector(".game-scorer")

    let humanScore = 0;
    let computerScore = 0;

    choices.addEventListener('click', (event) => {
        let target = event.target;
        switch(target.id) {
            case 'rock':
                playRound('rock', getComputerChoice())
                break;
            case 'paper':
                playRound('paper', getComputerChoice())
                break;
            case 'scissors':
                playRound('scissors', getComputerChoice())
                break;
        }

    })

    function getComputerChoice() {
        const computerChoiceResult = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)]
        if (computerChoiceResult === 'paper') {
        computerChoiceImg.setAttribute('src', `./images/${computerChoiceResult}.jpg`)
        } else {
            computerChoiceImg.setAttribute('src', `./images/${computerChoiceResult}.png`)
        }
        computerChoiceImg.setAttribute('alt', `${computerChoiceResult}`)
        return computerChoiceResult
    }

    function playRound(humanChoice, computerChoice) {
            switch (true) {
            case (humanChoice === computerChoice) :
                gameScorer.textContent = `This round result is a draw! The current score is ${humanScore} -- ${computerScore}`
                break;
            case (humanChoice === 'scissors' && computerChoice === 'paper') :
            case (humanChoice === 'paper' && computerChoice === 'rock') :
            case (humanChoice === 'rock' && computerChoice === 'scissors') :
                gameScorer.textContent = `You won this round! The current score is ${humanScore} -- ${computerScore}`;
                humanScore++;
                break;
            case (humanChoice === 'scissors' && computerChoice === 'rock') :
            case (humanChoice === 'paper' && computerChoice === 'scissors') :
            case (humanChoice === 'rock' && computerChoice === 'paper') :
                gameScorer.textContent = `You won this round! The current score is ${humanScore} -- ${computerScore}`;
                computerScore++;
                break;
            default: 
                gameScorer.textContent = 'Invalid input! Try again.'
                break;
        }
        if (humanScore === 5) {
            gameScorer.textContent = 'Congratulations! You won the game!'
            computerScore = 0;
            humanScore = 0;

        } else if (computerScore === 5) {
            gameScorer.textContent = 'You lost the game. You can try again!'
            computerScore = 0;
            humanScore = 0;
        }
    }
