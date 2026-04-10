//dom elements
const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-btn');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const restartButton = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const scoreSpan = document.getElementById('score');
const finalScoreSpan = document.getElementById('final-score');
const maxScoreSpan = document.getElementById('max-score');
const resultMessage = document.getElementById('result-message');
const progressBar = document.getElementById("progress");

//quiz data

const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", isCorrect: false },
            { text: "Madrid", isCorrect: false },
            { text: "Paris", isCorrect: true },
            { text: "Rome", isCorrect: false }
        ],
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", isCorrect: false },    
            { text: "Mars", isCorrect: true },
            { text: "Jupiter", isCorrect: false },
            { text: "Venus", isCorrect: false }
        ],
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", isCorrect: false },   
            { text: "Indian Ocean", isCorrect: false },
            { text: "Arctic Ocean", isCorrect: false },
            { text: "Pacific Ocean", isCorrect: true }
        ],
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", isCorrect: true },
            { text: "Mark Twain", isCorrect: false },
            { text: "Ernest Hemingway", isCorrect: false },
            { text: "F. Scott Fitzgerald", isCorrect: false }
        ],
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Ag", isCorrect: false },
            { text: "Au", isCorrect: true },
            { text: "Gd", isCorrect: false },
            { text: "Go", isCorrect: false }
        ],
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", isCorrect: false },
            { text: "Japan", isCorrect: true },
            { text: "South Korea", isCorrect: false },
            { text: "Thailand", isCorrect: false }
        ],
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "Elephant", isCorrect: false },
            { text: "Blue Whale", isCorrect: true },
            { text: "Giraffe", isCorrect: false },
            { text: "Hippopotamus", isCorrect: false }
        ],
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Leonardo da Vinci", isCorrect: true },
            { text: "Vincent van Gogh", isCorrect: false },
            { text: "Pablo Picasso", isCorrect: false },
            { text: "Claude Monet", isCorrect: false }
        ],
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "1", isCorrect: false },
            { text: "2", isCorrect: true },
            { text: "3", isCorrect: false },
            { text: "5", isCorrect: false }
        ],
    },
    {
        question: "Which language is primarily spoken in Brazil?",  
        answers: [
            { text: "Spanish", isCorrect: false },
            { text: "Portuguese", isCorrect: true },
            { text: "French", isCorrect: false },
            { text: "English", isCorrect: false }
        ],
    }
];

//quiz state wars
let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

//event listeners
startButton.addEventListener('click', startQuiz);
submitBtn.addEventListener('click', submitAnswer);
restartButton.addEventListener('click', restartQuiz);

//functions
function startQuiz() {
    console.log("quiz just started");
    //reset vars
    currentQuestionIndex = 0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion()
}

function showQuestion(){
    //reset state
    answerDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%"

    questionText.textContent = currentQuestion.question

    //explain
    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.textContent = answer.text
        button.classList.add("answer-btn")

        //dataset- property to store some custom data
        button.dataset.correct = answer.correct

        button.addEventListener("click", selectAnswer)
    })
}

function restarQuiz(){
    console.log("quiz restarted");
}