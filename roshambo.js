// JavaScript File
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");


var positions = ["105px","605px","1040px"];

var randposition1 = positions[Math.floor(Math.random() * positions.length)];
var randposition2 = positions[Math.floor(Math.random() * positions.length)];
var randposition3 = positions[Math.floor(Math.random() * positions.length)];

paper.style.left = randposition1;
rock.style.left = randposition2;
scissors.style.left = randposition3;




