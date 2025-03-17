let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let homeScoreboard = document.getElementById("home-scoreboard");
let guestScoreboard = document.getElementById("guest-scoreboard");

let gScore = 0;
let hScore = 0;

function incrementHomeOnce() {
  hScore += 1;
  homeScore.textContent = hScore;
  if (hScore > gScore) {
    homeScoreboard.classList.add("winner-animation");
    console.log(homeScoreboard);
  } else if (hScore < gScore) {
    guestScoreboard.classList.add("winner-animation");
    console.log(homeScoreboard);
  } else {
    homeScoreboard.classList.remove("winner-animation");
    guestScoreboard.classList.remove("winner-animation");
  }
}
function incrementHomeTwice() {
  hScore += 2;
  homeScore.textContent = hScore;
  if (hScore > gScore) {
    homeScoreboard.classList.add("winner-animation");
    console.log(homeScoreboard);
  } else if (hScore < gScore) {
    guestScoreboard.classList.add("winner-animation");
    console.log(homeScoreboard);
  } else {
    homeScoreboard.classList.remove("winner-animation");
    guestScoreboard.classList.remove("winner-animation");
  }
}
function incrementHomeThrice() {
  hScore += 3;
  homeScore.textContent = hScore;
  if (hScore > gScore) {
    homeScoreboard.classList.add("winner-animation");
    console.log(homeScoreboard);
  } else if (hScore < gScore) {
    guestScoreboard.classList.add("winner-animation");
    console.log(homeScoreboard);
  } else {
    homeScoreboard.classList.remove("winner-animation");
    guestScoreboard.classList.remove("winner-animation");
  }
}

function incrementGuestOnce() {
  gScore += 1;
  guestScore.textContent = gScore;
  if (hScore > gScore) {
    homeScoreboard.classList.add("winner-animation");
    console.log(homeScoreboard);
  } else if (hScore < gScore) {
    guestScoreboard.classList.add("winner-animation");
    console.log(homeScoreboard);
  } else {
    homeScoreboard.classList.remove("winner-animation");
    guestScoreboard.classList.remove("winner-animation");
  }
}
function incrementGuestTwice() {
  gScore += 2;
  guestScore.textContent = gScore;
  if (hScore > gScore) {
    homeScoreboard.classList.add("winner-animation");
    console.log(homeScoreboard);
  } else if (hScore < gScore) {
    guestScoreboard.classList.add("winner-animation");
    console.log(homeScoreboard);
  } else {
    homeScoreboard.classList.remove("winner-animation");
    guestScoreboard.classList.remove("winner-animation");
  }
}
function incrementGuestThrice() {
  gScore += 3;
  guestScore.textContent = gScore;
  if (hScore > gScore) {
    homeScoreboard.classList.add("winner-animation");
    console.log(homeScoreboard);
  } else if (hScore < gScore) {
    guestScoreboard.classList.add("winner-animation");
    console.log(homeScoreboard);
  } else {
    homeScoreboard.classList.remove("winner-animation");
    guestScoreboard.classList.remove("winner-animation");
  }
}

function resetScore() {
  hScore = 0;
  gScore = 0;

  homeScore.textContent = hScore;
  guestScore.textContent = gScore;

  homeScoreboard.classList.remove("winner-animation");
  guestScoreboard.classList.remove("winner-animation");
}
