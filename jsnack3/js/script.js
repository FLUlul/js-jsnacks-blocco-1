/* 3 - Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

/* 
-creo una variabile x = 0

-creo un ciclo che si ripeta per 10 volte
    -creo una variabile y che chiede all'utente di inserire un numero con un prompt
    -addiziono il numero utente con la variabile x

-stampo la variabile x
*/

let x = 0;

for(i=0; i<10; i++){
    let y = parseInt(prompt("Insert a number"));
    x+=y;
}

console.log(x);