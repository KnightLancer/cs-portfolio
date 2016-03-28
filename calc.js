// JavaScript File

//These var's call upon the terms from the HTML page it is connected to to this page.
var button = document.getElementById("submitButton");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
//Except this one.
var answer;
var display = document.getElementById("display");
var dropdown = document.getElementById("dropdown");

//This tells the submit button to do math with the two typed values.
button.addEventListener("click", doMath);

//This is the actual function that does math.
function doMath() {
    
//Addition
    if (dropdown.value == "+") {
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }

//Subtraction
    if (dropdown.value == "-") {
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    }

//Multiplication
    if (dropdown.value == "x") {
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    }
    
//Division
    if (dropdown.value == "/") {
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    }

//Power of
    if (dropdown.value == "pow") {
        answer = Math.pow(input1.value, input2.value);
        display.innerHTML = answer;
    }

//Square root
    if (dropdown.value == "sqrt") {
        answer = Math.sqrt(input1.value);
        display.innerHTML = answer;
    }
}
