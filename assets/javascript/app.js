// You'll create a trivia form with multiple choice or true/false options (your choice).

// * The player will have a limited amount of time to finish the quiz. 

//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.


//Make a function with a clickable start button to begin game

//function startGame(runTimer) {




// Create a variable to hold the questions. Create an array for each question with four possible answers. Make a variable for the correct answer using its index in the array. Include an image for the correct answer.
var correctAnswer;
var answerImage;
var questions = [
    { 
        question: "Which album did the Radioactive Chicken Heads release on Friday the 13th of October, 2017?",
        answers : ["Music For Mutants", "Growing Mold", "Poultry Uprising", "Tales From the Coop"],
        correctAnswer: "Tales From the Coop",
        answerImage: "assets/images/TalesFromTheCoop.jpg"
    },
    {
        question: "Which of celebrity judge gonged the Radioactive Chicken Heads on the Gong Show?",
        answers : ["Will Arnett", "Jennifer Aniston", "Jack Black", "Zach Galifianakis"],
        correctAnswer: "Jack Black",
        answerImage: "assets/images/JackBlack.jpg"
    }
  ];
function start(){
for (var i = 0; i < questions.length; i++) { 
  $("#question1").text(questions[i].question); //display question
    for (var j = 0; i<questions[i].answers.length; i++){
      $("#answer1").text(questions[j].answers)
    } 
  }
}
start(); 


// function countDown {

// }

var countdownNumber = 30;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

function runTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    countdownNumber--;

    //  Show the number in the #timer tag.
    $("#timer").html("<h2>" + countdownNumber + "</h2>");


    //  Once number hits zero...
    if (countdownNumber === 0) {

      //  ...run the stop function.
      stopTimer();

      //  Display "Time's Up!" and display the correct answer and correct answer image
      
      $("#timer").html("<h2> Time's Up! </h2>");
    }
  }

  //  The stop function
  function stopTimer() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }

  //  Execute the run function.
  runTimer();

//};