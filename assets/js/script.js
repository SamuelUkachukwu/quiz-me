//display trivia
import { trivia } from './data.js';

let display = document.getElementById("trivia")


function getRandomTrivia(triviaArray, count = 50) {
    return [...triviaArray]
        .sort(() => Math.random() - 0.5)
        .slice(0, count);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayTrivia() {
    const randomTrivia = getRandomTrivia(trivia, 50);
    while (true) {
        for (let i = 0; i < randomTrivia.length; i++) {
            display.innerHTML = randomTrivia[i].trivia;
            await delay(10000);
        }
    }

}

displayTrivia();


