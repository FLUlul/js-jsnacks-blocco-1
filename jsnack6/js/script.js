/* 6 - Genera un array di 50 numeri random. Nell’array non devono esserci doppioni. */

/* 
-creo un'array vuoto 
-creo un ciclo per riempire l'array di 50 numeri random
    -creo una variabile x che generi numeri random da 1 a 100
    -se la variabile x e' diverso da indice array
        -pusho variante x nell'array 
-stampo l'array
*/

const arrNum = [];


while(arrNum.length<50){

    const x = Math.floor(Math.random()*50 +1);
    let same = false;

    for(let i = 0; i<=arrNum.length; i++){
        if(arrNum[i] == x) {
            same = true;
        }
    }

    //si poteva anche usare al posto del for
    //let same = arrNum.includes(x);

    if(same == false) {
        arrNum.push(x);  
    }
    console.log(same);
}


console.log(arrNum);

