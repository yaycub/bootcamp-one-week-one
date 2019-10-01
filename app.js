import { isYes } from './functions.js';
const myButton = document.getElementById('action-button');
const testResults = document.getElementById('quiz-answers');
let testScore = 0;

myButton.addEventListener('click', () => {
    alert('Welcome to the best quiz ever!');
    const userName = prompt('What is your name?');
    const myConfirmation = confirm('You want to take the best quiz, ok?');
    if(myConfirmation === false) return;
   
    const userAnswerOne = prompt(userName + ', does Jacob walk a dog named "Howl"?');
    const sanitizedUserAnswerOne = userAnswerOne
        .toLowerCase()
        .trim();
    const answerOne = document.getElementById('question-one');
    const functionAnswerOne = isYes(sanitizedUserAnswerOne);
    answerOne.textContent = sanitizedUserAnswerOne + ' and that is ' + functionAnswerOne;
    if(sanitizedUserAnswerOne === 'yes') testScore ++;

    const userAnswerTwo = prompt(userName + ', does Jacob like video games?');
    const sanitizedUserAnswerTwo = userAnswerTwo
        .toLowerCase()
        .trim();
    const answerTwo = document.getElementById('question-two');
    const functionAnswerTwo = isYes(sanitizedUserAnswerTwo);
    answerTwo.textContent = sanitizedUserAnswerTwo + ' and that is ' + functionAnswerTwo;
    if(sanitizedUserAnswerTwo === 'yes') testScore ++;

    const userAnswerThree = prompt(userName + ', is Stella a cat?');
    const sanitizedUserAnswerThree = userAnswerThree
        .toLowerCase()
        .trim();
    const answerThree = document.getElementById('question-three');
    const functionAnswerThree = isYes(sanitizedUserAnswerThree);
    answerThree.textContent = sanitizedUserAnswerThree + ' and that is ' + functionAnswerThree;
    if(sanitizedUserAnswerThree === 'yes') testScore ++;
    
    const testPercent = document.getElementById('test-score');
    const uniqueTestScore = Math.floor((testScore / 3) * 100);
    testPercent.textContent = uniqueTestScore;

    alert('Your test results will display below the "Take My Quiz" button!')

    if(testScore === 3) {
        document.getElementById('test-score').style.cssText = 'color:green';
    } else { 
        document.getElementById('test-score').style.cssText = 'color:red';
    }

    isYes(sanitizedUserAnswerOne);
    isYes(sanitizedUserAnswerTwo);
    isYes(sanitizedUserAnswerThree);

    document.getElementById('quiz-answers').style.cssText = 'visibility:visible';
    
});



