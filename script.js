"use strict";

/**
 * Project Idea: its a simple gussing game
 *
 * - This game will generate a random number between 1 to 20
 *    and the player should guess this number
 *    the player have 20 try to guess the random number
 *    when the player guess the correct number the game should save the
 *    high score the player got it, and this number will updated if the
 *    player got a score heigher then the previous number.
 *
 * so, The game will work on parts:
 *
 * First: Need to generate random number in range between 1 and 20.
 *
 * Second: Need to fetch the user input number and check this number
 *        - The number heigher the random number generated
 *          will show this message : High number
 *        - The number smaller:
 *          will show this message : low number
 *        - The number out of range :
 *          will show this message :  Please insert number in range 1 to 20!
 *        - The number is zero or negative number:
 *          will show this message : Please insert positive numbers!
 *
 *
 */

// variables
let number = document.querySelector(".number");
let score = document.querySelector(".score");
let heighscore = document.querySelector(".highscore");
score.textContent = 20;
let guess = document.querySelector(".guess");
let check = document.querySelector(".check");
let message = document.querySelector(".message");

// First: Need to generate random number in range between 1 and 20.

// This variable responsable for display the number
// No need for this after complete the game just for test
number.textContent = Math.trunc(Math.random() * 20 + 1);

/**
 * This loops to test if all the randown numbers are falied this
 * test just for understanding (I test just 10 numbers)
 */

// let arr = [];

// for (let index = 0; arr.length < 10; index++) {
//   let number = Math.trunc(Math.random() * 10 + 1);
//   if (!arr.includes(number)) {
//     arr.push(number);
//   }
// }
// console.log(arr);
// let arrayy = [];

// let index = 0;
// while (arrayy.length < 10) {
//   let number = Math.trunc(Math.random() * 10 + 1);
//   let check = arrayy.includes(number);
//   console.log(check);
//   if (check !== true) {
//     arrayy.push(number);
//   }
//   index++;
// }
// console.log(arrayy);

// Second: Need to fetch the user input number and check this number
check.addEventListener("click", function () {
  // check the number is not zero
  if (guess.value > 0) {
    // check the number if is it in range between 1 and 20
    if (guess.value <= 20) {
      // success situation guess the correct number
      if (guess.value === number.textContent) {
        message.textContent = "🎉 Correct Number!";
        // failure in guess the correct number but the number is in range between 1 and 20
      } else if (guess.value != number.textContent) {
        // if the guess is heigher will print hight number and if it is low will print low number
        message.textContent =
          guess.value < number.textContent ? "low number 📈" : "high number 📉";
      }
      // if the number out of range, grater than 20
    } else {
      message.textContent = "⛔️ Please insert number in range 1 to 20!";
    }
    // If no input or the input is zero or negative values
  } else {
    message.textContent =
      guess.value == 0
        ? "⛔️ No number!"
        : "⛔️ Please insert positive numbers!";
  }
});
