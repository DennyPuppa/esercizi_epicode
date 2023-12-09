"use strict";

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
    string: sono una serie di caratteri racchiusi fra '' o "", ex. "Il mio nome è Denny"
    boolean: dato logico che può avere solo due valori, true o false
    number: i numeri che conosciamo, possono anche essere scritti in decimale
    undefine: rappresenta un valore che non esiste ancora, ex. let zucchero, diamo il nome alla nostra ciotola ma non sappiamo cosa contenga
    Null: rappresenta un valore vuoto, ex. let zucchero = Null, svuotiamo la nostra ciotola del suo contenuto, qualsiasi esso sia.
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* In poche parole sono come una sorta di gruppo di variabili che ne descrivono un'unica: ad esempio la descrizione di una persona,
let denny = la variabile oggetto denny sarà uguale al suo nome, età, colore capelli ecc... */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
var somma = 12 + 20;
console.log(somma);
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;
/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var name = 'Denny';
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

var sottrazione = 4 - x;
console.log(sottrazione);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

var name1 = 'john';
var name2 = 'John';
console.log("Le due stringhe sono uguali? " + (name1 == name2));
name2 = name2.toLowerCase();
console.log("Le due stringhe sono uguali? " + (name1 == name2)); //HO NOTATO CHE QUANDO CREO FILE .JS MI CREA IN AUTOMATICO UNA CARTELLA CON NOME DIST, COSA SAREBBE?