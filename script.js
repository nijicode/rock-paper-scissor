const matchStats = JSON.parse(localStorage.getItem("matchStats")) || {
  win: 0,
  lose: 0,
  tie: 0,
};

let result = "";
function computerGuess() {
  const randomNumber = Math.ceil(Math.random() * 3);
  let computerMove = "";

  if (randomNumber === 1) {
    computerMove = "rock";
  } else if (randomNumber === 2) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}
function playGameAnimation(playerMove) {
  const leftHand = document.querySelector("#left-hand");
  const rightHand = document.querySelector("#right-hand");
  const isAnimated = leftHand.classList.contains("animation-left");

  if (!isAnimated) {
    leftHand.classList.add("animation-left");
    rightHand.classList.add("animation-right");
    leftHand.style.display = "inline";
    rightHand.style.display = "inline";
    document.getElementById("restart").disabled = true;
    document.querySelector(".result").style.display = "none";
    document.querySelector(".match-details").style.display = "none";
    leftHand.addEventListener("animationend", function onAnimationEnd() {
      // Remove the event listener to avoid multiple executions
      leftHand.removeEventListener("animationend", onAnimationEnd);
      leftHand.classList.remove("animation-left");
      rightHand.classList.remove("animation-right");
      leftHand.style.display = "none";
      rightHand.style.display = "none";
      // Enable the button after the animation is complete
      document.getElementById("restart").disabled = false;
      // Call the function you want to execute after the animation
      playGame(playerMove);
    });
  }
}

function playGame(playerMove) {
  const computerMove = computerGuess();
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      console.log("It's a tie");
      matchStats.tie++;
      result = "tie";
      console.log(matchStats);
    } else if (computerMove === "paper") {
      console.log("You lose");
      matchStats.lose++;
      console.log(matchStats);
      result = "lose";
    } else if (computerMove === "scissors") {
      console.log("You win");
      matchStats.win++;
      console.log(matchStats);
      result = "win";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      console.log("You win!");
      matchStats.win++;
      console.log(matchStats);
      result = "win";
    } else if (computerMove === "paper") {
      console.log("It's a tie!");
      matchStats.tie++;
      console.log(matchStats);
      result = "tie";
    } else if (computerMove === "scissors") {
      console.log("You lose!");
      matchStats.lose++;
      console.log(matchStats);
      result = "lose";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      console.log("You lose!");
      matchStats.lose++;
      console.log(matchStats);
      result = "lose";
    } else if (computerMove === "paper") {
      console.log("You win!");
      matchStats.win++;
      console.log(matchStats);
      result = "win";
    } else if (computerMove === "scissors") {
      console.log("It's a tie!");
      matchStats.tie++;
      console.log(matchStats);
      result = "tie";
    }
  }
  localStorage.setItem("matchStats", JSON.stringify(matchStats));
  localStorage.setItem(
    "match-stats",
    JSON.stringify(document.querySelector(".match-stats").innerHTML)
  );
  if (result === "win" || result === "lose") {
    document.querySelector(".result").innerText = `You ${result}!`;
  } else {
    document.querySelector(".result").innerText = `It's a ${result}!`;
  }
  document.querySelector(
    ".match-details"
  ).innerHTML = `You <img class="button-img rotate-left" src="image/left-${playerMove}-hand.png"> : <img class="button-img rotate-right" src="image/right-${computerMove}-hand.png"> Com`;
  document.querySelector(
    ".match-stats"
  ).innerHTML = `<b>Win:</b> ${matchStats.win} <b>Lose:</b> ${matchStats.lose} <b>Tie:</b> ${matchStats.tie}`;
  document.querySelector(".result").style.display = "block";
  document.querySelector(".match-details").style.display = "block";
}
document.querySelector(
  ".match-stats"
).innerHTML = `<b>Win:</b> ${matchStats.win} <b>Lose:</b> ${matchStats.lose} <b>Tie:</b> ${matchStats.tie}`;
function reset() {
  matchStats.win = 0;
  matchStats.lose = 0;
  matchStats.tie = 0;
  document.querySelector(".result").style.display = "none";
  document.querySelector(".match-details").style.display = "none";
  document.querySelector(
    ".match-stats"
  ).innerHTML = `<b>Win:</b> ${matchStats.win} <b>Lose:</b> ${matchStats.lose} <b>Tie:</b> ${matchStats.tie}`;
  localStorage.removeItem("matchStats");
  localStorage.removeItem("match-stats");
}
