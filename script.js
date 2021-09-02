//TIMER
//timer id
var clockEl = document.getElementById('clock');
    
    //Function Start (event listener activated)
    var timer;
    var time = 75;

//SCORE
var score = 0;

//START GAME
//start of game id
var startContainer = document.getElementById('opening');
//button id to start game
var startBtn = document.getElementById('start-btn');

//QUESTIONS
//questions id
var questionEl= document.getElementById('question');
//id <h2> element questions display
var title = document.getElementById('title');
//id for buttons
var options = document.getElementById('options');
//variable used to attatch array elements to buttons
var onScreen; 
//
var options;


//End OF GAME
var end = document.getElementById('end');
//id to keep track of score
var score = document.getElementById('score');
//id for form
var initials = document.getElementById('initials');
//submit button for separate page display of scores
var submit = document.getElementById('submit');

//Funtion beginQuestions
var questionIndex = 0;



var quizQuestions=[
    {
        question: "What is the name of the tag that a Javascript file goes between on an HTML page?",
        choices:['<p> tag', '<doc> tag', "<li> tag", "<script> tag"],
        answer: "<script> tag"
    }, 
    {
        question:"What does HTML stand for?",
        choices:['Hypertext Markup Language',"Hide The Magic Language", "Hyroglific Timed Morsecode Language", "Hyper Technical Multifunctional Language"],
        answer:"Hypertext Markup Language"
    },
    {
        question:"What is the name of the dynamic attibute that adjusts the size and location of a container with the change in screen size",
        choices: ["stretch", "variable", "flex", "dynamove"],
        answer:"flex"
    },
    {
        question:"You can store objects inside an:",
        choices:["array", "boombox", "pocket", "cabinet"],
        answer:"array"
    },
    {
        question:"You can log a window object with javascript using",
        choices:["document.log","console.log", "store.window","file.object"],
        answer:"console.log"
    },
    {
        question:"What does DOM stand for?",
        choices:["Document Object Model", "Display On Mode","Direct On Module","Document Onscreen Mode"],
        answer:"Document Object Model"
    },
    {
        question:"HTML is metaphoricall referred to as the ____ of the website?",
        choices:["head", "skeleton", "eyes", "mouth"],
        answer:"Skeleton"
    },
    {
        question:"How do you acces an id from Javascript?",
        choices:[".grabItem",".querySelector",".parseHtml",".pointFind"],
        answer:".querySelector"
    },
    {
        question:"Var is short for:",
        choices:["variation", "variance","varicose","variable"],
        answer:"variable"
    },
    {
        question:" ____ are reusable blocks of code that perfom a specific task",
        choices:["Variables", "Javascript", "Functions","Declarations"],
        answer:"Functions"
    }
    
]

function start(){
    console.log('start')
    //hide container
    startContainer.setAttribute("class", "hidden");
    //start timer and show time on page
    timer = setInterval(()=>{
        //update the time
            time--;
            clockEl.textContent = time;

        //if time = 0 end game

    },1000)

    clockEl.textContent = time;
    //unhide questions
    questionEl.removeAttribute("class");

    beginQuestions();
}


function beginQuestions(){
  console.log('begin')
var currentQuestion = quizQuestions[questionIndex];


title.textContent = currentQuestion.question;

options.innerHTML = "";

//  while (time > 0) loop wrapping for loop would not allow timer to start
   for (let i = 0; i < currentQuestion.choices.length; i++) {
       var choiceBtn = document.createElement('button');
       choiceBtn.setAttribute('class', 'choice');
       choiceBtn.setAttribute('value', currentQuestion.choices[i] )
       choiceBtn.onclick = answerChoice;

       choiceBtn.textContent = currentQuestion.choices[i] 

       options.appendChild(choiceBtn)
       
   }



   

};


function answerChoice(){
// wrong anser loses time

if(this.value !== quizQuestions[questionIndex].answer){
    time -= 5;

    if (time < 0){
        time = 0;
    }

    clockEl.textContent = time;

}else{

}
// if time = 0 or currentquestion length = 10,endgame ()
//log score

//questionEl add attribute class to hide questions


//end.removeAttribute("class")

//endgame();
questionIndex++;

if(questionIndex === quizQuestions.length){
   endgame()
}else{
    beginQuestions()
}

};

function endgame(){
//stop timer
clearInterval(timer)

// hide the question container

questionEl.setAttribute('class', 'hidden');

//show the game over screen
end.removeAttribute('class')

score.textContent = time;
};

function saveScore(){
    //get initals
    var userInitials =initials.value.trim()

    if(userInitials !== ""){
        //save scores in local storage

        var highscoresArr= JSON.parse(window.localStorage.getItem("highscores")) || [];

        var scoreObj ={
            score: time,
            initials: userInitials
        }

        highscoresArr.push(scoreObj);
        window.localStorage.setItem("highscores", JSON.stringify(highscoresArr))


    }
}



startBtn.onclick=start;



//OLDER COMMENTS MOVED FROM BEGIN QUESTIONS
    // return a div with the current currentQuestion


    // while(clockEl.textContent > 0){

    // }   //if q indes is == quiz questions array end game--
 
    //  get the question from the question.js 
    //  var currentQuestion = quizQuestions[questionIndex];
    //  console.log(currentQuestion.answers);
 
    //  set variable for currentQuestion.choices
 
     
    //  title.textContent = currentQuestion.question;
 
    //  check the answer
    //  if answer is correct questionIndex++, score 1+ else subtract time
 
    //  questionIndex++
    //  call separate code for score
    //  if wrong deduct time
 
    //     display the question here




startBtn.onclick=start;
submit.onclick = saveScore;