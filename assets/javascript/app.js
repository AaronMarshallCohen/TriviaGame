$(document).ready(function(){
  $("startButton").click(function(){
  console.log("startbutton clicked.");

});
});


  var countdownNumber=60;

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
    $("#timer").html("<h2> Seconds left: " + countdownNumber + "</h2>");


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


var questions = [
    { 
        question: "Which album did the Radioactive Chicken Heads release on Friday the 13th of October, 2017?",
        choices: ["Music For Mutants", "Growing Mold", "Poultry Uprising", "Tales From the Coop"],
        correctAnswer: 3,
        answerImage: "assets/images/TalesFromTheCoop.jpg"
    },
    {
        question: "Which of celebrity judge gonged the Radioactive Chicken Heads on the Gong Show?",
        choices: ["Will Arnett", "Jennifer Aniston", "Jack Black", "Zach Galifianakis"],
        correctAnswer: 2,
        answerImage: "assets/images/JackBlack.jpg"
    }
  ];

  var currentQuestion = 0;
  var correctAnswers = 0;

function start(){
for (var i = 0; i < questions.length; i++) { 
  $("#question1").text(questions[i].question); //display question
    for (var j = 0; i<questions[i].choices.length; i++){
      $("#answer1").text(questions[j].choices)
    } 
  }
}
start(); 



$(document).ready(function(){
    $('#btnGetValue').click(function() {
        var selValue = $('input[name=rbnNumber]:checked').val(); 
        $('p').html('<br/>Selected Radio Button Value is : <b>' + selValue + '</b>');
    });
});





   