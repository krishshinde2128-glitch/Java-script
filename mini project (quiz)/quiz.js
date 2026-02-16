const questionElement = document.getElementById("question-text");
const optionButtons = document.getElementById("option-buttons");
const nextButton = document.getElementById("next-btn");

let score = 0;
let askedQuestions = []; 

function startQuiz() {
    score = 0;
    askedQuestions = [];
    nextButton.classList.add("hide");
    showQuestion();
}

function getRandomQuestionData() {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 11);
    } while (askedQuestions.includes(randomNumber));

    askedQuestions.push(randomNumber);

    switch(randomNumber) {
        case 0: return { 
            q: "Which is a compiled language?", 
            a: [
                {t:"Python", c:false}, 
                {t:"C++", c:true}, 
                {t:"JS", c:false}, 
                {t:"HTML", c:false}
            ] 
        };
        case 1: return { 
            q: "Python keyword for functions?",
            a: [
                {t:"func", c:false}, 
                {t:"def", c:true}, 
                {t:"function", c:false}
            ]
         };
        case 2: return { 
            q: "Shell command to print text?", 
            a: [
                {t:"print", c:false}, 
                {t:"echo", c:true}, 
                {t:"output", c:false}
            ] 
        };
        case 3: return { 
            q: "Git command to save locally?", 
            a: [
                {t:"push", c:false},
                {t:"commit", c:true}, 
                {t:"add", c:false}
            ] 
        };
        case 4: return { 
            q: "CSS property for text color?", 
            a: [
                {t:"font", c:false}, 
                {t:"color", c:true}, 
                {t:"bg", c:false}
            ] 
        };
        case 5: return {
            q: "Inside which HTML element do we put the JavaScript?",
            a:[
                {t:"<js>", c:false},
                {t:"<scripting>", c:false},
                {t:"<javascript>", c:false},
                {t:"<script>" , c:true}
            ]
        };
        case 6: return {
            q: "Is Python code compiled or interpreted?",
            a:[
                {t:"Python code is both compiled and interpreted", c:true},
                {t:"Python code is neither compiled nor interpreted", c:false},
                {t:"Python code is only compiled", c:false},
                {t:" Python code is only interpreted View Answer" , c:false}
            ]
        };
        case 7: return {
            q: "Which of the following extension is used for user-defined header file in c++",
            a:[
                {t:"py", c:false},
                {t:"cpp", c:true},
                {t:"html", c:false},
                {t:"hehe" , c:false}
            ]
        };
        case 8: return {
            q: "Where is the correct place to insert a JavaScript?",
            a:[
                {t:" The <head> section", c:false},
                {t:" The <body> section", c:false},
                {t:" Both the <head> section and the <body> section are correct", c:true},
            ]
        };
        case 9: return {
            q: "Which data type is immutable?",
            a:[
                {t:"list", c:false},
                {t:"dictionary", c:false},
                {t:"set", c:false},
                {t:"tuple" , c:true}
            ]
        };
         case 10: return {
            q: "Which of the following is the correct header file for input/output?",
            a:[
                {t:"stdio.h", c:false},
                {t:"iostream", c:true},
                {t:"conio.h", c:false},
                {t:"stream.h" , c:false}
            ]
            
        };
    }
}

function showQuestion() {
    nextButton.classList.add("hide");
    let data = getRandomQuestionData();
    questionElement.innerText = data.q;

    for (let i = 0; i < 4; i++) {
        let btn = document.getElementById("btn" + i);
        btn.classList.remove("correct", "wrong");
        btn.disabled = false;

        if (data.a[i]) {
            btn.style.display = "block";
            btn.innerText = data.a[i].t;
            btn.onclick = function() {
                if (data.a[i].c === true) {
                    btn.classList.add("correct");
                    score = score + 1;
                } else {
                    btn.classList.add("wrong");
                }
            
                for (let j = 0; j < 4; j++) document.getElementById("btn" + j).disabled = true;
                nextButton.classList.remove("hide");
            };
        } else {
            btn.style.display = "none";
        }
    }
}

function resetState() {
    nextButton.classList.add("hide");
    optionButtons.innerHTML = "";
}

nextButton.onclick = () => {
    if (askedQuestions.length < 10) { 
        showQuestion();
    } else {
        questionElement.innerText = `Finished! Score: ${score}/${askedQuestions.length}`;
        optionButtons.innerHTML = "";
        nextButton.innerText = "Restart";
        
        nextButton.onclick = () => location.reload();
    }
};


startQuiz();