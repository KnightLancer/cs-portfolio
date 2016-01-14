// JavaScript File
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");


var positions = Array["105px","605px","1040px"];

var Array = positions[Math.floor(Math.random() * positions.length)];

paper.style.left = "150px";
rock.style.left = "605px";
scissors.style.left = "1040px";



