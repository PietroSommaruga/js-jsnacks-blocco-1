//  Definisco le variabili
var value =  prompt('Inserisci un numero di 4 cifre')
    sum = 0;


while (value) {
    // Creo il resto dell'ultimo decimale sommandolo a sum
    sum += value % 10;
    value = Math.floor(value / 10);
}
//  Stampo
console.log(sum);