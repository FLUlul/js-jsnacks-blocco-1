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
const arrNumDoppi = [];//test

for(i=0; i<50; i++){
    const x = Math.floor(Math.random()*100 +1);

    if(x !== arrNum[i]){
        arrNum.push(x);
        console.log(x, arrNum[i]);
    }else{//test
        arrNumDoppi.push(x);//test
    }
}
console.log(arrNum);
console.log(arrNumDoppi);//test