import { questions } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    let currentQuestion = null;
    let currentBlock = null;
    const form = document.getElementById('game-form');

    const section = document.querySelector('.content-section');
    const radios = document.querySelectorAll('input[name="difficulty"]');

    const modal = document.getElementById('modal');

    const closeBtn = document.getElementById('close-modal');
    let totalQuestionBox = document.getElementById('total-question');

    let totalQuestion = 0;
    let questionsAttempted = 0;

    const blocks = [];
    let selected = [];

    let score = 0;

    const difficultyRadios = document.querySelectorAll('.difficulty-bar input[type="radio"]');
    const modalQuestion = document.getElementById('modal-question');
    const modalOptions = document.getElementById('modal-options');

    for (let i = 1; i <= 50; i++) {
        const block = document.createElement('div');
        block.className = 'block';
        block.textContent = i;
        block.dataset.index = i - 1;
        blocks.push(block);
        section.appendChild(block);
    }

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    //leap of fate code
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    function pickNRandom(arr, n) {
        const copy = [...arr];
        const result = [];

        for (let i = 0; i < n; i++) {
            if (copy.length === 0) break;
            const index = Math.floor(Math.random() * copy.length);
            result.push(copy.splice(index, 1)[0]);
        }

        return result;
    }

    difficultyRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.checked) {

                difficultyRadios.forEach(r => {
                    if (r !== radio) {
                        r.disabled = true;
                    }
                });
            }

            const level = radio.value;
            let counts;

            if (level === "beginner") {
                counts = { easy: 10, medium: 3, hard: 2 };
                totalQuestion = 15;
                totalQuestionBox.innerText = totalQuestion;
            } else if (level === "intermediate") {
                counts = { easy: 5, medium: 10, hard: 5 };
                totalQuestion = 20;
                totalQuestionBox.innerText = totalQuestion;
            } else if (level === "advanced") {
                counts = { easy: 5, medium: 10, hard: 15 };
                totalQuestion = 30;
                totalQuestionBox.innerText = totalQuestion;
            }

            const easy = questions.filter(q => q.difficulty === "easy");
            const medium = questions.filter(q => q.difficulty === "medium");
            const hard = questions.filter(q => q.difficulty === "hard");

            selected = [
                ...pickNRandom(easy, counts.easy),
                ...pickNRandom(medium, counts.medium),
                ...pickNRandom(hard, counts.hard)
            ];

            const shuffledBlocks = shuffle([...blocks]);

            for (let i = 0; i < selected.length; i++) {
                const block = shuffledBlocks[i];
                block.dataset.index = i;
                block.classList.add('has-question');
            }
            blocks.forEach(block => {
                if (block.classList.contains('has-question')) {
                    const index = parseInt(block.dataset.index);
                    const question = selected[index];

                    //change color of block with question
                    const color = question.color || (
                        question.difficulty === 'easy' ? '#0c7a3aff' :
                            question.difficulty === 'medium' ? '#ffae00ff' :
                                question.difficulty === 'hard' ? '#ca200dff' :
                                    '#888'
                    );

                    block.style.backgroundColor = color;
                } else {
                    block.classList.add('no-questions');
                    block.style.backgroundColor = 'transparent';
                }
            });
        });
    });

    //EventListener to handle the opening and clicking of block and modal
    section.addEventListener('click', (e) => {
        const block = e.target;

        if (block.classList.contains('block') && block.classList.contains('has-question')) {
            const questionIndex = block.dataset.index;

            //currentQuestion set globally remember
            currentBlock = block;
            currentQuestion = selected[questionIndex];

            if (currentQuestion) {
                modal.style.display = 'block'; // Show modal
                modalQuestion.textContent = currentQuestion.question;
                modalOptions.innerHTML = '';

                const randomOptions = shuffle([...currentQuestion.options]);

                randomOptions.forEach(option => {
                    const li = document.createElement('li');
                    const label = document.createElement('label');
                    const input = document.createElement('input');

                    input.type = 'radio';
                    input.name = 'quiz-option';
                    input.value = option;

                    label.appendChild(input);
                    label.appendChild(document.createTextNode(' ' + option));
                    li.appendChild(label);
                    modalOptions.appendChild(li);
                });
            }
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!currentQuestion || !currentBlock) return;

        const optionSelected = form.querySelector('input[name="quiz-option"]:checked');
        if (!optionSelected) {
            alert("Please select an option before submitting!");
            return;
        }

        const userAnswer = optionSelected.value;

        if (userAnswer === currentQuestion.answer) {
            showGradeMessage("Correct!");
            playerScore(true, totalQuestion);
            console.log('hellllloooo:', totalQuestion)
        } else {
            showGradeMessage("Incorrect!");
            playerScore(false, totalQuestion);
        }

        currentBlock.classList.remove('has-question');
        currentBlock.classList.add('answered');


        modal.style.display = 'none';
        currentQuestion = null;
        currentBlock = null;
    });

    function playerScore(isCorrect, totalQuestion) {
        if (isCorrect) {
            score += 1;
        }
        questionsAttempted += 1;
        const scoreDisplay = document.getElementById('score-display');
        scoreDisplay.textContent = `Score: ${score}`;
        if (questionsAttempted === totalQuestion) {
            showFinalScore(score, totalQuestion);
            console.log(`This is your Final Score: ${score} / ${totalQuestion}`)
        }
    }

    function showFinalScore(score, totalQuestion) {
        const pervScoreModal = document.querySelector('.final-modal');
        if (pervScoreModal) pervScoreModal.remove();

        const finalModal = document.createElement('div');
        finalModal.classList.add('final-modal');

        const finalScore = document.createElement('div');
        finalScore.classList.add('final-score');

        const scoreHeading = document.createElement('h1');
        scoreHeading.classList.add('score');
        scoreHeading.textContent = `${score}/${totalQuestion}`;


        const scoreText = document.createElement('h4');
        scoreText.classList.add('score');
        scoreText.id = 'score-text';

        const text = 'final\u00A0\u00A0score';
        [...text].forEach((char, i) => {
            const span = document.createElement("span");
            span.textContent = char;
            span.style.animationDelay = `${i * 0.1}s`;
            scoreText.appendChild(span);
        });

        const resetBar = document.createElement('div');
        resetBar.classList.add('reset-bar');

        const resetBtn = document.createElement('span');

        resetBtn.classList.add('reset');
        resetBtn.textContent = 'reset';

        resetBar.appendChild(resetBtn);

        finalScore.appendChild(scoreHeading);
        finalScore.appendChild(scoreText);
        finalScore.appendChild(resetBar);
        finalModal.appendChild(finalScore);
        document.body.appendChild(finalModal);
    }

    document.addEventListener('click', e => {
        if (e.target.classList.contains('reset')) {
            score = 0
            totalQuestion = 0;
            questionsAttempted = 0;
            totalQuestionBox.innerText = totalQuestion;

            difficultyRadios.forEach(r => {
                r.disabled = false;
                r.checked = false;
            });
            blocks.forEach(block => {
                delete block.dataset.index;
                block.textContent = block.textContent;
                block.classList.remove('has-question', 'no-questions', 'answered');
                block.style.backgroundColor = '';
            });

            document.querySelector('.final-modal')?.remove();
        }
    });


    function showGradeMessage(message) {

        let container = document.querySelector('.confetti-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'confetti-container';
            document.body.appendChild(container);
        }

        container.innerHTML = '';

        const gradeText = document.createElement('h4');
        gradeText.className = 'grade';
        gradeText.textContent = message;
        container.appendChild(gradeText);

        backgroundSparkle(80, container);

        function backgroundSparkle(count, container) {
            for (let i = 0; i < count; i++) {
                const sparkle = document.createElement('div');
                sparkle.classList.add('confetti');

                sparkle.style.left = `${Math.random() * 100}%`;
                sparkle.style.top = `${Math.random() * 100}%`;

                const size = Math.random() * 8 + 4;
                sparkle.style.width = `${size}px`;
                sparkle.style.height = `${size}px`;
                sparkle.style.background = `radial-gradient(circle, hsl(${Math.random() * 360}, 100%, 75%) 20%, transparent 80%)`;
                sparkle.style.animationDelay = `${Math.random() * 1}s`;

                container.appendChild(sparkle);
                setTimeout(() => sparkle.remove(), 1500);
            }
        }

        setTimeout(() => {
            fadeOutAndRemove(container, 1500);
        }, 1500);

        function fadeOutAndRemove(element, duration = 1500) {
            element.classList.add('fade-out');
            setTimeout(() => element.remove(), duration);
        }
    }


});


