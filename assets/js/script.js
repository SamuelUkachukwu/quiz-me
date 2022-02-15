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
        console.log('user name is empty');
        message.innerText = `Please Select A UserName`;
    } else if (usernameBase.includes(username.value)) {
        message.innerText = `The Username "${username.value}" Has Been Taken`;
    } else {
        overlaytop.classList.add('overlay-hidden');
        usernameBase.push(username.value)
    }
    userTag.innerHTML = `<p> Go ${username.value}!</p>`;
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
    questions.innerText = quiz[0].question;
    console.log(quiz[0].choices.a);
    console.log(quiz[0].question);
}

// function to display users answer

let radioBottons = document.querySelectorAll("input[name='answer']");
console.log(radioBottons)
for (i = 0; i < radioBottons.length; i++) {
    console.log(radioBottons[i]);
    radioBottons[i].addEventListener("change", playerChoice)
}

function playerChoice() {
    let choiceDisplay = document.getElementById('user-choice')
    let selected = document.querySelector("input[name='answer']:checked").value;
    console.log(selected);
    choiceDisplay.innerText = selected;
}

// function to check player answer and data base answer while scoring and counting down questions 

function scorePlayer() {
    let selected = document.querySelector("input[name='answer']:checked").value;
    let displayAnswer = document.getElementById('answer');
    if (selected === 'A' && quiz[0].choices.a === true) {
        displayAnswer.innerText = 'Briliant!';
        console.log(selected);
        scoreCount()
        countQuestion()
        shuffleQuestion()
        scrubRadiobuttons();
    } else if (selected === 'B' && quiz[0].choices.b === true) {
        displayAnswer.innerText = 'Briliant!';
        console.log(selected);
        scoreCount()
        countQuestion()
        shuffleQuestion();
        scrubRadiobuttons()
    } else if (selected === 'C' && quiz[0].choices.c === true) {
        displayAnswer.innerText = 'Briliant!';
        console.log(selected);
        scoreCount()
        countQuestion()
        shuffleQuestion();
        scrubRadiobuttons()
    } else {
        displayAnswer.innerText = 'wrong!';
        countQuestion()
        shuffleQuestion();
        scrubRadiobuttons();
    }
}
// function to count score 
function scoreCount() {
    let score = document.getElementById('score-numb');
    let value = score.innerHTML
        ++value
    console.log(value);
    document.getElementById('score-numb').innerHTML = value;
    return value
}

// function to decrease question count
function countQuestion() {
    let questionLeft = document.getElementById('question-numb');
    let valueQ = questionLeft.innerHTML
        --valueQ
    console.log(valueQ);
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
    console.log(trivia[0].facts);
}

function unflipCard() {
    // card flips back displaying question area
    let triviaCard = document.getElementById('card-box');
    triviaCard.classList.remove("flip");

}