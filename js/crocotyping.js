showTheGamePage();

function showTheGamePage(){
    
    startRound();
}
function startRound(){
    setQuiz();
    const movingCrocodile = startMovingCrocodile();
    judge(movingCrocodile)
}
function setQuiz(){
    const tp = document.querySelector('#tp');
    var quiz = `<table ><tr><td id='cur'>a</td><td>s</td><td>d</td><td>f</td></tr></table>`
    tp.insertAdjacentHTML('afterend',quiz);
}
function judge(movingCrocodile){
    const bd = document.querySelector('body');
    bd.addEventListener('keyup',(event)=>{
        const cur = document.querySelector('#cur');
        let currentCharacter = cur.textContent;
        if(event.key===currentCharacter){
            cur.setAttribute('id','');
            cur.style.color='lightgrey';
            if(cur===cur.parentNode.lastElementChild){
                movingCrocodile.pause();
            }else{
                cur.nextElementSibling.setAttribute('id','cur');
            } 
        }
    })
}
function startMovingCrocodile(){
    const elem = document.querySelector('#crocodile');
    const movingCrocodile = elem.animate(
        {
            transform:['translateX(100px) rotate(0deg)','translateX(0px) rotate(0deg)']
        },
        {
            duration: 3000,
        }
    );
    return movingCrocodile;
}

