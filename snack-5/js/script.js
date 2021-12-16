// creo un array vuoto
const numList = [];
// creo una variabile con valore 0 di default
sum = 0;

// creo un ciclo do while a
// chiedo all'utente un serie di numeri fino ad arrivare a 50 
do {
    let number = parseInt(prompt('Inserisci un numero'));
    numList.push(number);
    sum += parseInt(number);
    console.log(number);
    console.log(numList)
} while (sum < 50);
console.log(sum)