/* 5 - Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

/* 
-creo un'array vuoto
-creo un ciclo che duri 6 volte
    -creo una costante x, chiedo all'utente di inserire un numero
    -se la costante x e' un numero dispari
        -pusho x nell' array
-stampo gli indici dell'array
*/

const arrNum = [];

for(i=0; i<6; i++){
    const x = parseInt(prompt("Insert a number"));

    if(x % 2 !== 0){
        arrNum.push(x);
    }    
}
console.log(`All the odd numbers are: ${arrNum}`);
