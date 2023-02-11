let gameOptions = document.querySelectorAll(".option"),
    computer = document.querySelector(".computer"),
    player = document.querySelector(".player"),
    viewPlaye = player.querySelector(".view span"),
    resultEl = document.querySelector(".result"),
    result = resultEl.querySelector("span"),
    viewComputer = computer.querySelector(".view span");

    let computerScore = playerScore = 0;
// click options     
gameOptions.forEach((option)=>{
    option.addEventListener("click",(op)=>{
       selectionChoose(op.target)
    })
})

// slection choose function
function selectionChoose(select){
    let icon = select.children[0].innerHTML;
    let iconPlayerText = select.children[1].innerHTML;
    viewPlaye.innerHTML = icon;
    let computerSelection = randomIndex();
    let iconComputer = computerSelection.children[0].innerHTML;
    let iconComputerText = computerSelection.children[1].innerHTML;
    viewComputer.innerHTML = iconComputer;
    if(iconComputerText.trim() === "paper" && iconPlayerText.trim() === "rock"){
        computerScore++;
        viewComputer.classList.add("active")
        viewPlaye.classList.remove("active")
        result.innerHTML = `computer : ${"0" + computerScore} <span class="vs">👊</span> player : ${"0" + playerScore}`;
        console.log("computer win");
    }else if(iconComputerText.trim() === "rock" && iconPlayerText.trim() === "paper"){
        playerScore++;
        viewComputer.classList.remove("active")
        viewPlaye.classList.add("active")
        result.innerHTML = `computer : ${"0" + computerScore} <span class="vs">👊</span> player : ${"0" + playerScore}`;
        console.log("player win");
    }
    if(iconComputerText.trim() === "rock" && iconPlayerText.trim() === "scissors"){
        computerScore++;
        viewComputer.classList.add("active")
        viewPlaye.classList.remove("active")
        result.innerHTML = `computer : ${"0" + computerScore} <span class="vs">👊</span> player : ${"0" + playerScore}`;
        console.log("computer win");
    }else if(iconComputerText.trim() === "scissors" && iconPlayerText.trim() === "rock"){
        playerScore++;
        viewComputer.classList.remove("active")
        viewPlaye.classList.add("active")
        result.innerHTML = `computer : ${"0" + computerScore} <span class="vs">👊</span> player : ${"0" + playerScore}`;
        console.log("player win");
    }
    if(iconComputerText.trim() === "scissors" && iconPlayerText.trim() === "paper"){
        computerScore++;
        viewComputer.classList.add("active")
        viewPlaye.classList.remove("active")
        result.innerHTML = `computer : ${"0" + computerScore} <span class="vs">👊</span> player : ${"0" + playerScore}`;
        console.log("computer win");
    }else if(iconComputerText.trim() === "paper" && iconPlayerText.trim() === "scissors"){
        playerScore++;
        viewComputer.classList.remove("active")
        viewPlaye.classList.add("active")
        result.innerHTML = `computer : ${"0" + computerScore} <span class="vs">👊</span> player : ${"0" + playerScore}`;
        console.log("player win");
    }
    else if(iconComputerText == iconPlayerText){
        viewComputer.classList.remove("active")
        viewPlaye.classList.remove("active")
        gameOptions.forEach((option)=>{
            option.classList.add("disabled")
        })
        resultEl.classList.add("shake");
        setTimeout(() => {
            gameOptions.forEach((option)=>{
                option.classList.remove("disabled")
            })
            resultEl.classList.remove("shake");
        }, 500);
    }
    if(computerScore === 7 || playerScore === 7){
        if(computerScore === 7){
            result.innerHTML = `computer  Win <span class="vs">👏</span>`;
            viewComputer.classList.add("active")
            viewPlaye.classList.add("active")
            viewComputer.innerHTML = `<p class="h4 text-dark">😎</p>`;
            viewPlaye.innerHTML = `<p class="h4 text-dark">😭</p>`;
            gameOptions.forEach((option)=>{
                option.classList.add("disabled")
            })
            setTimeout(() => {
                playerScore = computerScore = 0;
                result.innerHTML = `computer : ${"0" + computerScore} <span class="vs">👊</span> player : ${"0" + playerScore}`;
                viewComputer.innerHTML = " ";
                viewPlaye.innerHTML = " ";
                viewComputer.innerHTML = '';
                viewPlaye.innerHTML = '';
                viewComputer.classList.remove("active")
                viewPlaye.classList.remove("active")
                viewPlaye.innerHTML = `<p class="h4 text-dark">Go!</p>`;
                viewComputer.innerHTML = `<p class="h4 text-dark">Ready</p>`;
                gameOptions.forEach((option)=>{
                    option.classList.remove("disabled")
                })
            }, 2000);
        }
        else if(playerScore === 7){
            result.innerHTML = `player  Win <span class="vs">👏</span>`;
            viewComputer.classList.add("active")
            viewPlaye.classList.add("active")
            viewPlaye.innerHTML = `<p class="h4 text-dark">😎</p>`;
            viewComputer.innerHTML = `<p class="h4 text-dark">😭</p>`;
            gameOptions.forEach((option)=>{
                option.classList.add("disabled")
            })
            setTimeout(() => {
                playerScore = computerScore = 0;
                result.innerHTML = `computer : ${"0" + computerScore} <span class="vs">👊</span> player : ${"0" + playerScore}`;
                viewPlaye.innerHTML = " ";
                viewComputer.innerHTML = " ";
                viewComputer.innerHTML = '';
                viewPlaye.innerHTML = '';
                viewComputer.classList.remove("active")
                viewPlaye.classList.remove("active")
                viewPlaye.innerHTML = `<p class="h4 text-dark">Go!</p>`;
                viewComputer.innerHTML = `<p class="h4 text-dark">Ready</p>`;
                gameOptions.forEach((option)=>{
                    option.classList.remove("disabled")
                })
            }, 2000);
        }
    }

}

// random function 
function randomIndex(){
    let random = Math.floor(Math.random() * gameOptions.length);
    return gameOptions[random];
}