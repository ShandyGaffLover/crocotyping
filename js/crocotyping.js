
const interval = 5000;
const maximumRound = 5;
let roundCount = 0;
let timeId;
let nextCharacterNum = 1;
let movingCrocodile;
startGame();

function startGame(){
    const bd = document.querySelector('body');
    bd.addEventListener('keyup',handleKeyup);
    timeId = setInterval(execRound, interval);
}
function execRound(){
    if(roundCount >= maximumRound){
        clearInterval(timeId);
        showGameResult();
        return;
    }
    setQuiz();
    movingCrocodile = startMovingCrocodile();
    roundCount++;
}
function showGameResult(){
    alert("game over");
}
function setQuiz(){
    const tp = document.querySelector('#tp');
    const prevQuiz = document.querySelector('#quiz');
    if(prevQuiz !== null){
        document.querySelector('#quiz').remove(); 
    }
    const quiz = `<table id='quiz'><tbody><tr id='quizRow'><td id='td1'>a</td><td id='td2'>s</td><td id='td3'>d</td><td id='td4'>f</td></tr></tbody></table>`
    tp.insertAdjacentHTML('afterend',quiz);
    nextCharacterNum = 1;
}
function handleKeyup(event){
    const nextCharacter = document.querySelector('#td'+nextCharacterNum);
    if(event.key===nextCharacter.textContent){
        updateQuizPhraseState();
    }
    if(nextCharacter===document.querySelector('#quizRow').lastElementChild){
        movingCrocodile.pause();
    }
}
function updateQuizPhraseState(){
    const nextCharacter = document.querySelector('#td'+nextCharacterNum);
    nextCharacter.style.color='lightgrey';
    nextCharacterNum++;
}
function startMovingCrocodile(){
    const elem = document.querySelector('#crocodile');
    const movingCrocodile = elem.animate(
        {
            transform:['translateX(200px) rotate(0deg)','translateX(0px) rotate(0deg)']
        },
        {
            duration: interval,
        }
    );
    return movingCrocodile;
}

