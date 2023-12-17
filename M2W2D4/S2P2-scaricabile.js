// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2, 50, 20]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!

let totalShoppingPrices = 0;

for (let i = 0; i < prices.length; i++) {
  totalShoppingPrices += prices[i];  
}

console.log("Totale spesa carrello: " + totalShoppingPrices + "€");

if (utenteCheEffettuaLAcquisto.isAmbassador) { 
  const sconto = (totalShoppingPrices * 30) / 100;
  totalShoppingPrices -= sconto;
  console.log("Ciao " + utenteCheEffettuaLAcquisto.name + " sei un Ambassador, hai il diritto al 30% di sconto, nuovo totale: " + totalShoppingPrices + "€");
} else{
  console.log("Ciao " + utenteCheEffettuaLAcquisto.name + " purtroppo non fai parte degli Ambassador! Vuoi iscriverti per avere uno sconto del 30%?");
}

if (totalShoppingPrices > 100) {
  console.log("Spedizione gratuita! Totale: " + totalShoppingPrices + "€");
} else{
  totalShoppingPrices += shippingCost;
  console.log("Costo spedizione 50€. Totale: " + totalShoppingPrices + "€");
}

let user = [];
user.push(marco, paul, amy);

for (let i = 0; i < user.length; i++) {
  const userArray = user[i];
  if (userArray.isAmbassador) {
    console.log(userArray.name + " " + userArray.lastName + " è un Ambassador");
    let userAmbassador = [];
    userAmbassador.push(userArray);
    console.log(userAmbassador);
  } else {
    console.log(userArray.name + " " + userArray.lastName + " non è un Ambassador");
  }
}