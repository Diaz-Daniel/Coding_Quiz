//TIMER
//timer id
var clockEl = document.getElementById('clock');
    
    //Function Start (event listener activated)
    var timer;
    var time = 75;

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
console.log(quizQuestions);

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

    beginQuestions();
}


function beginQuestions(){
    // get the question from the question.js 
    var currentQuestion = quizQuestions;
    console.log(currentQuestion);
    



    title.textContent = currentQuestion.questions;

}
startBtn.onclick=start;