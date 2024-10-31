function main() {
    startGame();
    endGame();
}
function endGame() {
    alert("The End. YOU DIED");
}

function startGame() {
    
    let playerName = prompt("What is your name?");
    
    alert("Welcome, " + playerName + ", to your worst nightmare");


    let firstChoice = prompt("Do you want to go into the (1) library or (2) basement?");
    
   
    if (firstChoice === "1") {
        library();
    } else if (firstChoice === "2") {
        basement();
    } else {
        alert("oops please choose on of the options.");
    }
}





function library() {
    
    let libraryChoice = prompt("You see a shiny dusty scroll in the corner of your eye in a crack on the wall. do you... (1) open it or (2) live with no excitment and leave it alone. ");
    
    if (libraryChoice === "1") {
        alert("you get sucked into the scroll never to be seen again...");
    } else if (libraryChoice === "2") {
        alert("aha you made the correct choice! is what you thought...");
    } else {
        alert("that's not one of the options bro.");
    }
}

function basement() {
    let basementChoice = prompt("You hear gagging sounds. Do you (1) investigate or (2) run away like a scardey-cat?");
    
    if (basementChoice === "1") {
        alert("you see a man eating 7 foot bat staring into your soul and thats the last thing you ever see.");
    } else if (basementChoice === "2") {
        alert("You made the correct choice, you live to see another day... is the last thing you ever hear.");
    } else {
        alert("cmon man, you gotta pick an option");
}
}
main();