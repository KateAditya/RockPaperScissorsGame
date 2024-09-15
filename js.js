document.addEventListener("DOMContentLoaded", () => {
    let userScore = 0;
    let compScore = 0;

    const choices = document.querySelectorAll(".choice");
    const msg = document.querySelector("#msg");
    const userscore = document.querySelector("#user-score");
    const compscore = document.querySelector("#comp-score");

    const gencomchoice = () => {
        const options = ["rock", "paper", "scissors"];
        const ran = Math.floor(Math.random() * 3);
        return options[ran];
    };

    const drawGame = () => {
        console.log("Game was a draw.");
    };

    const showWinner = (userWin, userChoice, comochoice) => {
        if (userWin) {
            userScore++;
            userscore.innerText = userScore;
            console.log("You Win!!!");
            msg.innerText = `You Win! Your ${userChoice} beats ${comochoice}`;
            msg.style.backgroundColor = "green";
        } else {
            compScore++;
            compscore.innerText = compScore;
            console.log("You Lose!!!");
            msg.innerText = `You Lose! ${comochoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
        }
    };

    const playgame = (userChoice) => {
        console.log("User Choice = ", userChoice);

        const comochoice = gencomchoice();
        console.log("Computer Choice = ", comochoice);

        if (userChoice === comochoice) {
            drawGame();
            msg.innerText = "Game Draw! Play Again?";
            msg.style.backgroundColor = "black";
        } else {
            let userWin = true;
            if (userChoice === "rock") {
                userWin = comochoice === "paper" ? false : true;
            } else if (userChoice === "paper") {
                userWin = comochoice === "scissors" ? false : true;
            } else {
                userWin = comochoice === "rock" ? false : true;
            }
            showWinner(userWin, userChoice, comochoice);
        }
    };

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            let countdown = 3;

            const countdownInterval = setInterval(() => {
                msg.innerText = `Getting Result In ${countdown}...`;
                countdown--;
                if (countdown < 0) {
                    clearInterval(countdownInterval);
                    playgame(userChoice);
                }
            }, 700);

            // Immediately show the first countdown number
            msg.innerText = `Getting Result In ${countdown}...`;
        });
    });
});
