var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
// document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


function gamePlay(){
  var player1 = document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  var player2 = document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
}

function checkWinner(){
  if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!!";
  }
  else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!!!";
  }
  else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML="Draw Game";
  }
}

function refreshPage(){
  window.location.reload();
} 



gamePlay();
checkWinner();
