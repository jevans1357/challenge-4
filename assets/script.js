const answer1 = document.getElementById("btn-1")
const answer2 = document.getElementById("btn-2")
const answer3 = document.getElementById("btn-3")
const answer4 = document.getElementById("btn-4")
const start_button = document.getElementById("start_button")

const questions = [
    {
        question: "Where is Bangkok?",
        answers: [{
            answerName: "USA", correct: false}, {
            answerName: "India", correct: false}, {
            answerName: "Japan", correct: false}, {
            answerName: "Thailand", correct: true}    
        ]
    },
    {
        question: "Where is Carmen San Diego?",
        answers: [{
            answerName: "Alaska", correct: false}, {
            answerName: "California", correct: true}, {
            answerName: "New York", correct: false}, {
            answerName: "Alabama", correct: false}    
        ]
    }, 
    {
     question: "Where is Las Vegas?",
     answers: [{
        answerName: "USA", correct: true}, {
        answerName: "India", correct: false}, {
        answerName: "Japan", correct: false}, {
        answerName: "Thailand", correct: false}    
        ]
    },
    {
        question: "Where is Tokyo?",
        answers: [{
        answerName: "USA", correct: false}, {
        answerName: "India", correct: false}, {
        answerName: "Japan", correct: true}, {
        answerName: "Thailand", correct: false}    
        ]
    }, 
    {
        question: "Where is Taj Mahal?",
        answers: [{
        answerName: "USA", correct: false}, {
        answerName: "India", correct: true}, {
        answerName: "Japan", correct: false}, {
        answerName: "Thailand", correct: false}    
        ]
    }
]

var index = 0
var totalCorrect = 0

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
    }
    if(index < questions.length){
        index += 1
        if(index == questions.length) {
            document.getElementById("question").setAttribute("style","display:none")
            answer1.setAttribute("style", "display: none")
            answer2.setAttribute("style", "display: none")
            answer3.setAttribute("style", "display: none")
            answer4.setAttribute("style", "display: none")

            document.getElementById("score").setAttribute("style", "")
            document.getElementById("total_score").setAttribute("style", "")
            document.getElementById("total_score").innerText = totalCorrect
        }  else {
            updateQuestion()
        }
    }
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
    document.getElementById("question").setAttribute("style","")
    document.getElementById("answer-buttons").setAttribute("style","")
    start_button.setAttribute("style", "display: none")
    document.getElementById("hello", "display: none" )
    updateQuestion()
})



