// wait for the DOM to finish loading before running the game
// get the play game element and add the start function to it
document.addEventListener('DOMContentLoaded', function () {
    let playGame = document.getElementById('playbtn');
    playGame.addEventListener('click', startQuiz);
})

function startQuiz(event) {
    event.preventDefault();
    console.log('htrddd')
    let gameBox = document.querySelector('.main-container');
    gameBox.innerHTML =
        `<section class="quiz-container">
            <div class="card">
                <div class="card-back">
                    <div class="question-area">
                        <p id="answer">question field area </p>
                    </div>
                    <div class="return-btn">
                        <button id="return" class="fancy-btn">return</button>
                    </div>
                </div>
                <div class="card-front">
                    <div id="usernameTag">
                        <p>${username}</p>
                    </div>
                    <div class="question-area">
                        <p id="question">story section area</p>
                    </div>
                    <div class="flip-card">
                        <button id="answer-btn" class="fancy-btn">Answer!</button>
                        <button id="next-question" class="fancy-btn">Next</button>
                    </div>
                </div>
            </div>
        </section>
        <div class="choice-box">
            <form class="form-two" action="">
                <input type="radio" id="choice-a" class="hidebtn" name="answer" value="a">
                <label for="choice-a" class="label-tags">
                    <div class="roundbtn">
                        <p>A</p>
                    </div>
                </label>
                <input type="radio" id="choice-b" class="hidebtn" name="answer" value="b">
                <label for="choice-b" class="label-tags">
                    <div class="roundbtn">
                        <p>B</p>
                    </div>
                </label>
                <input type="radio" id="choice-c" class="hidebtn" name="answer" value="c">
                <label for="choice-c" class="label-tags">
                    <div class="roundbtn">
                        <p>C</p>
                    </div>
                </label>
            </form>
            <div class="score-counter">
                <p class="score-txt">Score: <span class="score-numb">0</span></p>
            </div>
        </div>`;
            shuffleQuestion();
    displayQuestion();
}

function shuffleQuestion() {
    for (let i = quiz.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = quiz[i];
        quiz[i] = quiz[j];
        quiz[j] = temp;
        return temp
    }
}

function displayQuestion() {

}

function checkAnswer() {

}

function incrementScore() {

}

const quiz = [{
        question: 'What color is a banana? a): blue. b): yellow. c): black.',
        answer: [{
            a: 'blue',
            correct: false
        }, {
            b: 'yellow',
            correct: true
        }, {
            c: 'black',
            correct: false
        }]
    },
    {
        question: 'How do you spell ball? a): all. b): Call. c): Ball.',
        answer: [{
            a: 'all',
            correct: false
        }, {
            b: 'Call',
            correct: false
        }, {
            c: 'Ball',
            correct: true
        }]
    },
    {
        question: 'The day after Monday is...?  a): Teusday. b): Wednesday c): Sunday',
        answer: [{
            a: 'Teusday',
            correct: true
        }, {
            b: 'Wednesday',
            correct: false
        }, {
            c: 'Sunday',
            correct: false
        }]
    }
];