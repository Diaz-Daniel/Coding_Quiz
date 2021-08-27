var clockEl = document.getElementById('clock');
var startContainer = document.getElementById('opening');
var startBtn = document.getElementById('start-btn');
var questionEl= document.getElementById('question');
var title = document.getElementById('title');
var options = document.getElementById('options');
var end = document.getElementById('end');
var score = document.getElementById('score');
var initials = document.getElementById('initials');
var submit = document.getElementById('submit');
var time = 75;
var questionIndex = 0;
var timer;

function start(){

    //hide container
    startContainer.setAttribute("class", "hidden");
    //start timer and show time on page
    timer = setInterval(()=>{
        //update the time
            time--;
            clockEl.textContent = time;
    },1000)

    clockEl.textContent = time;
    //unhide questions
    questionEl.removeAttribute("class");

    begingQuestions();
}


function beginQuestions(){
    // get the question from the question.js 
    var currentQuestion = questions[questionIndex];

    title.textContent = currentQuestion.question;

}
startBtn.onclick=start;