"use strict";

const score_0_ele = document.querySelector("#score--0");
const score_1_ele = document.getElementById("score--1"); // same as querySelector but id
const dice_ele = document.querySelector(".dice");
const btn_roll = document.querySelector(".btn--roll");
const btn_hold = document.querySelector(".btn--hold");
const btn_new = document.querySelector(".btn--new");
const player_active_0 = document.querySelector(".player--0");
const player_active_1 = document.querySelector(".player--1");



//function switch_player
function switch_player() {
  document.getElementById(`current--${active_player}`).textContent = 0;
  current_score = 0;
  active_player === 0 ? (active_player = 1) : (active_player = 0);
  player_active_0.classList.toggle("player--active");
  player_active_1.classList.toggle("player--active");
}

//function for generating the random dice
function rollDice() {
  if (playing) {
    const dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.wins').classList.add('hidden');
    dice_ele.classList.remove("hidden");
    dice_ele.src = `dice-${dice}.png`;
    if (dice === 1) {
      //switch to next player
      switch_player();
    } else {
      //add dice to current score
      current_score += dice;
      document.getElementById(`current--${active_player}`).textContent =
        current_score;
    }
  }
}
function hold_score() {
  if (playing) {
    //add current score to active player
    score[active_player] += current_score;
    document.getElementById(`score--${active_player}`).textContent =
      score[active_player];
    //check score >=100
    if (score[active_player] >= 100) {
      //finish game
      playing = false;
      document
        .querySelector(`.player--${active_player}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${active_player}`)
        .classList.remove("player--active");
        dice_ele.classList.add("hidden");

    }
    //switch to next player
    else switch_player();
  }
}
let active_player,playing,current_score,score
function init(){
    
    score = [0, 0];
    current_score = 0;
    active_player = 0;
    playing = true;
    score_0_ele.textContent = 0;
    score_1_ele.textContent = 0;

    document.querySelector('.wins').classList.remove('hidden');
    dice_ele.classList.add("hidden");
    document.getElementById('current--0').textContent =0
    document.getElementById('current--1').textContent =0
    player_active_1.classList.remove('player--active')
    player_active_0.classList.remove('player--winner')
    player_active_1.classList.remove('player--winner')
    player_active_0.classList.add('player--active')

    
}

init()
btn_roll.addEventListener("click", rollDice);
btn_hold.addEventListener("click", hold_score);
btn_new.addEventListener("click", init);
