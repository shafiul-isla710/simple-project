(function(){
 
    const p1_score = document.getElementById('player1_score');
const p2_score = document.getElementById('player2_score');

const playing_number = document.getElementById('playing_number');
const inputScore = document.getElementById('inputScore');


const player1_btn = document.getElementById('player1_btn');
const player2_btn = document.getElementById('player2_btn')

const reset = document.getElementById('reset');

let p1 = 0;
let p2 = 0;
let winscore = 0;
let gameOver = false;



function winer(old,win){
    if(old === win){
        gameOver != false;
        player1_btn.setAttribute('disabled', 'disabled')
        player2_btn.setAttribute('disabled', 'disabled')
         
        if(p1 ===winscore){
            p1_score.classList.add('winner')
        }
        else{
            p2_score.classList.add('winner')
        }
        
     }
}
reset.addEventListener('click',reset1)
function reset1(){
    p1 = 0;
    p2 = 0;
    gameOver = false;
    p1_score.textContent = 0;
    p2_score.textContent = 0;
    player1_btn.removeAttribute('disabled')
    player2_btn.removeAttribute('disabled')
    
    p1_score.classList.remove('winner')
    p2_score.classList.remove('winner')
}



player1_btn.addEventListener('click', ()=>{
    if(!gameOver){
        p1 ++;
       winer(p1,winscore)
    }
    p1_score.textContent = p1;
})

player2_btn.addEventListener('click', ()=>{
    if(!gameOver){
        p2 ++;
      winer(p2,winscore)
    }
    p2_score.textContent = p2;
})



reset.addEventListener('click', ()=>{
    console.log('reset btn is clicked')
})

inputScore.addEventListener('change', ()=>{
    playing_number.textContent = inputScore.value;
    winscore = Number(inputScore.value)
    inputScore.value = ''
    reset1()

})
     
})()



