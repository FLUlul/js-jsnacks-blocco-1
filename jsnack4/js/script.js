/* 4 - In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

/* 
-creo un'array con tot nomi
-creo una variabile e chiedo all'utente il suo nome

-creo una variabile x di valore falso
-con un ciclo scorro l'array (per la lunghezza dell'array)
    -se la variabile utente e' uguale a un contenuto dell'array
        -la variabile x assume il valore di vero

-se la variabile x assume il valore di vero
    -stampo "puoi accedere alla festa"
-altrimenti
    -stampo "non puoi accedere alla festa"
*/

const list = ["Valerio", "Carola", "Bruno", "Daniela"];
const userName = prompt("Insert your name to check (first letter in uppercase)")

let x = false;
for(i=0; i<list.length; i++){
    if(userName===list[i]){
        x=true;
    }
}

if(x===true){
    console.log(`${userName} you can access!`
    );
}else{
    console.log(`sorry, ${userName} you can't access!`);
}