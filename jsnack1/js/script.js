/* 1 - L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

/* 
-creo una variabile con un prompt che chiede il primo numero OK
-creo una variabile con un prompt che chiede il secondo numero OK
-se la prima variabile e' maggiore della seconda OK
    -stampo la prima variabile OK
-altrimenti OK
    -stampo la seconda variabile OK
*/

const numOne = parseInt(prompt("Insert the first Number"))
const numTwo = parseInt(prompt("Insert the second Number"))

if(numOne>numTwo){
    console.log(`The highest value numer is the first: ${numOne}`);
}else{
    console.log(`The highest value numer is the second: ${numTwo}`)
}