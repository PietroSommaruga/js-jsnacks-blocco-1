// Dichairo la variabile che cambierò con il prompt
let userNumber = 0;
// Apro un ciclo for per ripere 10 volte il prompt
for(let i = 0 ; i < 10 ;i++){
    // Eseguo la somma dei 10 prompt
    userNumber+= parseInt(prompt('inserisci un numero'));
}
console.log(userNumber);
