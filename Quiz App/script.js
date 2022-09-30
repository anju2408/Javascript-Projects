const quizdata = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    }, {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'C++',
        correct: 'a',

    }, {
        question: 'Who is the President of US?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Salnado',
        d: 'Mihai Andrei',
        correct: 'b',
    }, {
        question: 'What does HTML satnds for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Json Object Notation',
        d: 'Application Programming Interface',
        correct: 'a',
    }, {
        question: 'What is was JavaScript launched',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'None of the above',
        correct: 'b',

    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizdata[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;

        }
    });
    return answer;

}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizdata[currentQuiz].correct) {
            score++;

        }
        currentQuiz++;

        if (currentQuiz < quizdata.length) {
            loadQuiz();

        }
        else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizdata.length} question.</h2> <button onclick = "location.reload()">Reload</button>`;
        }
    }

});