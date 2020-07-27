// Number of seconds you will have to complete the quix (90)
let timer = 90;

// Timer function interval to count down the remaining time by intervals of one second
let myInterval = setInterval(() => {
  // -- signifies counting down by intervals of one
  timer--;
  // Shows how much time is left in countdown
  document.getElementById("timer").textContent = timer;
  // Sets up conditional for what happens when time runs out
  if (timer <= 0) {
    // Alert prompt for when the 90 seconds has expired
    alert("Your time is up!");
    // Clears the prompt and stops the function from running
    clearInterval(myInterval);
  }
  // Sets format to count down by 1 second intervals (1000ms=1sec)
}, 1000);

var currentQuestion = 0;

var questions = [
  {
    title: "What is the first letter of the alphabet",
    choices: ["A", "B", "C", "Z"],
    correct: "A",
  },
  {
    title: "What is the last letter of the alphabet",
    choices: ["A", "B", "C", "Z"],
    correct: "Z",
  },
];
console.log(questions[currentQuestion].title);
console.log(questions[currentQuestion].choices[3]);

document.getElementById("questionTitle").textContent =
  questions[currentQuestion].title;
