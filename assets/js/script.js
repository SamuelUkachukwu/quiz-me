let username = document.getElementById('username');
let usernameBase = [];
let message = document.getElementById('error-message')
let gameBox = document.querySelector('.main-container');
console.log(gameBox.innerHTML);
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
                <div class="question-area">
                    <p id="answer">question field area </p>
                </div>
                <div class="return-btn">
                    <button id="return" class="fancy-btn">return</button>
                </div>
            </div>
            <div class="card-front">
                <div id="usernameTag">
                    <p> Welcome: ${username.value}</p>
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

        

    }

}







// wait for the DOM to finish loading before running the game
// get the play game element and add the start function to it
// document.addEventListener('DOMContentLoaded', function () {
//     let playGame = document.getElementById('playbtn');
//     playGame.addEventListener('click', startQuiz);
// })