// Input
var name1 = prompt("Name Player 1");
document.querySelector(".player1").textContent = name1;

var name2 = prompt("Name Player 2");
document.querySelector(".player2").textContent = name2;


// Dice 1
var randomNum1 = Math.floor(Math.random() * 6) + 1;

var dice1Image = "dice" + randomNum1 + ".png";

var dice1ImageSource = "./images/" + dice1Image;

document.querySelector(".one").setAttribute("src", dice1ImageSource);


// Dice 2
var randomNum2 = Math.floor(Math.random() * 6) + 1;

var dice2Image = "dice" + randomNum2 + ".png";

var dice2ImageSource = "./images/" + dice2Image;

document.querySelector(".two").setAttribute("src", dice2ImageSource);


// Heading
if (randomNum1 > randomNum2) {
    document.querySelector(".winner").innerHTML = "Player 1 wins 🥂";
} else if (randomNum2 > randomNum1) {
    document.querySelector(".winner").innerHTML = "Player 2 wins 🥂";
} else {
    document.querySelector(".winner").innerHTML = "Draw";
}