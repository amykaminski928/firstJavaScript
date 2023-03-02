"use strict";
// Variables - 1 Days of the Week

// var dayOfWeek = "Monday";
// console.log(dayOfWeek);
// dayOfWeek = "Friday";
// console.log(`I can't wait for ${dayOfWeek}!`);

// // 2 User Input
// let animalInput = prompt("What is your favorite animal?");
// let colorInput = prompt("What is your favorite color?");
// console.log(`I've never seen a ${colorInput} ${animalInput}!`);

// // 3 Conditionals - Meals

// // Favorite Breakfast French toast
// // Favorite Lunch Grilled Cheese Sandwich and Tomato Soup
// // Favorite Dinner Pesto Chicken and Potato Bake

// let timeOfDay = 1300

// // when assigned letters without a quotation marks, (not a string) the code breaks and throws an error message that the letters are not defined.  If enclosed in a string they are not passed through but no error message is given, it just states undefined in the global variable and runs through the loop with no stopping point or output.

// let timeToEat = ""

// if (timeOfDay < 1200) {
//     timeToEat = "French toast";
//     console.log(`It's time to have your favorite breakfast, ${timeToEat}.`);
// } else if (timeOfDay >= 1200 && timeOfDay < 1700){
//     timeToEat = "Grilled Cheese Sandwich and Tomato Soup";
//     console.log(`It's time to have your favorite lunch, ${timeToEat}.`);
// } else if (timeOfDay >= 1700) {
//     timeToEat = "Pesto Chicken and Potato Bake";
//     console.log(`It's time to have your favorite dinner, ${timeToEat}.`);
// }
// // 
// 2. Random Number

// let randNum = Math.floor(Math.random() * 11);

// if (randNum >= 0 && randNum <= 2) {
//     console.log("Beatles");
// }else if (randNum >=3 && randNum <=5) {
//     console.log('Stones');
// }else if (randNum >=6 && randNum <=8) {
//     console.log('Floyd');
// }else if (randNum ==9 || randNum == 10){
//     console.log('Hendrix');
// }

// //For Loops 1 print JavaScript is cool 7 times

// for (let i = 0; i < 7; i++){
//     console.log("JavaScript is cool!");
// }

// // 2 loop displaying numbers 0-10 one per loop - hint need a variable

// for(let i = 0; i < 11; i++){
//     console.log(i);
// }

// // 3 for loop displaying hello /n goodbye 5 times:
// for (let i = 0; i < 5; i++) {
//     console.log("hello");
//     console.log("goodbye");
// } 

// // 1. favorite movie (void function):

// function printMovieName() {
//      let myFavMovie = "So I Married an Axe Murderer";
//      console.log(myFavMovie);   
//  }
// let printMovie = printMovieName()

// 2. favorite brand (return function)

// function askFavBands(userInput){
//     userInput = prompt("Please type the name of your favorite band:");
//     return userInput;
// }

// let userFavBand = askFavBands();
// console.log(userFavBand);

// // //3 concert (function with parameters)
 
// function concertDisplay(musicalAct){
//     let myStreet = prompt("Please type the name of the street on which you live.");
//     console.log(`It would be great if ${musicalAct} played a show on ${myStreet}`);
// }
// let musicalAct = userFavBand;
// concertDisplay(musicalAct);

// // Arrays
// // 1. Desktop items Create an array, add to an array, print each item in array to console.
// let desktopItems = ['laptop', 'pen', 'notebook'];
// console.log(desktopItems[1]);
// desktopItems.push('Infinity Gauntlet');
// let fLen = desktopItems.length;
// let text = ""
// for (let i = 0; i < fLen ; i++){
//     console.log(text + desktopItems[i])
// }

// // Put it all together now: Magic Number
let magicNumber = 50;
var guess = 0;

function askUser(guess){
    guess = prompt("Guess a whole number between 0 and 100.");
    return guess
}
var guess = UserGuess

while (magicNumber >= 0 && magicNumber <=100){
    
    if (userGuess > magicNumber + 11){
        prompt(`${userGuess} is too high.`);
        return askUser(guess)
    }else if (guess < magicNum - 11){
        prompt(`${userGuess} is too low`);
        return askUser(guess)
    }else if (userGuess >= magicNumber + 10) {
        prompt(`${userGuess}, getting warmer!`);
    }else if (userGuess <= magicNumber -10) {
        prompt(`${userGuess}, getting warmer!`);
    }else if (guess == magicNumber){
        alert(`Congratulations!  You guessed ${magicNumber} which is the magic number!`)
        }break
}