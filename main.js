/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Buon lavoro!*/

// var km request
let km = parseInt(prompt("Quanti km dovrà percorrere il passeggero?"));
console.log(km);

// var age request
let age = parseFloat(prompt("Quanti anni ha il passeggero?"));
console.log(age)

// const 0.21 € * km
const fullPrice = (km * 0.21);

//const price U 18
const priceU18 = fullPrice - (fullPrice * 20 / 100);

//const price Ov 65
const priceOv65 = fullPrice - (fullPrice * 40 / 100);
console.log(priceOv65)


// 20% discount U 18
if (age < 18) {
    console.log("Hai diritto allo sconto del 20%");
    let finalPrice = (km * priceU18);

}


// 40% discount Ov 65
if (age >= 65) {
    let finalPrice = (km * priceOv65);
}

// fullPrice, from 18 to 64 age
else (age > 18 < 65){
    let finalPrice = (fullPrice * km);
}