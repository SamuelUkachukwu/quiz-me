let quiz = [{
        question: `<p>What is the next number after 9? <br> a): 8.  b): 10.  c): 11 </p>`,
        choices: {
            a: false,
            b: true,
            c: false
        }
    },
    {
        question: `<p>What color is a banana? <br> a): blue. b): yellow. c): pink</p>`,
        choices: {
            a: false,
            b: true,
            c: false
        }
    },
    {
        question: `<p>Take 4 away from 10? <br> a): 7. b): 9. c): 6.</p>`,
        choices: {
            a: false,
            b: false,
            c: true
        }
    },
    {
        question: `<p>The day after Monday is...? <br>  a): Teusday. b): Sunday. c): Wednesday</p>`,
        choices: {
            a: true,
            b: false,
            c: false
        }
    },
    {
        question: `<p>Which is longer a Car or a skeateboard? <br> a): Skateboard. b): None. c): Car</p>`,
        choices: {
            a: false,
            b: false,
            c: true
        }
    },
    {
        question: `<p>Counting up from 40, what number comes next? <br> a): 45. b): 41. c): 39</p>`,
        choices: {
            a: false,
            b: true,
            c: false
        }
    },
    {
        question: `<p>How many Months are there in a year? <br>  a): 9. b): 10. c): 12</p>`,
        choices: {
            a: false,
            b: false,
            c: true
        }
    },
    {
        question: `<p>Seventh Letter of the Alphabet? <br> a): G. b): R. c): F</p>`,
        choices: {
            a: true,
            b: false,
            c: false
        }
    },
    {
        question: `<p> How many pockets does a snooker table have? <br> a): 7 . b): 6.  c): 5. </p>`,
        choices: {
            a: false,
            b: true,
            c: false
        }
    },
    {
        question: `<p> On which continent is India located? <br> a):Asia . b):Africa .  c): South America </p>`,
        choices: {
            a: true,
            b: false,
            c: false
        }

    },
    {
        question: `<p> Which fairy tale character slept for 100 years? <br> a): Snow White.  b): Cinderella.  c): Sleeping Beauty </p>`,
        choices: {
            a: false,
            b: false,
            c: true
        }

    },
    {
        question: `<p> What is the name of the organ that pumps blood around the body? <br> a): Lungs . b): Heart .  c): Stomach.  </p>`,
        choices: {
            a: false,
            b: true,
            c: false
        }

    },
    {
        question: `<p> What is a baby goat called? <br> a): Kid . b):Chick .  c): Calf  </p>`,
        choices: {
            a: true,
            b: false,
            c: false
        }

    },
    {
        question: `<p> How many days are there in June? <br> a): 28.  b): 31.  c): 30. </p>`,
        choices: {
            a: false,
            b: false,
            c: true
        }

    },
    {
        question: `<p> What is the third planet from the sun? <br> a): Mars. b): Venus.  c): Earth.  </p>`,
        choices: {
            a: false,
            b: false,
            c: true
        }

    },
    {
        question: `<p> In which sport was Muhammad Ali a world champion? <br> a): Boxing. b): Football.  c): Baseball </p>`,
        choices: {
            a: true,
            b: false,
            c: false
        }

    },
    {
        question: `<p> Can an ostrich fly? <br> a): Yes. b): No.  c): May be.  </p>`,
        choices: {
            a: false,
            b: true,
            c: false
        }

    }
];

let trivia = [{
        facts: "A jar of Nutella sells every 2.5 seconds."
    },
    {
        facts: "The world's tallest man was Robert Wadlow from Michigan, America. He measured 8 feet and 2 inches (or 272cm)."
    },
    {
        facts: "'Arachibutyrophobia' is the fear of getting peanut bar stuck to the roof of your mouth."
    },
    {
        facts: "There are 31,557,600 seconds in a year."
    },
    {
        facts: "A hippopotamus can run faster than a man."
    },
    {
        facts: "A crocodile cannot stick its tongue out."
    },
    {
        facts: "Most insects hatch from eggs."
    },
    {
        facts: "Pigs can't look up into the sky - it's physically impossible."
    },
    {
        facts: "The shark is the only fish that can blink with both eyes."
    },
    {
        facts: "An ostrich's eye is bigger than its whole brain."
    },
    {
        facts: "Kangaroos can't walk backwards."
    },
    {
        facts: "A dog's nose is like a human finger print - unique to its owner."
    }
]

let color = [{
        colorsA: '#D90479',
        colorsB: '#F2B705'
    },
    {
        colorsA: '#F2CB05',
        colorsB: '##F2CCB6'
    },
    {
        colorsA: '#F2622E',
        colorsB: '#8C170D'
    },
    {
        colorsA: '#F2B680',
        colorsB: '#F2785C'
    },
    {
        colorsA: '#04D939',
        colorsB: '#25262C'
    },
    {
        colorsA: '#6DB4F2',
        colorsB: '#335AA6'
    },
    {
        colorsA: '#29A330',
        colorsB: '#48F052'
    },
    {
        colorsA: '#2487F0',
        colorsB: '#324961'
    }
];

document.addEventListener('DOMContentLoaded', function () {
    let playGame = document.getElementById('playbtn');
    playGame.addEventListener('click', startQuiz);
})

