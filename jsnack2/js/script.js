/* 2- L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

/* 
-creo la prima variabile a cui associo il prompt della prima parola OK
-creo la seconda variabile a cui associo il prompt della seconda parola OK
-se la prima variabile e' lunghezza caratteri maggiore della seconda variabile lunghezza caratteri
    -stampo seconda variabile
    -stampo prima variabile
-altrimenti
    -stampo prima variabile
    -stampo seconda variabile
*/

const wordOne = prompt("Insert your first word");
const wordTwo = prompt("Insert your second word");

if (wordOne.length > wordTwo.length){
    console.log(`The second word is: ${wordTwo}`);
    console.log(`The first word is: ${wordOne}`);
}else{
    console.log(`The first word is: ${wordOne}`);
    console.log(`The second word is: ${wordTwo}`);
}
