function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var correct = 0;

    if (question1 == "3D wallpaper") {
        correct++;
}
    if (question2 == "This is the end") {
        correct++;
}
    if (question3 == "6 months") {
        correct++;
}
    if (question4 == "Whale Shark") {
    correct++;
}


var messages = ["Fantastic", "Not there yet", "You lose"];
var gifs = ["assets/images/Win.gif", "assets/images/eh.gif", "assets/images/Lose.gif"];
var range;

     if (correct < 2) {
         range = 2;
     }
     if (correct > 1 && correct < 4) {
         range = 1;
     }
     if (correct > 3) {
         range = 0;
     }  
 
 
 document.getElementById("after_submit").style.visibility = "visible";


 document.getElementById("message").innerHTML = messages[range];
 document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
 document.getElementById("gif").src = gifs[range];
}
