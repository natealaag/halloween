function main() {
    startGame();
    endGame();
}
// when this pops up the game ends
function endGame() {
    alert("The End. YOU DIED");
}

// This happens at the end of the game, you die anyways.
function startGame() {
    
    let playerName = prompt("What is your name?");
    
    alert("Welcome, " + playerName + ", to your worst nightmare");

//start of the game first interactive choice
    let firstChoice = prompt("Do you want to go into the (1) library or (2) basement?");
    
   // tells code which directoin to go in the story 
    if (firstChoice === "1") {
        library();
    } else if (firstChoice === "2") {
        basement();
    } else {
        // makes player actually choose one of the options
        alert("oops please choose on of the options.");
        startGame();
    }
}
function library() {
    // this if for the library function details.
    
    let libraryChoice = prompt("You see a shiny dusty scroll in the corner of your eye in a crack on the wall. do you... (1) open it or (2) live with no excitment and leave it alone. ");
    // this tells the user what happens when they choose library.
    if (libraryChoice === "1") {
    // this gives the user options to choose from.
        alert("you get sucked into the scroll never to be seen again...");
    } else if (libraryChoice === "2") {
    // this declares option 1
        alert("aha you made the correct choice! is what you thought...");
    } else {
        alert("that's not one of the options bro.");
        startGame();
    }
}
// this function is for if the player chooses to go into the basement and not into the library. 
function basement() {
    let basementChoice = prompt("You hear gagging sounds. Do you (1) investigate or (2) run away like a scardey-cat?");
    // if statement so that the code knows what to do depending on the answer you give it. 
    if (basementChoice === "1") {
        alert("you see a man eating 7 foot bat staring into your soul and thats the last thing you ever see.");
    } else if (basementChoice === "2") {
        alert("You made the correct choice, you live to see another day... is the last thing you ever hear.");
    } else {
        alert("cmon man, you gotta pick an option");
        startGame();
}
}
main();