
//For image 1
var randomNumber1;

randomNumber1 = Math.floor((Math.random()*6)+1); //1-6
var randomDiceImage1 = "images/" + "dice" + randomNumber1 + ".png"; //image 1-6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage1);


//for image 2

var randomNumber2 = Math.floor((Math.random()*6)+1);

var randomDiceImage2 = "images/dice" +randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

// Winning Decision

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}


else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").textContent = "🚩 Player 2 Wins!";
}

else if (randomNumber2 === randomNumber1) {

  document.querySelector("h1").textContent = "Draw! 🎌 ";
}
