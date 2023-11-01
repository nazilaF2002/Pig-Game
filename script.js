'use strict';
 const score_0= document.getElementById("score--0");
 const score_1= document.getElementById("score--1");
 const dice= document.querySelector(".dice");
 const btn_roll=document.querySelector(".btn--roll");
 const btn_hold=document.querySelector(".btn--hold");
 const current_0=document.getElementById("current--0");
 const current_1=document.getElementById("current--1");
 const player_0=document.querySelector(".player--0");
 const player_1=document.querySelector(".player--1");
 const btn_new=document.querySelector('.btn--new');
//  const name_1=document.getElementById('name--0');
score_0.textContent=0;
score_1.textContent=0;
dice.classList.add("hidden");


let activePlyear,currentScore,isGamePlaying,scores;
 
function init() {
    score_0.textContent=0;
    score_1.textContent=0; 
     activePlyear=0;
       currentScore=0; 
      isGamePlaying=true; 
      scores=[0,0]
      dice.classList.add("hidden");
      document.querySelector(`.player--0`).classList.add('player--active');
      document.querySelector(`.player--1`).classList.remove('player--active');
      document.querySelector(`.player--0`).classList.remove('player--winner');
      document.querySelector(`.player--1`).classList.remove('player--winner');
      document.querySelector(`#name--0`).textContent="player 1";
      document.querySelector(`#name--1`).textContent="player 2";
      
      document.getElementById(`current--0`).textContent=currentScore;
      document.getElementById(`current--1`).textContent=currentScore;
    //   document.querySelector('.name').textContent=;
}
init();
function switchplayer(){
    currentScore=0;
    document.getElementById(`current--${activePlyear}`).textContent=currentScore;
    activePlyear=activePlyear==0? 1:0;
    player_0.classList.toggle('player--active');
    player_1.classList.toggle('player--active');
}
btn_roll.addEventListener('click',function(){
    if (isGamePlaying) {
        dice.classList.remove("hidden");
        const diceRandomNumber=Math.trunc(Math.random()*6+1);
        // console.log(diceRandomNumber);
        dice.src=`dice-${diceRandomNumber}.png`;
    
        if (diceRandomNumber!==1) {
            currentScore += diceRandomNumber; 
            document.getElementById(`current--${activePlyear}`).textContent=currentScore;
        }
       else{
        //switch player
        switchplayer();
       }      
    }
  
});
btn_hold.addEventListener('click',function(){
    if (isGamePlaying) {
        scores[activePlyear]+=currentScore;
        document.getElementById(`score--${activePlyear}`).textContent=scores[activePlyear];        


        if (scores[activePlyear]>=30) {
            document.querySelector(`.player--${activePlyear}`)
            .classList.add('player--winner');

            document.querySelector(`#name--${activePlyear}`).textContent="You win";

            document.querySelector(`.player--${activePlyear}`)
            .classList.remove('player--active');
            dice.classList.add('hidden');
            // name_1.textContent=Winner;
            // document.querySelector('.current').styles.backgroundColor=red;
        
            isGamePlaying=false;

        }
     
     else{
        switchplayer();
     }
        
    }

});
btn_new.addEventListener('click',init);
