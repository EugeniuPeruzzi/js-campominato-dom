'use strict';
// dichiaro le variabili in uso
let grid = document.querySelector('.grid-container');
let play = document.getElementById('play');
let boxGrid = document.querySelector('.grid-container');
let reset  = document.getElementById('reset');

// creo la funzione per generare il grid
function gridCreator(numeri) {
    for (let i = 1; i <= numeri*numeri; i++) {

      let box = document.createElement('div');
      box.classList.add('box');
      box.style.width = `calc(100% / ${numeri})`;
      box.innerHTML = `<a href="#">${i}</a>`;
      
      box.addEventListener('click', function() {
        box.classList.toggle('box-color');
      });
      
      boxGrid.appendChild(box);
    }
}
// al click di questo tasto i resetta tutta la pagina (problea: se l'utente cambia griglia e clicka rest e come se generasse un campo nuovo)
reset.addEventListener('click', function(){

  boxGrid.innerHTML = '';

  gridCreator(10);

});

// grid che rimarra fisso all'apertura della pagina 
gridCreator(10)

