const questionElement = document.getElementById("question-text");
const optionButtons = document.getElementById("option-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// 1. Your Question Bank
const questions = [
    {
        question: "Which language runs in a web browser?",
        answers: [
            { text: "Java", correct: false },
            { text: "C", correct: false },
            { text: "JavaScript", correct: true },
            { text: "Python", correct: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Central Style Sheets", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Cascading Simple Sheets", correct: false },
            { text: "Cars SUVs Sailboats", correct: false }
        ]
    }
];

// 2. Start the Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

// 3. Display Question and Options
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.onclick = () => selectAnswer(button, answer.correct);
        optionButtons.appendChild(button);
    });
}

// 4. Handle Answer Selection
function selectAnswer(button, isCorrect) {
    if (isCorrect) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }
    
    // Disable all buttons after clicking
    Array.from(optionButtons.children).forEach(btn => btn.disabled = true);
    nextButton.classList.remove("hide");
}

// 5. Move to Next or Show Results
nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
};

function resetState() {
    nextButton.classList.add("hide");
    optionButtons.innerHTML = "";
}

function showScore() {
    document.getElementById("quiz-box").classList.add("hide");
    const resultBox = document.getElementById("result-box");
    resultBox.classList.remove("hide");
    document.getElementById("score-text").innerText = `You scored ${score} out of ${questions.length}!`;
}

startQuiz();