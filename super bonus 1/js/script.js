'use strict';
// dichiaro le variabili in uso
let grid = document.querySelector('.grid-container');
let play = document.getElementById('play');
let boxGrid = document.querySelector('.grid-container');
let reset  = document.getElementById('reset');
let bombs = [];
let endGame = document.querySelector('.game-over');
let punteggio = 0;
let gameEnded = false;
//nuova funzione per implementare sia il grid che anche l'array:
function gridCreator(numeri) {
    let victory = numeri * numeri;
    //un ciclo che contionua fino a quando no raggiunge i 16 elementi dell'array in modo random.
    while (bombs.length < 16) {
        let randomBomb = Math.floor(Math.random() * 49) + 1;
        if (!bombs.includes(randomBomb)) {
          bombs.push(randomBomb);
        }
    };

    //qwuesto for rimane invariato
    for (let i = 1; i <= numeri*numeri; i++) {

      let box = document.createElement('div');
      box.classList.add('box');
      box.style.width = `calc(100% / ${numeri})`;
      box.innerHTML = `<a href="#">${i}</a>`;
      //modificare ad event listener dove il click sulla bomba determina il risultato e la fine della partira 

      box.addEventListener('click', function() {     
        //blocco click
        if (gameEnded){
          return;
        }
        // se clicco sulla casella contente un numero dell'array delle variabile bombs
        if (bombs.includes(parseInt(this.innerText))){
          box.classList.add('bomb-color');
          endGame.innerHTML = 
          `
          <h2 class="fw-bold display-4">Game Over</h2>
          <h4 class="fw-bold"> Il tuo punteggio e: ${punteggio}</h4>
          `;
          gameEnded = true;
        }
        // se clicco sul tasto che non contiene la bomba
        else{
          if (!box.classList.contains('clicked')) {
            box.classList.add('clicked');
            box.classList.toggle('box-color');
            punteggio++; 
          }
          if (punteggio === victory - bombs){
            endGame.innerHTML = 
          `
          <h2 class="fw-bold display-4">Hai vinto!</h2>
          <h4 class="fw-bold"> Il tuo punteggio e: ${punteggio}</h4>
          `
          gameEnded = true;
          }
        }
      });
      
      boxGrid.appendChild(box);
    }
}

// al click di questo tasto i resetta tutta la pagina (problea: se l'utente cambia griglia e clicka rest e come se generasse un campo nuovo)
reset.addEventListener('click', function(){
  let gridSelector = document.getElementById('gridselectror').value;
  boxGrid.innerHTML = '';
  punteggio = 0;
  if (gridSelector === '3'){
    gridCreator(7);
  }
  else if ( gridSelector === '2'){
    gridCreator(9);
  }
  else{
    gridCreator(10);
  }
});

// genera una partita nuova 
play.addEventListener('click', function(){
  let gridSelector = document.getElementById('gridselectror').value;
  boxGrid.innerHTML = '';
  endGame.innerHTML = '';
  punteggio = 0;
  bombs = []
  gameEnded = false;

  if (gridSelector === '3'){
    gridCreator(7);
  }
  else if ( gridSelector === '2'){
    gridCreator(9);
  }
  else{
    gridCreator(10);
  }

});