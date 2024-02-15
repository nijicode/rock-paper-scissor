const matchStats = JSON.parse(localStorage.getItem('matchStats')) || {
    win: 0,
    lose: 0,
    tie: 0
};
let result = '';
function computerGuess(){

    const randomNumber = Math.ceil(Math.random()*3);
    let computerMove = '';

    if (randomNumber === 1){
        computerMove = 'rock';
    }
    else if (randomNumber === 2){
        computerMove = 'paper';
    }
    else{
        computerMove = 'scissors';
    }
    return computerMove;  
}

function playGame(playerMove){
    const computerMove = computerGuess();
    

    if(playerMove === 'rock'){
        if (computerMove === 'rock'){
            console.log("It's a tie");
            matchStats.tie++;
            result = 'tie';
            console.log(matchStats);
        }
        else if(computerMove === 'paper'){
            console.log("You lose");
            matchStats.lose++;
            console.log(matchStats);
            result = 'lose';
        }
        else if(computerMove === 'scissors'){
            console.log("You win");
            matchStats.win++;
            console.log(matchStats);
            result = 'win';
        }    
    }
    else if(playerMove === 'paper') {
        if (computerMove === 'rock'){
            console.log("You win!");
            matchStats.win++;
            console.log(matchStats);
            result = 'win';
        }
        else if(computerMove === 'paper'){
            console.log("It's a tie!");
            matchStats.tie++;
            console.log(matchStats);
            result = 'tie';
        }
        else if(computerMove === 'scissors'){
            console.log("You lose!");
            matchStats.lose++;
            console.log(matchStats);
            result = 'lose';
        }   
    }
    else if (playerMove === 'scissors'){
        if (computerMove === 'rock'){
            console.log("You lose!");
            matchStats.lose++;
            console.log(matchStats);
            result = 'lose';
        }
        else if(computerMove === 'paper'){
            console.log("You win!");
            matchStats.win++;
            console.log(matchStats);
            result = 'win';
        }
        else if(computerMove === 'scissors'){
            console.log("It's a tie!");
            matchStats.tie++;
            console.log(matchStats);
            result = 'tie';
        }  
    }  
    localStorage.setItem('matchStats',JSON.stringify(matchStats));
    localStorage.setItem('match-stats',JSON.stringify(document.querySelector('.match-stats').innerHTML));
    if(result === 'win'|| result=== 'lose'){
        document.querySelector('.result').innerText = `You ${result}!`;
    }else{
        document.querySelector('.result').innerText = `It's a ${result}!`;
    }
    document.querySelector('.match-details').innerHTML = `You choose ${playerMove.bold().toUpperCase()} and Computer choose ${computerMove.bold().toUpperCase()}`;
    document.querySelector('.match-stats').innerHTML = `<b>Win:</b> ${matchStats.win} <b>Lose:</b> ${matchStats.lose} <b>Tie:</b> ${matchStats.tie}`;
    document.querySelector('.result').style.display = "block";
    document.querySelector('.match-details').style.display = "block";
}
function reset(){
    matchStats.win = 0;
    matchStats.lose = 0;
    matchStats.tie = 0;
    document.querySelector('.result').style.display = "none";
    document.querySelector('.match-details').style.display = "none";
    document.querySelector('.match-stats').innerHTML = `<b>Win:</b> ${matchStats.win} <b>Lose:</b> ${matchStats.lose} <b>Tie:</b> ${matchStats.tie}`;
    localStorage.removeItem('matchStats');
    localStorage.removeItem('match-stats');
}

