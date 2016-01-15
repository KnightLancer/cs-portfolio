// JavaScript File
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
// variables for the choices to connect HTML to JS

var positions = ["105px","605px","1040px"];
// I need the array in order for the randomizing to occur so the function below picks the values from above

var randposition1 = positions[Math.floor(Math.random() * positions.length)];
var randposition2 = positions[Math.floor(Math.random() * positions.length)];
var randposition3 = positions[Math.floor(Math.random() * positions.length)];
// the randomizing function, one for each choice

paper.style.left = randposition1;
rock.style.left = randposition2;
scissors.style.left = randposition3;
// connects the choices to the randomizing function