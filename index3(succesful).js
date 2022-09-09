function randomDices() {
  return Math.floor(Math.random() * 6) + 1;
}

var randomDice1 = randomDices();
var randomDice2 = randomDices();
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomDice1 + ".png");
randomDices();
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomDice2 + ".png");
randomDices();

var result = (randomDice1 === randomDice2) ? "Draw" :
  (randomDice1 > randomDice2 ? "⛳Player 1 Wins" : "Player 2 Wins⛳");

document.querySelector("h1").innerHTML = result;
