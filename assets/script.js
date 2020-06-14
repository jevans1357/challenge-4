const answer1 = document.getElementById("btn-1")
const answer2 = document.getElementById("btn-2")
const answer3 = document.getElementById("btn-3")
const answer4 = document.getElementById("btn-4")
const start_button = document.getElementById("start_button")
const submit_button = document.getElementById("submit_initials")

var index = 0
var totalCorrect = 0
var duration = 90
var timer = duration, minutes, seconds;

function startTimer(display) {
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        
        if (--timer <= -2) {
            endGame();
        }   else {
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                display.textContent = minutes + ":" + seconds;
            }
    }, 1000);
}

const questions = [
    {
        question: "Where is Bangkok?",
        answers: [{
            answerName: "1. USA", correct: false}, {
            answerName: "2. India", correct: false}, {
            answerName: "3. Japan", correct: false}, {
            answerName: "4. Thailand", correct: true}    
        ]
    },
    {
        question: "Where is Carmen San Diego?",
        answers: [{
            answerName: "1. Alaska", correct: false}, {
            answerName: "2. California", correct: true}, {
            answerName: "3. New York", correct: false}, {
            answerName: "4. Alabama", correct: false}    
        ]
    }, 
    {
     question: "Where is Las Vegas?",
     answers: [{
        answerName: "1. USA", correct: true}, {
        answerName: "2. India", correct: false}, {
        answerName: "3. Japan", correct: false}, {
        answerName: "4. Thailand", correct: false}    
        ]
    },
    {
        question: "Where is Tokyo?",
        answers: [{
        answerName: "1. USA", correct: false}, {
        answerName: "2. India", correct: false}, {
        answerName: "3. Japan", correct: true}, {
        answerName: "4. Thailand", correct: false}    
        ]
    }, 
    {
        question: "Where is Taj Mahal?",
        answers: [{
        answerName: "1. USA", correct: false}, {
        answerName: "2. India", correct: true}, {
        answerName: "3. Japan", correct: false}, {
        answerName: "4. Thailand", correct: false}    
        ]
    }
]


var answerQuestion = function(_str) {
    block = questions[index]
    if(_str == "btn-1" && block.answers[0].correct){
        totalCorrect++
    }  else if(_str == "btn-2" && block.answers[1].correct){
        totalCorrect++
    }  else if(_str == "btn-3" && block.answers[2].correct){
        totalCorrect++
    } else if(_str == "btn-4" && block.answers[3].correct){
        totalCorrect++
    } else {
        timer -= 5;
    }
    if(index < questions.length){
        index += 1
        if(index == questions.length) {
          endGame()
        }  else {
            updateQuestion()
        }
    }
}

var endGame = function() {
    document.getElementById("answer-buttons").setAttribute("style", "display: none")
    document.getElementById("submit").setAttribute("style", "")
    document.getElementById("total_score").innerText = totalCorrect
   
    document.getElementById("timer").setAttribute("style", "display: none")
}

var updateQuestion = function() {
    block = questions[index]
    document.getElementById("question").innerText=block.question
    answer1.innerText=block.answers[0].answerName
    answer2.innerText=block.answers[1].answerName
    answer3.innerText=block.answers[2].answerName
    answer4.innerText=block.answers[3].answerName
}

answer1.addEventListener("click", function () {
    answerQuestion("btn-1")
})
answer2.addEventListener("click", function () {
    answerQuestion("btn-2")
})
answer3.addEventListener("click", function () {
    answerQuestion("btn-3")
})
answer4.addEventListener("click", function () {
    answerQuestion("btn-4")
})
start_button.addEventListener("click", function () {
    document.getElementById("answer-buttons").setAttribute("style","")
    start_button.setAttribute("style", "display: none")
    updateQuestion()
    startTimer(document.getElementById('timer'))
})

submit_button.addEventListener("click", function () {

    if(window.localStorage.getItem("highScores")==null) {
        window.localStorage.setItem("highScores",JSON.stringify({}))
    } 
    var initialsObject = JSON.parse(window.localStorage.getItem("highScores"))
    var initials = document.getElementById("myInput").value
    if(initials == ""){
        return
    }
    if(initials in initialsObject){
        if(initialsObject[initials] < totalCorrect){
            initialsObject[initials] = totalCorrect
        }
    } else {
        initialsObject[initials] = totalCorrect
    }
    window.localStorage.setItem("highScores", JSON.stringify(initialsObject))
    console.log(window.localStorage.getItem("highScores"))
    document.getElementById("submit").setAttribute("style", "display: none;")
    displayHighScores(initialsObject) 
})

function displayHighScores(initialsObject){
    document.getElementById("highScores").setAttribute("style", "")
    var sortable = [];
    Object.keys(initialsObject).forEach((key, index) => {
       sortable.push(key) 
    })
    sortable.sort(function(a,b) {
        return initialsObject[b] - initialsObject[a]
    });
    var high_scores_list = document.getElementById("highScores");
    sortable.forEach((key) => {
        var lst_entry = document.createElement("li");
        var textNode = document.createTextNode(key + " " + initialsObject[key]);
        lst_entry.appendChild(textNode);
        high_scores_list.appendChild(lst_entry);
    });

}


window.alert("Let's take a quiz!")