// start game by removing the overlay and populating question area wit new question
let username = document.getElementById('username');
let usernameBase = [];
let message = document.getElementById('error-message');
let overlaytop = document.getElementById('overlay-top');
let userTag = document.getElementById('username-tag')

function startQuiz() {
    if (username.value === '' || username.value == null) {
        message.innerText = `Please Select A UserName`;
    } else if (usernameBase.includes(username.value)) {
        message.innerText = `The Username "${username.value}" Has Been Taken`;
    } else {
        overlaytop.classList.add('overlay-hidden');
        usernameBase.push(username.value)
    }
    userTag.innerHTML = `<p>${username.value}!</p>`;
    shuffleQuestion();
}

// function to shuffleQuestion and display. Code used is Fisher Yates
function shuffleQuestion() {
    for (let i = quiz.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let k = quiz[i]
        quiz[i] = quiz[j]
        quiz[j] = k
    }
    let questions = document.getElementById('questions');
    questions.innerHTML = quiz[0].question;
}

// function to display users answer

let radioBottons = document.querySelectorAll("input[name='answer']");
for (i = 0; i < radioBottons.length; i++) {
    radioBottons[i].addEventListener("change", playerChoice);
}

function playerChoice() {
    let choiceDisplay = document.getElementById('user-choice');
    let selected = document.querySelector("input[name='answer']:checked").value;
    choiceDisplay.innerText = selected;
}

// function to check player answer and data base answer while scoring and counting down questions 

function scorePlayer() {
    let selected = document.querySelector("input[name='answer']:checked").value;
    let displayAnswer = document.getElementById('answer');
    if (selected === 'A' && quiz[0].choices.a === true) {
        showText()
        displayAnswer.innerText = 'Briliant! Keep it up!';
        scoreCount();
        countQuestion();
        shuffleQuestion();
        scrubRadiobuttons();
        setTimeout("removeText()", 3000);
    } else if (selected === 'B' && quiz[0].choices.b === true) {
        showText();
        displayAnswer.innerText = 'Briliant! Keep it up!';
        scoreCount();
        countQuestion();
        shuffleQuestion();
        scrubRadiobuttons();
        setTimeout("removeText()", 3000);
    } else if (selected === 'C' && quiz[0].choices.c === true) {
        showText();
        displayAnswer.innerText = 'Briliant! Keep it up!';
        scoreCount();
        countQuestion();
        shuffleQuestion();
        scrubRadiobuttons();
        setTimeout("removeText()", 3000);
    } else {
        showText();
        displayAnswer.innerText = "wrong! You'll get it next time";
        countQuestion();
        shuffleQuestion();
        scrubRadiobuttons();
        setTimeout("removeText()", 3000);
    }
}
// function to count score 
function scoreCount() {
    let score = document.getElementById('score-numb');
    let value = score.innerHTML
        ++value
    document.getElementById('score-numb').innerHTML = value;
    return value
}

// function to decrease question count
function countQuestion() {
    let questionLeft = document.getElementById('question-numb');
    let valueQ = questionLeft.innerHTML
        --valueQ
    document.getElementById('question-numb').innerHTML = valueQ;

    if (valueQ == 0) {
        let finalScore = document.querySelector('#overlay-bottom');
        finalScore.classList.remove('overlay-hidden');
        let score = document.getElementById('score-numb');
        let finalScoreText = document.getElementById('score-display-txt');
        finalScoreText.innerText = score.innerText;
    }
}

// replay game 
function replayQuiz() {
    let startReplay = document.querySelector('#overlay-bottom');
    startReplay.classList.add('overlay-hidden');
    shuffleQuestion();
    let score = document.getElementById('score-numb');
    score.innerText = 0;
    let questionResetCount = document.getElementById('question-numb');
    questionResetCount.innerText = 15;
    changeColor();
}

function scrubRadiobuttons() {
    //  Shawn Steward stackoverflow on scrubbing radio button input
    document.getElementById("choice-a").checked = false;
    document.getElementById("choice-b").checked = false;
    document.getElementById("choice-c").checked = false;
    let scrubertext = document.getElementById('user-choice');
    scrubertext.innerText = '';
}

// functions for the trivia message
function displayTrivia() {
    //the card flips 
    let triviaCard = document.getElementById('card-box');
    triviaCard.classList.add("flip");

    // trivia is shuffled
    for (let m = trivia.length - 1; m > 0; m--) {
        let n = Math.floor(Math.random() * (m + 1))
        let p = trivia[m]
        trivia[m] = trivia[n]
        trivia[n] = p
    }
    // trivia is displayed on inner text
    let triviamessage = document.getElementById('new-trivia');
    triviamessage.innerText = trivia[0].facts;
}

function unflipCard() {
    // card flips back displaying question area
    let triviaCard = document.getElementById('card-box');
    triviaCard.classList.remove("flip");
}

// change overlay color
function changeColor() {
    let overlayChangeTwo = document.getElementById('overlay-bottom');
    let colorIndex = (Math.floor(Math.random() * 5));
    overlayChangeTwo.style.background = "radial-gradient(" + color[colorIndex].colorsA + ", " + color[colorIndex].colorsB + ")";
}

function removeText() {
    document.getElementById('answer').style.visibility = "hidden"
}

function showText() {
    document.getElementById('answer').style.visibility = "visible"
}