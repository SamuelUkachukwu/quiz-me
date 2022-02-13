let quiz = [{
        question: 'What is the next number after 9?  a): 8. b): 10. c): 11',
        choices: {
            a: false,
            b: true,
            c: false
        }
    },
    {
        question: 'What color is a banana? a): blue. b): yellow. c): pink',
        choices: {
            a: false,
            b: true,
            c: false
        }
    },
    {
        question: 'Take 4 away from 10? a): 7. b): 9. c): 6.',
        choices: {
            a: false,
            b: false,
            c: true
        }
    },
    {
        question: 'The day after Monday is...?  a): Teusday. b): Sunday. c): Wednesday',
        choices: {
            a: true,
            b: false,
            c: false
        }
    },
    {
        question: 'Which is longer a Car or a skeateboard?  a): Skateboard. b): None. c): Car',
        choices: {
            a: false,
            b: false,
            c: true
        }
    },
    {
        question: 'Counting up from 40, what number comes next?  a): 45. b): 41. c): 39',
        choices: {
            a: false,
            b: true,
            c: false
        }
    },
    {
        question: 'How many Months are there in a year?  a): 9. b): 10. c): 12',
        choices: {
            a: false,
            b: false,
            c: true
        }
    },
    {
        question: 'Seventh Letter of the Alphabet?  a): G. b): R. c): F',
        choices: {
            a: true,
            b: false,
            c: false
        }
    }
];

let username = document.getElementById('username');
let usernameBase = [];
let message = document.getElementById('error-message')
let gameBox = document.querySelector('.main-container');
console.log(gameBox.innerHTML);

// initiate start quiz game
let start = document.getElementById('playbtn');
start.addEventListener('click', startGame)

function startGame() {
    if (username.value === '' || username.value == null) {
        console.log('user name is empty');
        message.innerText = `Please Select A UserName`;
    } else if (usernameBase.includes(username.value)) {
        message.innerText = `The Username "${username.value}" Has Been Taken`;
    } else {
        gameBox.innerHTML =
            `<section class="quiz-container">
            <div class="card">
                <div class="card-back">
                    <div class="info-area">
                        <p id="trivia">Do You Know... </p>
                    </div>
                    <div class="return-btn">
                        <button id="return" class="fancy-btn">Return</button>
                    </div>
                </div>
                <div class="card-front">
                    <div id="username-tag">
                        <p> Welcome: ${username.value}</p>
                    </div>
                    <div class="info-area">
                        <p id="questions"></p>
                    </div>
                    <div class="info-area info-area-reaction">
                        <p id="answer"></p>
                    </div>
                    <div class="flip-card">
                        <button id="answer-btn" class="fancy-btn">Trivia</button>
                        <P id="user-choice" class="fancy-btn">A</P>
                        <button id="next-question" onclick="scorePlayer();" class="fancy-btn">NEXT</button>
                    </div>
                </div>
            </div>
        </section>
        <div class="choice-box">
            <div class="form-two">
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
            </div>
            <div class="score-counter">
                <p class="score-txt">Score: <span id="score-numb">0</span></p>
            </div>
        </div>`;
        usernameBase.push(username.value)

    }
    shuffleQuestion();
}

// shuffle question and display fisher yeates method
function shuffleQuestion() {
    for (let i = quiz.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let k = quiz[i]
        quiz[i] = quiz[j]
        quiz[j] = k
    }
    let questions = document.getElementById('questions');
    questions.innerText = quiz[0].question;
    console.log(quiz[0].choices.a)
}

// function to check players answer and score
function scorePlayer() {
    let button1 = document.getElementById('choice-a');
    let button2 = document.getElementById('choice-b');
    let button3 = document.getElementById('choice-c');
    let displayAnswer = document.getElementById('answer');

    if (button1.checked == true && quiz[0].choices.a == true) {
        console.log('hello zombie');
        console.log(button1.value);
        displayAnswer.innerText = 'Briliant!';
        scoreCount()
        shuffleQuestion();
    } else if (button2.checked == true && quiz[0].choices.b == true) {
        displayAnswer.innerText = 'Briliant!';
        console.log('good morning zombie');
        console.log(button2.value);
        scoreCount()
        shuffleQuestion();
    } else if (button3.checked == true && quiz[0].choices.c == true) {
        displayAnswer.innerText = 'Briliant!';
        console.log('good morning zombie');
        console.log(button2.value);
        scoreCount()
        shuffleQuestion();
    } else {
        console.log('this zombie sef');
        displayAnswer.innerText = 'wrong!';
        shuffleQuestion();
    }
}
// score counter function
function scoreCount() {
    let score = document.getElementById('score-numb');
    let value = score.innerHTML
        ++value
    console.log(value);
    document.getElementById('score-numb').innerHTML = value;
}


// wait for the DOM to finish loading before running the game
// get the play game element and add the start function to it
// document.addEventListener('DOMContentLoaded', function () {
//     let playGame = document.getElementById('playbtn');
//     playGame.addEventListener('click', startQuiz);
// })