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
 * Third: Set the game behavior is sucess situation and failure situation:
 *        Sucess  --> The hightscore will be equal to the score and
 *                    the highscore will change if the player got heigher score.
 *        Failure --> The player will loseing the game in this situation:
 *                    - Score number is 0: the player lose all of the tries.
 *
 * Last: Set the again button to make player able to start new game
 */

// variables
let number = document.querySelector(".number");
let score = document.querySelector(".score");
let heighscore = document.querySelector(".highscore");
let guess = document.querySelector(".guess");
const check = document.querySelector(".check");
let message = document.querySelector(".message");
const again = document.querySelector(".again");
// First: Need to generate random number in range between 1 and 20.
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// No need for this after complete the game just for test
// number.textContent = secretNumber;
// give the score initial number and this number represent number of tries for player to guess the number
let initialScore = Number(score.textContent);
// Second: Need to fetch the user input number and check this number
check.addEventListener("click", function () {
  if (initialScore > 0 && guess.value > 0) {
    // check the number if is it in range between 1 and 20
    if (Number(guess.value) <= 20) {
      if (Number(guess.value) === secretNumber) {
        // success situation guess the correct number
        message.textContent = "🎉 Correct Number!";

        heighscore.textContent =
          score.textContent > heighscore.textContent
            ? score.textContent
            : heighscore.textContent;
        document.body.style.backgroundColor = "#60b347";
        // This to end the game in which the player can't input more numbers if he guess the correct number
        guess.setAttribute("readonly", "readonly");
      }
      // failure in guess the correct number but the number is in range between 1 and 20
      else {
        message.textContent =
          Number(guess.value) > Number(secretNumber)
            ? "high number 📈"
            : "low number 📉";
        initialScore--;
        score.textContent = initialScore;
      }
    } else {
      // if the number out of range, grater than 20
      message.textContent = "⛔️ Please insert number in range 1 to 20!";
      initialScore--;
      score.textContent = initialScore;
    }
  } else if (initialScore == 0) {
    message.textContent = "💥 You lost the game!";
    document.body.style.backgroundColor = "red";
    guess.setAttribute("readonly", "readonly");
  } else {
    // If no input or the input is zero or negative values
    message.textContent =
      guess.value == 0
        ? "⛔️ No number!"
        : "⛔️ Please insert positive numbers!";
    initialScore--;
    score.textContent = initialScore;
  }
});

again.addEventListener("click", function () {
  // generate new secrete key
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  // number.textContent = secretNumber;
  // Set initial score to 20 again
  initialScore = 20;
  score.textContent = initialScore;
  // remove readonly attribute to able player start new game
  guess.value = "";
  guess.removeAttribute("readonly", "readonly");
  message.textContent = "Start guessing ...";
  // return the background color to initial color
  document.body.style.backgroundColor = "#222";
});
