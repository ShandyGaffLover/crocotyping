
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
    document.querySelector('#hammer').style.visibility='hidden';
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
    const quiz = createQuiz();
    tp.insertAdjacentHTML('afterend',quiz);
    nextCharacterNum = 1;
}
function createQuiz(){
    const dice = Math.floor(Math.random()*6);
    if(dice%6===1){
        return createQuizHtml('jkl;');
    }
    if(dice%6===2){
        return createQuizHtml('sees');
    }
    if(dice%6===3){
        return createQuizHtml('juuj');
    }
    if(dice%6===4){
        return createQuizHtml('fttf');
    }
    if(dice%6===5){
        return createQuizHtml('kiik');
    }
    return createQuizHtml('asdf');
}
function createQuizHtml(phrase){
    let tableTag = `<table id='quiz' align='center'><tbody><tr id='quizRow'>`;
    for(let i=0;i<phrase.length;i++){
        const tdTag = `<td id='td${i+1}'>${phrase[i]}</td>`;
        tableTag += tdTag;
    }
    tableTag += `</tr></tbody></table>`;
    return tableTag;
}
function handleKeyup(event){
    const nextCharacter = document.querySelector('#td'+nextCharacterNum);
    if(event.key===nextCharacter.textContent){
        updateQuizPhraseState();
    }
    if(nextCharacter===document.querySelector('#quizRow').lastElementChild){
        movingCrocodile.pause();
        document.querySelector('#hammer').style.visibility='visible';
    }
}
function updateQuizPhraseState(){
    const nextCharacter = document.querySelector('#td'+nextCharacterNum);
    nextCharacter.style.color='whitesmoke';
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

