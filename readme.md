PROBLEMA: Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

SOLUZIONE:

1 Creare un array che arriva fino a 16
2 Assegnre alle celle dell'array un colore specifico che se una volta clickato cambia colore. 
3 Fare in modo che l'array creato si disponga in modo randominco sulla griglia di gioco
4 Creare una funzione che traccia i click dell'utente
5 creare una funzione che prende i click tracciati e li espone a schermo all'utente per fargli vedere il punteggio
6 Limitare i click (se le caselle sono 100 da togliere 16)
7 Unire il tutto e fare una codizione di vittoria o sconfita
    7.1 SE l'utente clicka sulla bomba Game over ed espondo il punteggio
    7.2 ALTRIMENTI se cliccato n -16 il giocatore ha vinto.

SUPER BONUS 1 
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.