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

   var codePlayer = '';
   var casualNumber = '';

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
};

// creo array vuoto per i giocatori
var giocatori = [];

//ora devo creare il singolo oggetto player per identificare il singolo giocatore
// e le sue varie statistiche:

var player = {
  'codice': '',
  'punti': '',
  'rimbalzi': '',
  'falli': '',
  'tiri da 2 punti': '',
  'tiri da 3 punti': ''
};

console.log(player);

//creo le varie funzioni per generare le statistiche dei giocatori:

function randomPunti() {
  var punti = Math.floor(Math.random()*500);
  return punti;
};
function randomRimbalzi() {
  var rimbalzi = Math.floor(Math.random()*500);
  return rimbalzi;
};
function randomfalli() {
  var falli = Math.floor(Math.random()*500);
  return falli;
};
function randomTiri2() {
  var tiri2 = Math.floor(Math.random()*500);
  return tiri2;
};
function randomTiri3() {
  var tiri3 = Math.floor(Math.random()*500);
  return tiri3;
};

// Ora devo assegnare ciò che le funzioni ritornano alle varie
// proprietà dell'oggetto Giocatore, e devo fare il tutto per 100 volte

//posso farlo con ciclo while

// var i = 0;
// while (i<100) {
//
//   var player = {
//     'bla': randomPunti(),
//     'rimbalzi': randomRimbalzi() ,
//     'falli': randomfalli(),
//     'tiri da 2 punti': randomTiri2(),
//     'tiri da 3 punti': randomTiri3()
//   };
//
//   i++;
// }
//
// console.log(player);


//oppure posso farlo con ciclo for
for (var i = 0; i < 100; i++) {

  // var giocatori = [];
  var player = {
    'codice': creaCodice(),
    'punti': randomPunti(),
    'rimbalzi': randomRimbalzi() ,
    'falli': randomfalli(),
    'tiri da 2 punti': randomTiri2(),
    'tiri da 3 punti': randomTiri3()
  }

// e inserisco nell'array vuoto "giocatori" ogni singolo oggetto "player"
  giocatori.push(player);

};

console.log(giocatori);

for (var k=0; k<giocatori.length; k++){
  $('.elencoGiocatori').append('<option class="singologiocatore" value="'+giocatori[k].codice+'">'+giocatori[k].codice+'</option>');
}


// devo terminare! Devo creare nell'HTML una lista con i vari giocatori e fare sì
// che cliccando su ogni giocatore si vedano le sue statistiche
