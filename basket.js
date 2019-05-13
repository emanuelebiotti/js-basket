// Il software deve generare casualmente le statistiche di gioco
// di 100 giocatori di basket per una giornata di campionato.
// In particolare vanno generate per ogni giocatore le seguenti informazioni,
// facendo attenzione che il numero generato abbia senso:
// - Codice Giocatore Univoco (formato da 3 lettere maiuscole casuali e 3 numeri)
// - Numero di punti fatti
// - Numero di rimbalzi
// - Falli
// - Percentuale di successo per tiri da 2 punti
// - Percentuale di successo per tiri da 3 punti
// Tutti i giocatori verranno visualizzati tramite il loro codice (in una select,
// una lista, …).
// Una volta cliccato sul codice giocatore, nel corpo principale verranno
// visualizzate le statistiche corrispondenti.


//devo creare una funzione per generare il codice identificativo dei giocatori
function creaCodice(){

// il codice identificativo (codeplayer) si compone di un numero di tre cifre
// ovvero (casualNumber ripetuto 3 volte) e di tre lettere (casualLetter ripetuta 3 volte)

   var codePlayer = "";
   var casualNumber = "";

   for (var i = 0; i < 3; i++) {
     //Genero una lettera casuale maiuscola prendendo i valori dall'unicode
     var casualLetter = String.fromCharCode(Math.floor((Math.random()*(90 - 65 + 1) + 65)));
     codePlayer += casualLetter;
   }

   for (var i = 0; i < 3; i++) {
     // genero un numero casuale da 1 a 9
     casualNumber = Math.floor((Math.random() * 9) + 1);
     codePlayer += casualNumber;
   }

   return codePlayer;

}

// metto il codice creato dalla funzione "creacodice" in una variabile
var codiceGiocatore = creaCodice();

console.log(codiceGiocatore);

// devo generare 100 codici diversi, quindi uso ciclo for per far
// eseguire la funzione "creacodice" 100 volte

for(var i = 0; i < 100; i++) {
  var codiceGiocatore = creaCodice();
  console.log(codiceGiocatore);
};
